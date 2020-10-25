class Ball extends Sphere{

    constructor(radius){

        super(0, 0, 0, radius, 0xFFFFFFF);

        //TIME
        this.time = new THREE.Clock();
        this.delta;

        //SPEED
        this.start_speed = THREE.Math.randFloat(50,80);
        this.fall_speed = 0;

        //DIRECTION
        var random_x = THREE.Math.randInt(-1,1);
        var random_z = THREE.Math.randInt(-1,1);
        this.direction = new THREE.Vector3(random_x, 0, random_z);
        this.direction.setLength(this.start_speed);
        //FLAGS
        this.fall = false;
        this.inside_hole = false;

        this.radius = radius;

        this.hole_x;
        this.hole_z;
        this.hole_radius;

        scene.add(this);

    }

    move(){
        if(this.fall) return;
        this.translateX(this.direction.x * this.delta);
        this.translateZ(this.direction.z * this.delta);

        if(!this.fall){
          //this.spin();
        }
        if (this.direction.length() > 0) {
            var l = this.direction.length()
            this.direction.setLength(l - this.delta*10);
        }
        else {
            this.direction.setLength(0);
        }
    }

    spin(){


        var rotationAxis = new THREE.Vector3();
        rotationAxis.set(this.direction.x, 0, this.direction.z).normalize(); //vetor perpendicular ao da velocidade
        rotationAxis.cross(THREE.Object3D.DefaultUp); //produto externo

        var auxVector = new THREE.Vector3(this.direction.x * this.delta, 0, this.direction.z * this.delta);
        var angle = -auxVector.length() / (Math.Pi * this.radius) * Math.Pi;
        this.rotateOnAxis(rotationAxis, angle);

    }

    falling(){

      if (this.fall){
          this.direction.set(0, this.direction.length() + this.delta * 9.8, 0);
          this.translateY(-this.direction.length() * this.delta);

      }

    }


    //quando o centro de massa da bola esta dentro do buraco mas
    //uma parte da bola ainda esta na mesa
    moveInsideHole(){

        //esta dentro do buraco mas nao esta pronto para cair
        if (this.inside_hole && !this.fall){

            //verifica se esta dentro do buraco

            var distHoleToBall = Math.sqrt((this.hole_x - this.position.x)**2 + (this.hole_z - this.position.z)**2);

            if (distHoleToBall + this.radius < this.hole_radius){

                    //encontra-se pronto para cair

                    this.fall = true;
                    this.direction.set(0, 1, 0);

            }

            //se nao estiver continuar move com velocidade inicial, mas mudamos a direcao no inside_hole

        }

    }

    insideHole(hole_x, hole_z, hole_radius){

        var distHoleToBall = Math.sqrt((hole_x - this.position.x)**2 + (hole_z - this.position.z)**2);

        if ( distHoleToBall < hole_radius) {

            //var color = new THREE.Color('#ff0000');
            //this.material.color.setHex( color.getHex());

            this.inside_hole = true;
            this.hole_x = hole_x;
            this.hole_z = hole_z;
            this.hole_radius = hole_radius;
            var speed = this.direction.length();
            this.direction.set(hole_x - this.position.x, this.direction.y, hole_z - this.position.z).normalize(); //normalizar o vetor;
            this.direction.setLength(speed);

            return true;
        }

        return false;
    }

    // se o centro da bola estiver dentro do buraco cai,
    // se nao mantem-se no sitio
    checkInHole(){
        if(this.inside_hole) return;
        var hole_radius = 6.5;

        var hole_x = -100+6.5+1;
        var hole_z = -50+6.5+1;
        if (this.insideHole(hole_x, hole_z, hole_radius)) return;

        hole_x = -100+6.5+1;
        hole_z = 50-6.5-1;
        if (this.insideHole(hole_x, hole_z, hole_radius)) return;

        hole_x = 0;
        hole_z = -50+6.5+1;
        if(this.insideHole(hole_x, hole_z, hole_radius)) return;

        hole_x = 100-6.5-1;
        hole_z = -50+6.5+1;
        if (this.insideHole(hole_x, hole_z, hole_radius)) return;

        hole_x = 100-6.5-1;
        hole_z = 50-6.5-1;
        if (this.insideHole(hole_x, hole_z, hole_radius)) return;

        hole_x = 0;
        hole_z = 50-6.5-1;
        if (this.insideHole(hole_x, hole_z, hole_radius)) return;

    }

    wallColision(){
        var wallL = -100+0.05;
        var wallR = 100-0.05;
        var wallU = 50-0.05;
        var wallD = -50+0.05;

        if((this.position.x <= wallL + this.radius) || (this.position.x >=wallR - this.radius)){
          this.direction.x = -this.direction.x;
        }

        if((this.position.z >= wallU - this.radius) || (this.position.z <=wallD + this.radius)){
          this.direction.z = -this.direction.z;
        }
    }

    updateTime() {
        this.delta = this.time.getDelta();
    }

    update(){
        this.updateTime();
        this.checkInHole();
        this.moveInsideHole();
        this.move();
        this.falling();
        this.wallColision();
        


    }

}

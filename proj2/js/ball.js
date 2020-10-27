class Ball extends Sphere{

    constructor(radius, color){

        super(0, 0, 0, radius, color);

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
        this.wall_colision_x = false;
        this.wall_colision_z = false;

        this.radius = radius;

        this.hole_x;
        this.hole_z;
        this.hole_radius;

        scene.add(this);

    }

    setBall(x,y,z){
        this.position.x = x;
        this.position.y = y;
        this.position.z = z;
    }

    move(){
        if(this.fall) return;
        this.spin();
        this.position.x += (this.direction.x * this.delta);
        this.position.z += (this.direction.z * this.delta);

        if (this.direction.length() > 0) {
            var l = this.direction.length()
            this.direction.setLength(l - this.delta*10);
        }
        else {
            this.direction.setLength(0);
        }
    }

    spin(){
        if (!this.fall && this.direction.length() != 0){
            var rotationAxis = new THREE.Vector3(this.direction.x, 0, this.direction.z); //vetor perpendicular ao da velocidade
            rotationAxis.cross(THREE.Object3D.DefaultUp).normalize(); //produto externo

            var auxVector = new THREE.Vector3(this.direction.x * this.delta, 0, this.direction.z * this.delta);
            var angle = -auxVector.length() / this.radius;
            this.rotateOnWorldAxis(rotationAxis, angle);
        }
    }

    falling(){

      if (this.fall){
          this.direction.set(0, this.direction.length() + this.delta * 9.8, 0);
              this.position.y -= (this.direction.length() * this.delta);

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

    checkWallColision(){
        var wallL = -100+0.05;
        var wallR = 100-0.05;
        var wallU = 50-0.05;
        var wallD = -50+0.05;

        if((this.position.x <= wallL + this.radius) || (this.position.x >=wallR - this.radius)){
          this.wall_colision_x = true;
        }

        if((this.position.z >= wallU - this.radius) || (this.position.z <=wallD + this.radius)){
          this.wall_colision_z = true;
        }
    }

    treatWallColision(){

        if (this.wall_colision_x){
            this.direction.x = -this.direction.x;
            this.wall_colision_x = false;
        }

        if (this.wall_colision_z){
            this.direction.z = -this.direction.z;
            this.wall_colision_z = false;
        }
    }

    treatBallsColision(list_ball_colisions){

        var ball1 = this;

        for (var i=0; i<list_ball_colisions.length; i++){

            var ball2 = list_ball_colisions[i];

            //verifica se as bolas estão na mesma posição nos yy
            if(ball1.direction.y == ball2.direction.y){

                var diffVelocity1 = ball1.direction.clone().sub(ball2.direction);
                var diffVelocity2 = ball2.direction.clone().sub(ball1.direction);

                var diffPosition1 = ball1.position.clone().sub(ball2.position);
                var diffPosition2 = ball2.position.clone().sub(ball1.position);


                var dot1 = diffVelocity1.clone().dot(diffPosition1);
                var dot2 = diffVelocity2.clone().dot(diffPosition2);

                //norma ao quadrado
                var norm1 = diffPosition1.lengthSq();
                var norm2 = diffPosition2.lengthSq();

                var tangent = new THREE.Vector3(-diffPosition1.z, 0 ,-diffPosition1.x);

                var dir1 = ball1.direction.clone().sub(diffPosition1.multiplyScalar(dot1 / norm1));
                var dir2 = ball2.direction.clone().sub(diffPosition2.multiplyScalar(dot2 / norm2));

                ball1.direction = dir1;
                ball2.direction = dir2;
            }
        }
    }

    updateTime() {
        this.delta = this.time.getDelta();
    }

    update(){

        this.updateTime();

        //movement
        this.move();
        this.falling();

        //checks for inside hole colision
        this.checkInHole();

        //checks for wall colision
        this.checkWallColision();

    }

}

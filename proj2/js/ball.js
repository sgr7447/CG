class Ball extends Sphere{

    constructor(radius){

        super(0, 0, 0, radius, 0xFFFFFFF);

        //TIME
        this.time = new THREE.Clock();
        this.delta;

        //SPEED
        this.start_speed = THREE.Math.randFloat(20,30);
        this.fall_speed = 0;

        //DIRECTION
        var random_x = THREE.Math.randInt(-1,1);
        var random_z = THREE.Math.randInt(-1,1);
        this.direction = new THREE.Vector3(random_x, 0, random_z);

        //FLAGS
        this.fall = false;
        this.inside_hole = false;

        scene.add(this);

    }

    move(){

        this.translateX(this.direction.x * this.delta * this.start_speed);
        this.translateZ(this.direction.z * this.delta * this.start_speed);

        if (this.start_speed > 0) {
            this.start_speed = this.start_speed - this.delta*10;
        }
        else {
            this.start_speed = 0;
        }
    }

    spin(){

    }

    falling(){

        if (this.fall){

            this.start_speed = 0;
            this.translateY( this.delta * this.fall_speed * -1);
            //mov unif acelerado -  a = g
            this.fall_speed = this.fall_speed + this.delta * 9.8;

        }

    }


    //quando o centro de massa da bola esta dentro do buraco mas
    //uma parte da bola ainda esta na mesa
    moveInsideHole(){

        //esta dentro do buraco mas nao esta pronto para cair
        if (this.inside_hole && !this.fall){

            //verifica se esta dentro do buraco
            if (Math.abs(this.hole_x - this.position.x) + this.radius < this.hole_radius && 
                Math.abs(this.hole_z - this.position.z) + this.radius < this.hole_radius){

                    //encontra-se pronto para cair
                    this.fall = true;
                            
            }

            //se nao estiver faz com que ele tombe para centro do buraco
            else{
                this.translateX(this.delta * this.direction.x * 2);
                this.translateZ(this.delta * this.direction.z * 2);
            }

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
            this.direction.x = (hole_x - this.position.x);
            this.direction.z = (hole_z - this.position.z);
            this.start_speed = 0;

            return true;
        }

        return false;
    }

    // se o centro da bola estiver dentro do buraco cai,
    // se nao mantem-se no sitio
    checkInHole(){

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

    updateTime() {
        this.delta = this.time.getDelta();
    }

    update(){
        this.updateTime();
        this.checkInHole();
        this.moveInsideHole();
        this.move();
        this.falling();
        this.spin();
    }

}
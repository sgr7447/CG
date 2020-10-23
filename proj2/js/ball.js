class Ball extends Sphere{
    
    constructor(radius){

        super(0, 0, 0, radius, 0xFFFFFFF);

        //TIME
        this.time = new THREE.Clock();
        this.delta;
        
        this.start_speed = THREE.Math.randFloat(20,35);
        this.fall_speed = 0;

        var random_x = THREE.Math.randInt(-1,1);
        var random_z = THREE.Math.randInt(-1,1);
        this.direction = new THREE.Vector3(random_x, 0, random_z);

        this.fall = false;

        scene.add(this);

    }

    move(){
        
        this.translateX(this.direction.x * this.delta * this.start_speed);
        this.translateZ(this.direction.z * this.delta * this.start_speed);

        if (this.start_speed > 0) this.start_speed = this.start_speed - this.delta*10;
        else this.start_speed = 0;

    }

    spin(){

    }

    falling(hole_x, hole_z, radius){

        if (this.fall){

            var ball_x = this.position.x;
            var ball_z = this.position.z;

        /*while(ball_x ){
            this.translateX( this.delta * this.speed);
            this.translateZ( this.delta * this.speed);
        }*/
        
            this.translateY( this.delta * this.fall_speed * -1);
            this.fall_speed = this.fall_speed + (this.delta*5) * 9.8;
        }

        
        

    }

    inHole(hole_x, hole_z, radius){

        if ( Math.sqrt( (hole_x - this.position.x)**2 + 
            (hole_z - this.position.z)**2) < radius) {

                var color = new THREE.Color('#ff0000');
                this.material.color.setHex( color.getHex());

                this.start_speed = 0;
                this.fall = true;
                
        }
    }

    // se o centro da bola estiver dentro do buraco cai,
    // se nao mantem-se no sitio
    checkInHole(){

        var radius = 6.5;

        var hole_x = -100+6.5+1;
        var hole_z = -50+6.5+1;
        this.inHole(hole_x, hole_z, radius);

        hole_x = -100+6.5+1; 
        hole_z = 50-6.5-1;
        this.inHole(hole_x, hole_z, radius);

        hole_x = 0; 
        hole_z = -50+6.5+1;
        this.inHole(hole_x, hole_z, radius);

        hole_x = 100-6.5-1; 
        hole_z = -50+6.5+1;
        this.inHole(hole_x, hole_z, radius);

        hole_x = 100-6.5-1; 
        hole_z = 50-6.5-1;
        this.inHole(hole_x, hole_z, radius);

        hole_x = 0; 
        hole_z = 50-6.5-1;
        this.inHole(hole_x, hole_z, radius);

    }

    updateTime() {
        this.delta = this.time.getDelta();
    }

    update(){
        this.updateTime();
        this.checkInHole();
        this.falling();
        this.move();
        this.spin();
    }

}

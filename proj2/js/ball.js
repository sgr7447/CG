class Ball extends Sphere{

    constructor(radius, color){

        super(0, 0, 0, radius, color);

        //TIME
        this.time = new THREE.Clock();
        this.delta;

        //SPEED
        this.start_speed = THREE.Math.randFloat(30,60);
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
        this.colisionBall = null;

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
        if(this.fall){
            this.direction.set(0, this.direction.length() + this.delta * 9.8, 0);
            this.position.y -= (this.direction.length() * this.delta * 20);
            return;
        }

        else if (this.inside_hole){
          var distHoleToBall = Math.sqrt((this.hole_x - this.position.x)**2 + (this.hole_z - this.position.z)**2);

          if (distHoleToBall + this.radius < this.hole_radius){

                  //encontra-se pronto para cair

                  this.fall = true;
                  this.direction.set(0, 1, 0);

          }
        }

        this.spin();
        this.position.x += (this.direction.x * this.delta);
        this.position.z += (this.direction.z * this.delta);

        if (this.direction.length() > 0) {
            this.direction.setLength(this.direction.length() - this.delta*10);
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


    updateTime() {
        this.delta = this.time.getDelta();
    }

    update(){

        this.updateTime();

        //movement
        this.move();

        //checks for inside hole colision
        //this.checkInHole();

        //checks for wall colision
        //this.checkWallColision();

    }

}

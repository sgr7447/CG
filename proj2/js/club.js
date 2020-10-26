class Club extends Cylinder{

    constructor(x, y, z, radx, rady, radz, len, radius1, radius2, color){

        super(x, y, z, radx, rady, radz, len, radius1, radius2, color);

        this.orig_color = new THREE.Color( color );
        this.angle_left = false;
        this.angle_right = false;
        this.total_rot_right = 0;
        this.total_rot_left = 0;

        //TIME
        this.time = new THREE.Clock();
        this.delta;

        //Ghost Ball
        this.ghostBall;

        this.timesSelected = 0;

        scene.add(this);

    }

    setClub(x,y,z){
        this.position.x = x;
        this.position.y = y;
        this.position.z = z;
    }

    
    select(index) {

        //create ghost ball
        this.timesSelected++;
        if ( this.timesSelected == 1){
            var radius = 5;
            this.ghostBall = new Ball(radius, '#FFFFFF');

            if (index == 0) this.ghostBall.setBall(-100+6.5+1, radius +0.05, 0);
            else if (index == 1) this.ghostBall.setBall(-50 , radius +0.05, -(50-6.5-1));
            else if (index == 2) this.ghostBall.setBall(50, radius +0.05, -(50-6.5-1));
            else if (index == 3) this.ghostBall.setBall(100-6.5, radius +0.05, 0);
            else if (index == 4) this.ghostBall.setBall(50, radius +0.05, 50-6.5-1);
            else if (index == 5) this.ghostBall.setBall(-50, radius +0.05, 50-6.5-1);
        }

        //change color
        this.material.color.setHex(0xFAF301);
    }

    unselect(){
        this.material.color.setHex(this.orig_color.getHex());
        this.timesSelected = 0;

        //destroy ghost ball
        scene.remove(this.ghostBall);
        this.ghostBall = null;
    }

    angleRight(){
        this.angle_right = true;
    }

    angleLeft(){
        this.angle_left = true;
    }

    stopAngleRight(){
        this.angle_right = false;
    }

    stopAngleLeft(){
        this.angle_left = false;
    }

    doAngle(){

        var max_angle = Math.PI/4;
        var angle = Math.PI/10;
        var rotation = angle * this.delta;

        if (this.angle_right && !this.angle_left){
            var total_rot_right = this.total_rot_right + rotation;

            if (total_rot_right <= max_angle){
                this.total_rot_right = total_rot_right;
                this.total_rot_left = this.total_rot_left - rotation;
                this.rotateY(-rotation);
            }
        }

        if (!this.angle_right && this.angle_left){
            var total_rot_left = this.total_rot_left + rotation;
            
            if (total_rot_left <= max_angle){
                this.total_rot_left = total_rot_left;
                this.total_rot_right = this.total_rot_right - rotation;
                this.rotateY(rotation);
            }
        }

    }

    updateTime() {
        this.delta = this.time.getDelta();
    }

    update() {
        this.updateTime();
        this.doAngle();
    }

}

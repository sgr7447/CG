class Club extends Cylinder{

    constructor(obj, x, y, z, radx, rady, radz, len, radius1, radius2, color){

        super(obj, x, y, z, radx, rady, radz, len, radius1, radius2, color);

        this.orig_color = new THREE.Color( color );
        this.angle_left = false;
        this.angle_right = false;
        this.total_rot_right = 0;
        this.total_rot_left = 0;

        //TIME
        this.time = new THREE.Clock();
        this.delta;

    }

    
    select() {
        this.material.color.setHex(0xFAF301);
    }

    unselect(){
        this.material.color.setHex(this.orig_color.getHex());
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

        var max_angle = Math.PI/5;
        var angle = Math.PI/10;
        var rotation = angle * this.delta;

        if (this.angle_right && !this.angle_left){
            var total_rot_right = this.total_rot_right + rotation;

            if (this.total_rot_right <= max_angle){
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

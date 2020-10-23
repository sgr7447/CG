class Ball extends Sphere{
    
    constructor(radius){

        super(0, 0, 0, radius, 0xFFFFFFF);

        //TIME
        this.time = new THREE.Clock();
        this.delta;
        
        this.speed = THREE.Math.randFloat(15,30);
        var random_x = THREE.Math.randInt(-1,1);
        var random_z = THREE.Math.randInt(-1,1);
        this.direction = new THREE.Vector3(random_x, 0, random_z);

        scene.add(this);

    }

    move(){
        
        this.translateX(this.direction.x * this.delta * this.speed);
        this.translateZ(this.direction.z * this.delta * this.speed);

        if (this.speed > 0) this.speed = this.speed - this.delta*10;

    }

    spin(){

    }

    checkInHole(){

    }

    updateTime() {
        this.delta = this.time.getDelta();
    }

    update(){
        this.updateTime();
        this.checkInHole();
        this.move();
        this.spin();
    }

}

class Ball extends Sphere{
    
    constructor(){

        var radius = 5;
        var hole_radius = 14;
        var x = [-100 +radius + hole_radius, 100 -radius -hole_radius];
        var z = [-50 +radius + hole_radius, 50 -radius -hole_radius];

        super(THREE.Math.randFloat(x[0], x[1]), radius +0.1, THREE.Math.randFloat(z[0], z[1]), radius, 0xFFFFFFF);

        //TIME
        this.time = new THREE.Clock();
        this.delta;
        
        this.speed = THREE.Math.randFloat(0,15);
        var random_x = THREE.Math.randInt(-1,1);
        var random_z = THREE.Math.randInt(-1,1);
        this.direction = new THREE.Vector3(random_x, 0, random_z);

        scene.add(this);

    }

    move(){

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

class Chassis extends THREE.Object3D{

    constructor(){

        super();

        var frontLeftWheel = new THREE.Object3D();
        var frontRightWheel = new THREE.Object3D();
        var rearLeftWheel = new THREE.Object3D();
        var rearRightWheel = new THREE.Object3D();
        var chassisPlatform = new THREE.Object3D();

        var wheelRadius = 88.9; //in cm
        var wheelHeight = 29.6;
        var chassisPlatformLength = 380.7;
        var chassisPlatformWidth = 202.7;
        var chassisPlatformHeight = 20;
        var platformHeight = 60;
        var wheelColor = 0x00000;

        frontLeftWheel.add(new Cylinder(-chassisPlatformLength/2, platformHeight + wheelRadius,
            -chassisPlatformWidth/2, 0, 1/2, 1/2, wheelHeight, wheelRadius, 200, 10, wheelColor));
        this.add(frontLeftWheel);

        frontRightWheel.add(new Cylinder(-chassisPlatformLength/2, platformHeight + wheelRadius,
            chassisPlatformWidth/2, 0, 1/2, 1/2, wheelHeight, wheelRadius, 200, 10, wheelColor));
        this.add(frontRightWheel);

        rearLeftWheel.add(new Cylinder(chassisPlatformLength/2, platformHeight + wheelRadius,
            -chassisPlatformWidth/2, 0, 1/2, 1/2, wheelHeight, wheelRadius, 200, 10, wheelColor));
        this.add(rearLeftWheel);

        rearRightWheel.add(new Cylinder(chassisPlatformLength/2, platformHeight + wheelRadius,
            chassisPlatformWidth/2, 0, 1/2, 1/2, wheelHeight, wheelRadius, 200, 10, wheelColor));
        this.add(rearRightWheel);

        chassisPlatform.add(new Cube(0, platformHeight + wheelRadius, 0, 0, 0, 0,
            chassisPlatformLength, chassisPlatformHeight, chassisPlatformWidth, wheelColor));
        this.add(chassisPlatform);

        this.scale.set(0.2, 0.2, 0.2);

        //scene.add(this);

    }

    newWheel(x, y, z){
        new Cylinder(x, y, z, 0, 1/2, 1/2, wheelHeight, wheelRadius, 200, 10, wheelColor);
    }
}

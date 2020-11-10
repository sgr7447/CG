class Chassis extends THREE.Object3D{

    constructor(wheelRadius, platformHeight){

        super();

        var wheelHeight = 29.6;
        var chassisPlatformLength = 380.7;
        var chassisPlatformWidth = 202.7;
        var chassisPlatformHeight = 20;
        var wheelColor = '#1a1a1a';

        var frontLeftWheel = new Cylinder(-chassisPlatformLength/2, platformHeight + wheelRadius,
            -chassisPlatformWidth/2, 0, 1/2, 1/2, wheelHeight, wheelRadius, 200, 10, wheelColor);
        this.add(frontLeftWheel);

        var frontRightWheel  = new Cylinder(-chassisPlatformLength/2, platformHeight + wheelRadius,
            chassisPlatformWidth/2, 0, 1/2, 1/2, wheelHeight, wheelRadius, 200, 10, wheelColor);
        this.add(frontRightWheel);

        var rearLeftWheel = new Cylinder(chassisPlatformLength/2, platformHeight + wheelRadius,
            -chassisPlatformWidth/2, 0, 1/2, 1/2, wheelHeight, wheelRadius, 200, 10, wheelColor);
        this.add(rearLeftWheel);

        var rearRightWheel = new Cylinder(chassisPlatformLength/2, platformHeight + wheelRadius,
            chassisPlatformWidth/2, 0, 1/2, 1/2, wheelHeight, wheelRadius, 200, 10, wheelColor);
        this.add(rearRightWheel);

        var chassisPlatform = new Cube(0, platformHeight + wheelRadius + chassisPlatformHeight/2, 0, 0, 0, 0,
            chassisPlatformLength, chassisPlatformHeight, chassisPlatformWidth-0.1, wheelColor);
        this.add(chassisPlatform);

    }

    /*newWheel(x, y, z){
        var wheelColor = '#1a1a1a';
        new Cylinder(x, y, z, 0, 1/2, 1/2, wheelHeight, wheelRadius, 200, 10, wheelColor);
    }*/
}

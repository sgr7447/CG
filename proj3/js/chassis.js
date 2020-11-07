class Chassis extends THREE.Object3D{

    constructor(){
        super();

        var chassis = new THREE.Object3D();
        var frontLeftWheel = new THREE.Object3D();
        var frontRightWheel = new THREE.Object3D();
        var rearLeftWheel = new THREE.Object3D();
        var rearRightWheel = new THREE.Object3D();
        var chassisPlatform = new THREE.Object3D();

        var wheelRadius = 6.80;
        var wheelHeight = 2.20;
        var chassisPlatformLength = 58.25;
        var chassisPlatformWidth = 31.01;
        var chassisPlatformHeight = 3;
        var platformHeight = 10;
        var wheelColor = 0x00000;

        frontLeftWheel.add(new Cylinder(-chassisPlatformLength/2, platformHeight + wheelRadius,
            chassisPlatformWidth/2, 0, 1/2, 1/2, wheelHeight, wheelRadius, 200, 10, wheelColor));
        chassis.add(frontLeftWheel);
        scene.add(chassis);


    }
}

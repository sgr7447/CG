class TotalParts extends THREE.Object3D{

    constructor(){

        super();

        // SPINS
        this.spinPos = false;
        this.spinNeg = false;

        //TIME
        this.time = new THREE.Clock();
        this.delta;

        var platformHeight = 60;
        var wheelRadius = 44.5;

        var platform = new Platform(platformHeight);
        var chassis = new Chassis(wheelRadius, platformHeight);
        var bodyStyle = new BodyStyle(wheelRadius, platformHeight);
        var carLights = new TruckLights(wheelRadius, platformHeight, bodyStyle);
        var windows = new Windows(wheelRadius, platformHeight, bodyStyle);
        //var bodyStyle = new BodyStyle(wheelRadius, platformHeight);

        orthographicCamera = new OrthographicCamera();

        // ADD PARTS
        this.add(chassis);
        this.add(bodyStyle);
        this.add(platform);
        this.add(carLights);
        this.add(windows);
        this.add(orthographicCamera);
        this.scale.multiplyScalar(0.3);

        scene.add(this);

    }

    // SPIN

    spinPositive(){
        this.spinPos = true;
    }

    spinNegative(){
        this.spinNeg = true;
    }

    stopSpinPos(){
        this.spinPos = false;
    }

    stopSpinNeg(){
        this.spinNeg = false;
    }

    spin(speed, delta) {

        var direction = 0;
        if ( this.spinNeg && !this.spinPos) direction = -1;
        else if ( this.spinPos && !this.spinNeg ) direction = 1;

        this.rotateY( direction * delta * speed);

    }

    update(delta) {
        this.spin(0.5, delta);
    }

}

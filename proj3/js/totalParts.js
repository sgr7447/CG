class TotalParts extends THREE.Object3D{

    constructor(){

        super();

        // SPINS
        this.spinPos = false;
        this.spinNeg = false;

        //TIME
        this.time = new THREE.Clock();
        this.delta;

        var chassis = new Chassis();
        var bodyStyle = new BodyStyle();
        var platform = new Platform();

        // ADD PARTS
        this.add(chassis);
        this.add(bodyStyle);
        this.add(platform);
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

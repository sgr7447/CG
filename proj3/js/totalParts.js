class TotalParts extends THREE.Object3D{

    constructor(chassis, bodyStyle, platform){

        super();

        // SPINS
        this.spinPos = false;
        this.spinNeg = false;

        // ADD PARTS
        this.add(chassis);
        this.add(bodyStyle);
        this.add(platform);

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

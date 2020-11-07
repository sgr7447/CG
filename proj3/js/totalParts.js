class TotalParts extends THREE.Object3D{

    constructor(chassis, bodyStyle, platform){

        super();

        // SPINS
        this.spinPos = false;
        this.spinNeg = false;

        //TIME
        this.time = new THREE.Clock();
        this.delta;

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

    spin(typeNeg, typePos, speed) {

        var direction = 0;
        if ( typeNeg && !typePos) direction = -1;
        else if ( typePos && !typeNeg ) direction = 1;

        this.rotateY( direction * this.delta * speed);
    }


    // UPDATES

    updateTime() {
        this.delta = this.time.getDelta();
    }

    update() {

        this.updateTime();
        this.spin(this.spinNeg, this.spinPos, 0.5);
    }

}

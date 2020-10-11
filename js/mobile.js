class Mobile extends THREE.Object3D{

    constructor(x, y, z) {

        super();

        var mobileTopLayer = new THREE.Object3D();
        var mobileMiddleLayer = new THREE.Object3D();
        var mobileBottomLayer = new THREE.Object3D();

        this.topLayerPos = false;
        this.topLayerNeg = false;
        this.middleLayerPos = false;
        this.middleLayerNeg = false;
        this.bottomLayerPos = false;
        this.bottomLayerNeg = false;

        this.time = new THREE.Clock();
        this.delta;

        addArm(mobileTopLayer, 0, 0, 0, 0, 12);
        addArm(mobileTopLayer, 0, -6, 0, -1/2, 54);
        addArm(mobileTopLayer, -27, -8.5, 0, 0, 5);
        addArm(mobileTopLayer, -27, -11, 0, -1/2, 28);
        addArm(mobileTopLayer, 27, -8.5, 0, 0, 5);
        addArm(mobileTopLayer, -41, -13.5, 0, 0, 5);
        addArm(mobileTopLayer, -13, -15.24, 0, 0, 8.48);//3 - esfera
        addArm(mobileTopLayer, -45.24, -20.35, 0, -1/4, 12);//1 - cubo
        addArm(mobileTopLayer, -36.76, -20.35, 0, 1/4, 12);//2 - oct lado do triangulo: 8.84
        addArm(mobileTopLayer, 21.7, -16.3, 0, -1/4, 15);//4 - lado: 10.6
        addArm(mobileTopLayer, 35.84, -19.84, 0, 1/4, 25);//lado:17.68 -8.84

        addArm(mobileMiddleLayer, 44.68, -33.6, 0, 0, 10);//
        addArm(mobileMiddleLayer, 44.68, -38.6, 0, 1/2, 30);//
        addArm(mobileMiddleLayer, 59.68, -41.1, 0, 0, 5);//5
        addArm(mobileMiddleLayer, 29.68, -42.5, 0, 0, 8);//
        addArm(mobileMiddleLayer, 29.68, -46.5, 0, 1/2, 30);//
        addArm(mobileMiddleLayer, 44.68, -61.5, 0, 0, 30);//6
        addArm(mobileMiddleLayer, 14.68, -50.5, 0, 0, 8);//7
        addArm(mobileMiddleLayer, 14.68, -54.5, 0, 1/2, 30);//
        addArm(mobileMiddleLayer, 29.68, -58.5, 0, 0, 8);//

        addArm(mobileBottomLayer, -0.5, -58.5, 0, 0, 8);//8
        addArm(mobileBottomLayer, -5.8, -67.8, 0, -1/4, 15);//
        addArm(mobileBottomLayer, 4.8, -67.8, 0, 1/4, 15);//8
        addArm(mobileBottomLayer, -16.4, -78.4, 0, -1/4, 15);//10
        addArm(mobileBottomLayer, -5.8, -78.4, 0, 1/4, 15);//9

        addSphere(mobileTopLayer, -13, -24.48, 0, 5, 0x836FFF);
        addCube(mobileTopLayer, -49.48, -29.5, 0, 10, 0x836FFF);
        addOct(mobileTopLayer, -32.52, -29.3, 0, 5, 0x836FFF);
        addTorus(mobileTopLayer, 16.4, -27.6, 0, 5, 2, 0x836FFF);


        mobileMiddleLayer.add(mobileBottomLayer);
        mobileTopLayer.add(mobileMiddleLayer);
        this.add(mobileTopLayer);

        this.mobileTopLayer = mobileTopLayer;
        this.mobileMiddleLayer = mobileMiddleLayer;
        this.mobileBottomLayer = mobileBottomLayer;

        this.position.x = x;
        this.position.y = y;
        this.position.z = z;

    }


    // SPIN

    spinTopPos(){
        this.topLayerPos = true;
    }

    spinTopNeg(){
        this.topLayerNeg = true;
    }

    spinMiddlePos(){
        this.middleLayerPos = true;
    }

    spinMiddleNeg(){
        this.middleLayerNeg = true;
    }

    spinBottomPos(){
        this.bottomLayerPos = true;
    }

    spinBottomNeg(){
        this.bottomLayerNeg = true;
    }

    stopTop(){
        this.topLayerPos = false;
        this.topLayerNeg = false;
    }

    stopMiddle(){
        this.middleLayerPos = false;
        this.middleLayerNeg = false;
    }

    stopBottom(){
        this.bottomLayerPos = false;
        this.bottomLayerNeg = false;
    }

    spin(type, typeNeg, typePos) {

        var direction = 0;
        if ( typeNeg && !typePos) direction = -1;
        else if ( typePos && !typeNeg ) direction = 1;

        type.rotateY( direction * this.delta * 2);
    }

    // UPDATES

    updateTime() {
        this.delta = this.time.getDelta();
    }

    update() {

        this.updateTime();
        this.spin(this.mobileTopLayer, this.topLayerNeg, this.topLayerPos);
        this.spin(this.mobileMiddleLayer, this.middleLayerNeg, this.middleLayerPos);
        this.spin(this.mobileBottomLayer, this.bottomLayerNeg, this.bottomLayerPos);
    }

}
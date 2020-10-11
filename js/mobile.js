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




        addArm(mobileMiddleLayer, 0, 0, 0, 0, 10);//
        addArm(mobileMiddleLayer, 0, -5, 0, 1/2, 30);//
        addArm(mobileMiddleLayer, 15, -7.5, 0, 0, 5);//5
        addArm(mobileMiddleLayer, -15, -8.9, 0, 0, 8);//
        addArm(mobileMiddleLayer, -15, -12.9, 0, 1/2, 30);//
        addArm(mobileMiddleLayer, 0, -27.9, 0, 0, 30);//6
        addArm(mobileMiddleLayer, -30, -16.9, 0, 0, 8);//7
        addArm(mobileMiddleLayer, -30, -20.9, 0, 1/2, 30);//
        addArm(mobileMiddleLayer, -15, -24.9, 0, 0, 8);//

        addArm(mobileBottomLayer, 0, 0, 0, 0, 8);//8
        addArm(mobileBottomLayer, -5.3, -9.3, 0, -1/4, 15);//
        addArm(mobileBottomLayer, 5.3, -9.3, 0, 1/4, 15);//8
        addArm(mobileBottomLayer, -15.9, -19.9, 0, -1/4, 15);//10
        addArm(mobileBottomLayer, -5.3, -19.9, 0, 1/4, 15);//9

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
this.setPositionBottom(0, 46, 0);
this.setPositionMiddle(44.68, -33.6, 0);
        this.setPositionTop(-45.18, -24.9, 0);



    }

    setPositionTop(x,y,z){
        this.mobileTopLayer.position.x = x;
        this.mobileTopLayer.position.y = y;
        this.mobileTopLayer.position.z = z;
    }

    setPositionMiddle(x,y,z){
        this.mobileMiddleLayer.position.x = x;
        this.mobileMiddleLayer.position.y = y;
        this.mobileMiddleLayer.position.z = z;
    }

    setPositionBottom(x,y,z){
        this.mobileBottomLayer.position.x = x;
        this.mobileBottomLayer.position.y = y;
        this.mobileBottomLayer.position.z = z;
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

    stopTopPos(){
        this.topLayerPos = false;
    }

    stopTopNeg(){
        this.topLayerNeg = false;
    }

    stopMiddlePos(){
        this.middleLayerPos = false;
    }

    stopMiddleNeg(){
        this.middleLayerNeg = false;
    }

    stopBottomPos(){
        this.bottomLayerPos = false;
    }

    stopBottomNeg(){
        this.bottomLayerNeg = false;
    }

    spin(type, typeNeg, typePos, speed, center) {

        var direction = 0;
        if ( typeNeg && !typePos) direction = -1;
        else if ( typePos && !typeNeg ) direction = 1;

        type.rotateY( direction * this.delta * speed);
    }

    // UPDATES

    updateTime() {
        this.delta = this.time.getDelta();
    }

    update() {

        this.updateTime();
        this.spin(this.mobileTopLayer, this.topLayerNeg, this.topLayerPos, 1, 0);
        this.spin(this.mobileMiddleLayer, this.middleLayerNeg, this.middleLayerPos, 2, 10);
        this.spin(this.mobileBottomLayer, this.bottomLayerNeg, this.bottomLayerPos, 4, 0);
    }

}

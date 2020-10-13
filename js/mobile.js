class Mobile extends THREE.Object3D{

    constructor(x, y, z) {

        super();

        var mobileTopLayer = new THREE.Object3D();
        var mobileMiddleLayer = new THREE.Object3D();
        var mobileBottomLayer = new THREE.Object3D();
        var armsColor = 0xFAF301;
        var armsRadius = 0.2;


        /*addArm(mobileTopLayer, 0, -6, 0, -1/2, 54);
        addArm(mobileTopLayer, -27, -8.5, 0, 0, 5);
        addArm(mobileTopLayer, -27, -11, 0, -1/2, 28);
        addArm(mobileTopLayer, 27, -8.5, 0, 0, 5);
        addArm(mobileTopLayer, -41, -13.5, 0, 0, 5);
        addArm(mobileTopLayer, -13, -15.24, 0, 0, 8.48);//3 - esfera
        addArm(mobileTopLayer, -45.24, -20.35, 0, -1/4, 12);//1 - cubo
        addArm(mobileTopLayer, -36.76, -20.35, 0, 1/4, 12);//2 - oct lado do triangulo: 8.84
        addArm(mobileTopLayer, 21.7, -16.3, 0, -1/4, 15);//4 - lado: 10.6
        addArm(mobileTopLayer, 35.84, -19.84, 0, 1/4, 25);//lado:17.68 -8.84*/

        //(x, y, z, rad, len, radius, colour)
        var arm1 = new Cylinder(mobileTopLayer, x, y, z, 0, 12, 0.2, armsColor);
        var arm2 = new Cylinder(mobileTopLayer, arm1.position.x, arm1.position.y - arm1.len/2, z, 1/2, 54, armsRadius, armsColor);
        var arm3 = new Cylinder(mobileTopLayer, arm2.position.x - arm2.len/2, arm2.position.y, z, 0, 5, armsRadius, armsColor);
        var arm4 = new Cylinder(mobileTopLayer, arm3.position.x, arm3.position.y - arm3.len/2, z, 1/2, 28, armsRadius, armsColor);
        var arm5 = new Cylinder(mobileTopLayer, arm4.position.x -Math.sin(Math.PI * 1/4)/2 , arm4.position.y , z, -1/4, 12, armsRadius, armsColor);
      /*  var arm6 = new Cylinder();
        var arm7 = new Cylinder();
        var arm8 = new Cylinder();
        var arm9 = new Cylinder();
        var arm10 = new Cylinder();
        var arm11 = new Cylinder();
        var arm12 = new Cylinder();
        var arm13 = new Cylinder();
        var arm14 = new Cylinder();
        var arm15 = new Cylinder();
        var arm16 = new Cylinder();
        var arm17 = new Cylinder();
        var arm18 = new Cylinder();
        var arm19 = new Cylinder();
        var arm20 = new Cylinder();
        /*var shape1 =
        var shape2 =
        var shape3 =
        var shape4 =
        var shape5 =
        var shape6 =
        var shape7 = new Cylinder()
        var shape8 =
        var shape9 =
        var shape10 =*/

        /*mobileTopLayer.add(arm1);
        mobileTopLayer.add(arm2);
        mobileTopLayer.add(arm3);
        mobileTopLayer.add(arm4);
        mobileTopLayer.add(arm5);*/

        //SPIN OR NOT
        this.topLayerPos = false;
        this.topLayerNeg = false;
        this.middleLayerPos = false;
        this.middleLayerNeg = false;
        this.bottomLayerPos = false;
        this.bottomLayerNeg = false;

        //TIME
        this.time = new THREE.Clock();
        this.delta;

        //CREATING PARTS
        /*addArm(mobileTopLayer, 0, 0, 0, 0, 12);
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
        addCube(mobileTopLayer, -49.48, -29.5, 0, 10, 10, 0x836FFF);
        addOct(mobileTopLayer, -32.52, -29.3, 0, 5, 1, 0x836FFF);
        addTorus(mobileTopLayer, 16.4, -27.6, 0, 5, 2, 0x836FFF);

        addSphere(mobileMiddleLayer, 0, -48.9, 0, 6, 0x836FFF);
        addOct(mobileMiddleLayer, 15, -14, 0, 4, 0, 0x836FFF);
        addTorus(mobileMiddleLayer, -15, -35.4, 0, 5, 3, 0x836FFF);

        addCylinder(mobileBottomLayer, 10.6, -22.1, 0, 15, 2.5, 0x836FFF);
        addCube(mobileBottomLayer, -15.9-5.3, -19.9-5.3-3, 0, 12, 6, 0x836FFF);
        addSphere(mobileBottomLayer, 0, -19.9-5.3-4, 0, 4, 0x836FFF);

*/


        //mobileMiddleLayer.add(mobileBottomLayer);
        //mobileTopLayer.add(mobileMiddleLayer);
        this.add(mobileTopLayer);

        this.mobileTopLayer = mobileTopLayer;
        //this.mobileMiddleLayer = mobileMiddleLayer;
        //this.mobileBottomLayer = mobileBottomLayer;

        //this.setPosition(this.mobileBottomLayer, -45.18, -24.9, 0);
        //this.setPosition(this.mobileMiddleLayer, 44.68, -33.6, 0);
        this.setPosition(this.mobileTopLayer, 0, 46, 0);

    }

    setPosition(type, x,y,z){
        type.position.x = x;
        type.position.y = y;
        type.position.z = z;
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

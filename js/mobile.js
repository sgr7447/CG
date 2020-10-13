class Mobile extends THREE.Object3D{

    constructor(x, y, z) {

        super();

        var mobileTopLayer = new THREE.Object3D();
        var mobileMiddleLayer = new THREE.Object3D();
        var mobileBottomLayer = new THREE.Object3D();
        var armsColor = 0xFAF301;
        var armsRadius = 0.2;


        /* 2 addArm(mobileTopLayer, 0, -6, 0, -1/2, 54); h
        3 addArm(mobileTopLayer, -27, -8.5, 0, 0, 5);    v
        4 addArm(mobileTopLayer, -27, -11, 0, -1/2, 28); h
        9 addArm(mobileTopLayer, 27, -8.5, 0, 0, 5);     v
        5 addArm(mobileTopLayer, -41, -13.5, 0, 0, 5);     v
        8 addArm(mobileTopLayer, -13, -15.24, 0, 0, 8.48);//3 - esfera  v

        6  addArm(mobileTopLayer, -45.24, -20.35, 0, -1/4, 12);//1 - cubo
        7  addArm(mobileTopLayer, -36.76, -20.35, 0, 1/4, 12);//2 - oct lado do triangulo: 8.84
        10 addArm(mobileTopLayer, 21.7, -16.3, 0, -1/4, 15);//4 - lado: 10.6
        11 addArm(mobileTopLayer, 35.84, -19.84, 0, 1/4, 25);//lado:17.68 -8.84*/

        //(x, y, z, rad, len, radius, colour)
        var arm1 = new Cylinder(mobileTopLayer, 0, 0, 0, 0, 12, 0.2, armsColor);
        var arm2 = new Cylinder(mobileTopLayer, arm1.x, arm1.y - arm1.len/2, z, 1/2, 54, armsRadius, armsColor);
        var arm3 = new Cylinder(mobileTopLayer, arm2.x - arm2.len, arm2.y, z, 0, 5, armsRadius, armsColor);
        var arm4 = new Cylinder(mobileTopLayer, arm3.x, arm3.y - arm3.len/2, z, 1/2, 28, armsRadius, armsColor);
        var arm5 = new Cylinder(mobileTopLayer, arm4.x - arm4.len/2, arm4.y , z, 0, 5, armsRadius, armsColor);
        var arm6 = new Cylinder(mobileTopLayer, arm5.x - arm5.x*Math.sin(Math.PI/4)/2, arm5.y  - arm5.len/2 - arm5.x*Math.cos(Math.PI/4)/2, z, -1/4, 12, armsRadius, armsColor);
        var arm7 = new Cylinder(mobileTopLayer, arm5.x, arm5.y - arm5.len/2 , z, 1/4, 12, armsRadius, armsColor);
        var arm8 = new Cylinder(mobileTopLayer, arm4.x + arm4.len/2, arm4.y , z, 0, 12, armsRadius, armsColor);
        var arm9 = new Cylinder(mobileTopLayer, arm2.x + arm2.len/2, arm2.y , z, 0, 5, armsRadius, armsColor);
        var arm10 = new Cylinder(mobileTopLayer, arm9.x, arm9.y - arm9.len/2, z, -1/4, 15, armsRadius, armsColor);
        var arm11 = new Cylinder(mobileTopLayer, arm9.x, arm9.y - arm9.len/2 , z, 1/4, 25, armsRadius, armsColor);
        /*
        12 addArm(mobileMiddleLayer, 0, 0, 0, 0, 10);//
        13 addArm(mobileMiddleLayer, 0, -5, 0, 1/2, 30);//
        14 addArm(mobileMiddleLayer, -15, -8.9, 0, 0, 8);//
        15 addArm(mobileMiddleLayer, 15, -7.5, 0, 0, 5);//5
        16 addArm(mobileMiddleLayer, -15, -12.9, 0, 1/2, 30);//
        18 addArm(mobileMiddleLayer, 0, -27.9, 0, 0, 30);//6
        19 addArm(mobileMiddleLayer, -30, -20.9, 0, 1/2, 30);//
        17 addArm(mobileMiddleLayer, -30, -16.9, 0, 0, 8);//7
        20 addArm(mobileMiddleLayer, -15, -24.9, 0, 0, 8);*/
        var arm12 = new Cylinder(mobileMiddleLayer, 0, 0, z, 0, 10, armsRadius, armsColor);
        var arm13 = new Cylinder(mobileMiddleLayer, arm12.x, arm12.y - arm12.len/2 , z, 1/2, 30, armsRadius, armsColor);
        var arm14 = new Cylinder(mobileMiddleLayer, arm13.x - arm13.len/2, arm13.y , z, 0, 8, armsRadius, armsColor);
        var arm15 = new Cylinder(mobileMiddleLayer, arm13.x - arm13.len/2, arm13.y , z, 0, 5, armsRadius, armsColor);
        var arm16 = new Cylinder(mobileMiddleLayer, arm14.x, arm14.y  - arm14.len/2, z, 1/2, 30, armsRadius, armsColor);
        var arm17 = new Cylinder(mobileMiddleLayer, arm16.x - arm16.len/2, arm16.y , z, 0, 8, armsRadius, armsColor);
        var arm18 = new Cylinder(mobileMiddleLayer, arm16.x + arm16.len/2, arm16.y , z, 0, 30, armsRadius, armsColor);
        var arm19 = new Cylinder(mobileMiddleLayer, arm17.x, arm17.y - arm17.len/2, z, 1/2, 30, armsRadius, armsColor);
        var arm20 = new Cylinder(mobileMiddleLayer, arm17.x, arm17.y - arm17.len/2 , z, 0, 8, armsRadius, armsColor);

        /*
        21 addArm(mobileBottomLayer, 0, 0, 0, 0, 8);//8
        22 addArm(mobileBottomLayer, -5.3, -9.3, 0, -1/4, 15);//
        23 addArm(mobileBottomLayer, 5.3, -9.3, 0, 1/4, 15);//8
        25 addArm(mobileBottomLayer, -15.9, -19.9, 0, -1/4, 15);//10
        24 addArm(mobileBottomLayer, -5.3, -19.9, 0, 1/4, 15);//9*/

        var arm21 = new Cylinder(mobileBottomLayer, 0, 0, z, 0, 8, armsRadius, armsColor);
        var arm22 = new Cylinder(mobileBottomLayer, arm21.x, arm21.y - arm21.len/2, z, -1/4, 15, armsRadius, armsColor);
        /*var arm23 = new Cylinder(mobileBottomLayer, arm16.position.x + arm16.len/2, arm16.position.y , z, 0, 30, armsRadius, armsColor);
        var arm24 = new Cylinder(mobileBottomLayer, arm17.position.x, arm17.position.y - arm17.len/2, z, 1/2, 30, armsRadius, armsColor);
        var arm25 = new Cylinder(mobileBottomLayer, arm17.position.x, arm17.position.y - arm17.len/2 , z, 0, 8, armsRadius, armsColor);*/


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


        mobileMiddleLayer.add(mobileBottomLayer);
        mobileTopLayer.add(mobileMiddleLayer);
        this.add(mobileTopLayer);

        this.mobileTopLayer = mobileTopLayer;
        this.mobileMiddleLayer = mobileMiddleLayer;
        this.mobileBottomLayer = mobileBottomLayer;

        this.setPosition(this.mobileBottomLayer, -45.18, -24.9, 0);
        this.setPosition(this.mobileMiddleLayer, 44.68, -33.6, 0);
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

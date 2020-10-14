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

        //(obj, x, y, z, rad, len, radius, colour)
        var arm1_len = 12;
        var arm1 = new Cylinder(mobileTopLayer, x, y, z, 0, arm1_len, armsRadius, armsColor);
        var arm2_len = 54
        var arm2 = new Cylinder(arm1, arm1.x, arm1.y - arm1.len/2, z, 1/2, arm2_len, armsRadius, armsColor);
        var arm3_len = 10;
        var arm3 = new Cylinder(arm2, arm2.x - arm2.len/2, arm2.y -arm3_len/2 , z, 0, arm3_len, armsRadius, armsColor); //NESTE CASO
        var arm4_len = 28
        var arm4 = new Cylinder(arm3, arm3.x, arm3.y - arm3.len/2, z, 1/2, arm4_len, armsRadius, armsColor);
        var arm5_len = 5;
        var arm5 = new Cylinder(arm4, arm4.x - arm4.len/2, arm4.y - arm5_len/2, z, 0, arm5_len, armsRadius, armsColor);
        var arm6_len = 12;
        var arm6 = new Cylinder(arm5, arm5.x - arm6_len*Math.sin(Math.PI/4)/2, arm5.y  - arm5.len/2 - arm6_len*Math.cos(Math.PI/4)/2, z, -1/4, arm6_len, armsRadius, armsColor);
        var arm7_len = 12;
        var arm7 = new Cylinder(arm6, arm5.x + arm7_len*Math.sin(Math.PI/4)/2, arm5.y  - arm5.len/2 - arm7_len*Math.cos(Math.PI/4)/2, z, 1/4, arm7_len, armsRadius, armsColor);
        var arm8_len = 12;
        var arm8 = new Cylinder(arm4, arm4.x + arm4.len/2, arm4.y - arm8_len/2, z, 0, arm8_len, armsRadius, armsColor);
        var arm9_len = 5;
        var arm9 = new Cylinder(arm2, arm2.x + arm2.len/2, arm2.y - arm9_len/2, z, 0, arm9_len, armsRadius, armsColor);
        var arm10_len = 25;
        var arm10 = new Cylinder(arm9, arm9.x - arm10_len*Math.sin(Math.PI/4)/2, arm9.y  - arm9.len/2 - arm10_len*Math.cos(Math.PI/4)/2, z, -1/4, arm10_len, armsRadius, armsColor);
        var arm11_len = 40;
        var arm11 = new Cylinder(arm9, arm9.x + arm11_len*Math.sin(Math.PI/4)/2, arm9.y  - arm9.len/2 - arm11_len*Math.cos(Math.PI/4)/2, z, 1/4, arm11_len, armsRadius, armsColor);

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
        var arm12_len = 10;
        var arm12 = new Cylinder(mobileMiddleLayer, 0, 0, 0, 0,arm12_len, armsRadius, armsColor);
        //mobileMiddleLayer.add(arm12);
        var arm13_len = 30;
        var arm13 = new Cylinder(arm12, arm12.x, arm12.y - arm12.len/2 , z, 1/2, arm13_len, armsRadius, armsColor);
        var arm14_len = 8;
        var arm14 = new Cylinder(arm13, arm13.x - arm13.len/2, arm13.y - arm14_len/2, z, 0, arm14_len, armsRadius, armsColor);
        var arm15_len = 5;
        var arm15 = new Cylinder(arm13, arm13.x + arm13.len/2, arm13.y - arm15_len/2, z, 0, arm15_len, armsRadius, armsColor);
        var arm16_len = 30;
        var arm16 = new Cylinder(arm14, arm14.x, arm14.y  - arm14.len/2, z, 1/2, arm16_len, armsRadius, armsColor);
        var arm17_len = 8;
        var arm17 = new Cylinder(arm16, arm16.x - arm16.len/2, arm16.y - arm17_len/2, z, 0, arm17_len, armsRadius, armsColor);
        var arm18_len = 30;
        var arm18 = new Cylinder(arm16, arm16.x + arm16.len/2, arm16.y - arm18_len/2, z, 0, arm18_len, armsRadius, armsColor);
        var arm19_len = 30;
        var arm19 = new Cylinder(arm17, arm17.x, arm17.y - arm17.len/2, z, 1/2, arm19_len, armsRadius, armsColor);
        var arm20_len = 8;
        var arm20 = new Cylinder(arm17, arm17.x + arm17_len/2, arm17.y - arm20_len/2 , z, 0, arm20_len, armsRadius, armsColor);

        /*
        21 addArm(mobileBottomLayer, 0, 0, 0, 0, 8);//8
        22 addArm(mobileBottomLayer, -5.3, -9.3, 0, -1/4, 15);//
        23 addArm(mobileBottomLayer, 5.3, -9.3, 0, 1/4, 15);//8
        25 addArm(mobileBottomLayer, -15.9, -19.9, 0, -1/4, 15);//10
        24 addArm(mobileBottomLayer, -5.3, -19.9, 0, 1/4, 15);//9*/
        var arm21_len = 8;
        var arm21 = new Cylinder(mobileBottomLayer, 0, 0, z, 0, arm21_len, armsRadius, armsColor);
        var arm22_len = 15;
        var arm22 = new Cylinder(arm21, arm21.x - arm22_len*Math.sin(Math.PI/4)/2, arm21.y  - arm21.len/2 - arm22_len*Math.cos(Math.PI/4)/2, z, -1/4, arm22_len, armsRadius, armsColor);
        var arm23_len = 30;
        var arm23 = new Cylinder(arm21, arm21.x + arm23_len*Math.sin(Math.PI/4)/2, arm21.y - arm21.len/2 - arm23_len*Math.cos(Math.PI/4)/2, z, 1/4, arm23_len, armsRadius, armsColor);
        var arm24_len = 30;
        var arm24 = new Cylinder(arm22, arm22.x - arm24_len*Math.sin(Math.PI/4)/2, arm22.y - arm22_len*Math.cos(Math.PI/4)/2 - arm24_len*Math.cos(Math.PI/4)/2, z, -1/4, arm24_len, armsRadius, armsColor);
        var arm25_len = 8;
        var arm25 = new Cylinder(arm22, arm22.x - arm25_len*Math.sin(Math.PI/4)/2, arm22.y - arm22_len*Math.cos(Math.PI/4)/2 - arm25_len*Math.cos(Math.PI/4)/2, z, 1/4, arm25_len, armsRadius, armsColor);


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

        //MOVE OR NOT
        this.moveRight = false;
        this.moveLeft = false;
        this.moveFront = false;
        this.moveBack = false;

        //TIME
        this.time = new THREE.Clock();
        this.delta;

        mobileMiddleLayer.add(mobileBottomLayer);
        mobileTopLayer.add(mobileMiddleLayer);
        this.add(mobileTopLayer);



        this.mobileTopLayer = mobileTopLayer;
        this.mobileMiddleLayer = mobileMiddleLayer;
        this.mobileBottomLayer = mobileBottomLayer;

        this.setPosition(this.mobileBottomLayer, arm19.x - arm19_len/2, arm19.y - arm21_len/2, 0);
        this.setPosition(this.mobileMiddleLayer, arm11.x + arm11_len*Math.sin(Math.PI/4)/2, 0, 0);
        this.setPosition(this.mobileTopLayer, 0, 46, 0);

    }

    setPosition(type, x,y,z){
        type.position.x = x;
        type.position.y = y;
        type.position.z = z;
    }

    // MOVING WITH ARROWS

    movingRight(){
        this.moveRight = true;
    }

    movingLeft(){
        this.moveLeft = true;
    }

    movingFront(){
        this.moveFront = true;
    }

    movingBack(){
        this.moveBack = true;
    }

    stopRight(){
        this.moveRight = false;
    }

    stopLeft(){
        this.moveLeft = false;
    }

    stopFront(){
        this.moveFront = false;
    }

    stopBack(){
        this.moveBack = false;
    }

    xxMovement(){
        if ( this.moveRight && !this.moveLeft ) return 1;
        else if ( this.moveLeft && !this.moveRight ) return -1;
        else return 0;
    }

    zzMovement(){
        if ( this.moveFront && !this.moveBack ) return 1;
        else if ( this.moveBack && !this.moveFront ) return -1;
        else return 0;
    }

    move(){
        var speed = 20;
        this.translateX(this.delta * speed * this.xxMovement());
        this.translateZ(this.delta * speed * this.zzMovement());
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
        this.move();
    }

}

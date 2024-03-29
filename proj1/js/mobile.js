class Mobile extends THREE.Object3D{

    constructor(x, y, z) {

        super();

        var mobileTopLayer = new THREE.Object3D();
        var mobileMiddleLayer = new THREE.Object3D();
        var mobileBottomLayer = new THREE.Object3D();
        var armsColor = 0xFAF301;
        var armsRadius = 0.2;


        //(obj, x, y, z, rad, len, radius, colour)
        //mobileTopLayer
        var arm1_len = 7;
        var arm1 = new Cylinder(mobileTopLayer, x, y, z, 0, arm1_len, armsRadius, armsColor);

        var arm_x;
        var arm_y;

        var arm2_len = 54
        arm_x = arm1.x;
        arm_y = arm1.y - arm1.len/2;
        var arm2 = new Cylinder(arm1, arm_x, arm_y, z, 1/2, arm2_len, armsRadius, armsColor);

        var arm3_len = 8;
        arm_x = arm2.x - arm2.len/2;
        arm_y = arm2.y -arm3_len/2;
        var arm3 = new Cylinder(arm2, arm_x, arm_y, z, 0, arm3_len, armsRadius, armsColor);

        var arm4_len = 28;
        arm_x = arm3.x;
        arm_y = arm3.y - arm3.len/2;
        var arm4 = new Cylinder(arm3, arm_x, arm_y, z, 1/2, arm4_len, armsRadius, armsColor);

        var arm5_len = 5;
        arm_x = arm4.x - arm4.len/2;
        arm_y = arm4.y - arm5_len/2;
        var arm5 = new Cylinder(arm4, arm_x, arm_y, z, 0, arm5_len, armsRadius, armsColor);

        var arm6_len = 12;
        arm_x = arm5.x - arm6_len*Math.sin(Math.PI/4)/2;
        arm_y = arm5.y  - arm5.len/2 - arm6_len*Math.cos(Math.PI/4)/2;
        var arm6 = new Cylinder(arm5, arm_x, arm_y, z, -1/4, arm6_len, armsRadius, armsColor);

        var arm7_len = 12;
        arm_x = arm5.x + arm7_len*Math.sin(Math.PI/4)/2;
        arm_y = arm5.y  - arm5.len/2 - arm7_len*Math.cos(Math.PI/4)/2;
        var arm7 = new Cylinder(arm6, arm_x, arm_y, z, 1/4, arm7_len, armsRadius, armsColor);

        var arm8_len = 9;
        arm_x = arm4.x + arm4.len/2;
        arm_y = arm4.y - arm8_len/2;
        var arm8 = new Cylinder(arm4, arm_x, arm_y, z, 0, arm8_len, armsRadius, armsColor);

        var arm9_len = 5;
        arm_x = arm2.x + arm2.len/2;
        arm_y = arm2.y - arm9_len/2;
        var arm9 = new Cylinder(arm2, arm_x, arm_y, z, 0, arm9_len, armsRadius, armsColor);

        var arm10_len = 18;
        arm_x = arm9.x - arm10_len*Math.sin(Math.PI/4)/2;
        arm_y = arm9.y  - arm9.len/2 - arm10_len*Math.cos(Math.PI/4)/2;
        var arm10 = new Cylinder(arm9, arm_x, arm_y, z, -1/4, arm10_len, armsRadius, armsColor);

        var arm11_len = 35;
        arm_x = arm9.x + arm11_len*Math.sin(Math.PI/4)/2;
        arm_y = arm9.y  - arm9.len/2 - arm11_len*Math.cos(Math.PI/4)/2;
        var arm11 = new Cylinder(arm9, arm_x, arm_y, z, 1/4, arm11_len, armsRadius, armsColor);

        //mobileMiddleLayer
        var arm12_len = 7;
        var arm12 = new Cylinder(mobileMiddleLayer, x, y, z, 0, arm12_len, armsRadius, armsColor);

        var arm13_len = 30;
        arm_x = arm12.x;
        arm_y = arm12.y - arm12.len/2;
        var arm13 = new Cylinder(arm12, arm_x, arm_y, z, 1/2, arm13_len, armsRadius, armsColor);

        var arm14_len = 7;
        arm_x = arm13.x - arm13.len/2;
        arm_y = arm13.y - arm14_len/2;
        var arm14 = new Cylinder(arm13, arm_x, arm_y, z, 0, arm14_len, armsRadius, armsColor);

        var arm15_len = 4;
        arm_x = arm13.x + arm13.len/2;
        arm_y = arm13.y - arm15_len/2;
        var arm15 = new Cylinder(arm13, arm_x, arm_y, z, 0, arm15_len, armsRadius, armsColor);

        var arm16_len = 30;
        arm_x = arm14.x;
        arm_y = arm14.y - arm14.len/2;
        var arm16 = new Cylinder(arm14, arm_x, arm_y, z, 1/2, arm16_len, armsRadius, armsColor);

        var arm17_len = 7;
        arm_x = arm16.x - arm16.len/2;
        arm_y = arm16.y - arm17_len/2;
        var arm17 = new Cylinder(arm16, arm_x, arm_y, z, 0, arm17_len, armsRadius, armsColor);

        var arm18_len = 24;
        arm_x = arm16.x + arm16.len/2;
        arm_y = arm16.y - arm18_len/2;
        var arm18 = new Cylinder(arm16, arm_x, arm_y, z, 0, arm18_len, armsRadius, armsColor);

        var arm19_len = 30;
        arm_x = arm17.x;
        arm_y = arm17.y - arm17.len/2;
        var arm19 = new Cylinder(arm17, arm_x, arm_y, z, 1/2, arm19_len, armsRadius, armsColor);

        var arm20_len = 7;
        arm_x = arm17.x + arm19_len/2;
        arm_y = arm19.y - arm20_len/2;
        var arm20 = new Cylinder(arm17, arm_x, arm_y, z, 0, arm20_len, armsRadius, armsColor);

        //mobileBottomLayer
        var arm21_len = 12;
        var arm21 = new Cylinder(mobileBottomLayer, x, y, z, 0, arm21_len, armsRadius, armsColor);

        var arm22_len = 15;
        arm_x = arm21.x - arm22_len*Math.sin(Math.PI/4)/2;
        arm_y = arm21.y  - arm21.len/2 - arm22_len*Math.cos(Math.PI/4)/2;
        var arm22 = new Cylinder(arm21, arm_x, arm_y, z, -1/4, arm22_len, armsRadius, armsColor);

        var arm23_len = 15;
        arm_x = arm21.x + arm23_len*Math.sin(Math.PI/4)/2;
        arm_y = arm21.y - arm21.len/2 - arm23_len*Math.cos(Math.PI/4)/2;
        var arm23 = new Cylinder(arm21, arm_x, arm_y, z, 1/4, arm23_len, armsRadius, armsColor);

        var arm24_len = 15;
        arm_x = arm22.x;
        arm_y = arm22.y - arm22_len*Math.cos(Math.PI/4)/2 - arm24_len*Math.cos(Math.PI/4)/2;
        var arm24 = new Cylinder(arm22, arm_x, arm_y, z, 1/4, arm24_len, armsRadius, armsColor);

        var arm25_len = 15;
        arm_x = arm22.x - arm24_len*Math.sin(Math.PI/4);
        arm_y = arm22.y - arm22_len*Math.cos(Math.PI/4)/2 - arm25_len*Math.cos(Math.PI/4)/2;
        var arm25 = new Cylinder(arm22, arm_x, arm_y, z, -1/4, arm25_len, armsRadius, armsColor);


        //SHAPES

        // shape 1
        var shape_len = 20;
        var shape_radius = 4;
        var shape_x = arm6.x - arm6_len*Math.sin(Math.PI/4)/2;
        var shape_y = arm6.y - arm6_len*Math.cos(Math.PI/4)/2 - shape_len/2;
        var shape1 = new Cylinder(arm6, shape_x, shape_y, z, 0, shape_len, shape_radius, 0x07EEAC);

        // shape 2
        shape_len = 10;
        var shape_height = 10;
        shape_x = arm7.x + arm7_len*Math.sin(Math.PI/4)/2;
        shape_y = arm7.y - arm7_len*Math.cos(Math.PI/4)/2 - shape_len/2;
        var shape2 = new Cube(arm7, shape_x, shape_y, z, 0, shape_len, shape_height, 0xF946C8);

        // shape 3
        shape_len = 10;
        shape_radius = 2;
        shape_x = arm8.x;
        shape_y = arm8.y + arm8_len/2 - shape_radius/2;
        var shape3 = new Cylinder(arm8, shape_x, shape_y, z, 1/2, shape_len, shape_radius, 0xFF6100);
        shape3.scale.set(1,2,1);

        // shape 4
        shape_len = 20;
        shape_height = 20;
        shape_x = arm10.x - arm10_len*Math.sin(Math.PI/4)/2;
        shape_y = arm10.y - arm10_len*Math.cos(Math.PI/4)/2 - shape_len/2;
        var shape4 = new Cube(arm10, shape_x, shape_y, z, 0, shape_len, shape_height, 0xF946C8);

        // shape 5
        shape_len = 7;
        shape_radius = 5;
        shape_x = arm25.x - arm25_len*Math.sin(Math.PI/4)/2;
        shape_y = arm25.y - arm25_len*Math.cos(Math.PI/4)/2 - shape_radius;
        var shape5 = new Cylinder(arm25, shape_x, shape_y, z, 1/2, shape_len, shape_radius, 0x07EEAC);

        // shape 6
        shape_len = 5;
        shape_radius = 5;
        shape_x = arm24.x + arm24_len*Math.sin(Math.PI/4)/2;
        shape_y = arm24.y - arm24_len*Math.cos(Math.PI/4)/2 - shape_len/2;
        var shape6 = new Cylinder(arm24, shape_x, shape_y, z, 0, shape_len, shape_radius, 0xFF6100);

        // shape 7
        shape_len = 5;
        shape_x = arm23.x + arm23_len*Math.sin(Math.PI/4)/2;
        shape_y = arm23.y - arm23_len*Math.cos(Math.PI/4)/2 - shape_len/2;
        var shape7 = new Cube(arm23, shape_x, shape_y, z, 0, shape_len, shape_len, 0xF946C8);

        // shape 8
        shape_len = 10;
        shape_height = 20
        shape_x = arm20.x;
        shape_y = arm20.y - arm20_len/2 - shape_len/2;
        var shape8 = new Cube(arm20, shape_x, shape_y, z, 1/2, shape_len, shape_height, 0x07EEAC);

        // shape 9
        shape_len = 20;
        shape_x = arm18.x;
        shape_y = arm18.y - arm18_len/2 - Math.sqrt(shape_len*shape_len/2);
        var shape9 = new Cube(arm18, shape_x, shape_y, z, 1/4, shape_len, shape_len, 0xFF6100);

        // shape 10
        shape_len = 7;
        shape_x = arm15.x;
        shape_y = arm15.y - arm15_len/2- Math.sqrt(shape_len*shape_len/2);
        var shape10 = new Cube(arm15, shape_x, shape_y, z, 1/4, shape_len, shape_len, 0xF946C8);

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
        this.setPosition(this.mobileTopLayer, 0, 46, 0);
        this.setPosition(this.mobileMiddleLayer, arm11.x + arm11_len*Math.sin(Math.PI/4)/2,
            arm11.y - arm11_len*Math.cos(Math.PI/4)/2 - arm12_len/2, 0);
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

    //vai para o update
    //delta para manter o movimento constante, dar velocidade, dependendo do resultado 1 ou -1 anda para a frente/Esq ou para tras/dir
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

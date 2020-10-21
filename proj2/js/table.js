class Table extends THREE.Object3D{

    constructor(x, y, z) {

        super();

        var wallL = new THREE.Object3D();
        var wallR = new THREE.Object3D();
        var wallU = new THREE.Object3D();
        var wallD = new THREE.Object3D();
        var extL = new THREE.Object3D();
        var extR = new THREE.Object3D();
        var extU = new THREE.Object3D();
        var extD = new THREE.Object3D();
        var floor = new THREE.Object3D();
        var stick1 = new THREE.Object3D();
        var stick2 = new THREE.Object3D();
        var stick3 = new THREE.Object3D();
        var stick4 = new THREE.Object3D();
        var stick5 = new THREE.Object3D();
        var stick6 = new THREE.Object3D();
        var legs = new THREE.Object3D();


        var colorWall = '#A84A3B';
        var color = '#004731';
        var colorStick = '#F5F5DC';
        var colorHoles = '#0A0A0A';

        //POOL TABLE-----------------------------------------------------------
        //LEFT
        var wall1 = new Cube(wallL, -100, 0+7.5+0.05, 0, 0, 0, 0, 0.5, 15, 100.5, 2, 15, 102, color);
        this.add(wallL);
        //RIGHT
        new Cube(wallR, 100, 0+7.5+0.05, 0, 0, 0, 0, 0.5, 15, 100.5, 2, 15, 102, color);
        this.add(wallR);
        //UP
        new Cube(wallU, 0, 0+7.5+0.05, 0+50, 0, 0, 0, 200.5, 15, 0.5, 202, 15, 102, color);
        this.add(wallU);
        //DOWN
        new Cube(wallD, 0, 0+7.5+0.05, 0-50, 0, 0, 0, 200.5, 15, 0.5, 202, 15, 102, color);
        this.add(wallD);

        //FLOOR
        new Cube(floor, 0, 0, 0, 0.5, 0, 0, 200, 100, 0.1, 202, 15, 102, color);
        this.add(floor);


        //EXTERIOR
        //LEFT
        new Cube(extL, -100-0.5-1.5, 0+7.5+0.05, 0, 0, 0, 0, 3, 15, 100+0.5, 2, 15, 102, colorWall);
        this.add(extL);
        //RIGHT
        new Cube(extR, 100+0.5+1.5, 0+7.5+0.05, 0, 0, 0, 0, 3, 15, 100+0.5, 2, 15, 102, colorWall);
        this.add(extR);
        //UP
        new Cube(extU, 0, 0+7.5+0.05, 0+50+1.5+0.5, 0, 0, 0, 200+0.5+6+0.5, 15, 3, 202, 15, 2, colorWall);
        this.add(extU);
        //DOWN
        new Cube(extD, 0, 0+7.5+0.05, 0-50-1.5-0.5, 0, 0, 0, 200+0.5+6+0.5, 15, 3, 202, 15, 2, colorWall);
        this.add(extD);

        //HOLES
        new Cylinder(legs, -100+6.5+1, -0.9, -50+6.5+1, 0, 0, 0, 2, 6.5, 6.5, 20, 20, colorHoles);
        new Cylinder(legs, -100+6.5+1, -0.9, 50-6.5-1, 0, 0, 0, 2, 6.5, 6.5, 20, 20, colorHoles);
        new Cylinder(legs, 0, -0.9, -50+6.5+1, 0, 0, 0, 2, 6.5, 6.5, 20, 20, colorHoles);
        new Cylinder(legs, 100-6.5-1, -0.9, -50+6.5+1, 0, 0, 0, 2, 6.5, 6.5, 20, 20, colorHoles);
        new Cylinder(legs, 100-6.5-1, -0.9, 50-6.5-1, 0, 0, 0, 2, 6.5, 6.5, 20, 20, colorHoles);
        new Cylinder(legs, 0, -0.9, 50-6.5-1, 0, 0, 0, 2, 6.5, 6.5, 20, 20, colorHoles);

        //LEGS
        new Cylinder(legs, -80, -25-0.05, -40, 0, 0, 0, 50, 5, 5, 10, 20, colorWall);
        new Cylinder(legs, -80, -25-0.05, 40, 0, 0, 0, 50, 5, 5, 10, 20, colorWall);
        new Cylinder(legs, 80, -25-0.05, -40, 0, 0, 0, 50, 5, 5, 10, 20, colorWall);
        new Cylinder(legs, 80, -25-0.05, 40, 0, 0, 0, 50, 5, 5, 10, 20, colorWall);

        this.add(legs);

        //STICKS
        //RIGHT
        new Cylinder(stick1, 100+35+5, 5, 0, 0, 0, 1/2, 70, 1, 2, 10, 20, colorStick);
        this.add(stick1);
        //LEFT
        new Cylinder(stick2, -(100+35+5), 5, 0, 0, 0, -1/2, 70, 1, 2, 10, 20, colorStick);
        this.add(stick2);
        //UP
        new Cylinder(stick3, -50, 5, -(50+35+5), 0, 1/2, 1/2, 70, 1, 2, 10, 20, colorStick);
        this.add(stick3);

        new Cylinder(stick4, 50, 5, -(50+35+5), 0, 1/2, 1/2, 70, 1, 2, 10, 20, colorStick);
        this.add(stick4);
        //DOWN
        new Cylinder(stick5, -50, 5, 50+35+5, 0, -1/2, 1/2, 70, 1, 2, 10, 20, colorStick);
        this.add(stick5);

        new Cylinder(stick6, 50, 5, 50+35+5, 0, -1/2, 1/2, 70, 1, 2, 10, 20, colorStick);
        this.add(stick6);



        //TIME
        this.time = new THREE.Clock();
        this.delta;
        //

        this.wallL = wallL;
        this.wallR = wallR;
        this.wallU = wallU;
        this.wallD = wallD;


    }

    setPosition(type, x,y,z){
        type.position.x = x;
        type.position.y = y;
        type.position.z = z;
    }


    // UPDATES
    updateTime() {
        this.delta = this.time.getDelta();
    }

    update() {
        this.updateTime();

    }

}

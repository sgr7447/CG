class PoolTable extends THREE.Object3D{

    constructor(){
        super()

        var wallL = new THREE.Object3D();
        var wallR = new THREE.Object3D();
        var wallU = new THREE.Object3D();
        var wallD = new THREE.Object3D();
        var extL = new THREE.Object3D();
        var extR = new THREE.Object3D();
        var extU = new THREE.Object3D();
        var extD = new THREE.Object3D();
        var floor = new THREE.Object3D();

        var legs = new THREE.Object3D();
        
        var extWallColor = '#A84A3B';
        var floorColor = '#004731';
        var insWallColor = '#F5F5DC';
        var holesColor = '#0A0A0A';

        //WALLS
        //LEFT
        new Cube(wallL, -100, 7.5, 0, 0, 1/2, 0, 100.5, 15, 0.1, insWallColor);
        this.add(wallL);
        //RIGHT
        new Cube(wallR, 100, 7.5, 0, 0, 1/2, 0, 100.5, 15, 0.1, insWallColor);
        this.add(wallR);
        //UP
        new Cube(wallU, 0, 7.5, -50, 0, 0, 0, 200.5, 15, 0.1, insWallColor);
        this.add(wallU);
        //DOWN
        new Cube(wallD, 0, 7.5, 50, 0, 0, 0, 200.5, 15, 0.1, insWallColor);
        this.add(wallD);

        //FLOOR
        new Cube(floor, 0, 0.05, 0, 0, 0, 0, 200-0.1-0.1, 0.1, 100-0.1-0.1, floorColor);
        this.add(floor);

        //EXTERIOR
        //LEFT
        new Cube(extL, -100-0.1-1.5, 0+7.5, 0, 0, 1/2, 0, 100+0.5, 15, 3, extWallColor);
        this.add(extL);
        //RIGHT
        new Cube(extR, 100+0.1+1.5, 0+7.5, 0, 0, 1/2, 0, 100+0.5, 15, 3, extWallColor);
        this.add(extR);
        //UP
        new Cube(extD, 0, 0+7.5, 0-50-1.5-0.1, 0, 0, 0, 200+0.1+6+0.1, 15, 3, extWallColor);
        this.add(extD);
        //DOWN
        new Cube(extU, 0, 0+7.5, 0+50+1.5+0.1, 0, 0, 0, 200+0.1+6+0.1, 15, 3, extWallColor);
        this.add(extU);

        //LEGS
        new Cube(legs, -80, -25, -40, 0, 0, 1/2, 50, 10, 10,extWallColor);
        new Cube(legs, -80, -25, 40, 0, 0, 1/2, 50, 10, 10, extWallColor);
        new Cube(legs, 80, -25, -40, 0, 0, 1/2, 50, 10, 10, extWallColor);
        new Cube(legs, 80, -25, 40, 0, 0, 1/2, 50, 10, 10, extWallColor);
        this.add(legs);

        new Cylinder(legs, -100+6.5+1, 0.05, -50+6.5+1, 0, 0, 0, 0.1, 6.5, 6.5, holesColor);
        new Cylinder(legs, -100+6.5+1, 0.05, 50-6.5-1, 0, 0, 0,  0.1, 6.5, 6.5, holesColor);
        new Cylinder(legs, 0, 0.05, -50+6.5+1, 0, 0, 0,  0.1, 6.5, 6.5, holesColor);
        new Cylinder(legs, 100-6.5-1, 0.05, -50+6.5+1, 0, 0, 0,  0.1, 6.5, 6.5, holesColor);
        new Cylinder(legs, 100-6.5-1, 0.05, 50-6.5-1, 0, 0, 0,  0.1, 6.5, 6.5, holesColor);
        new Cylinder(legs, 0, 0.05, 50-6.5-1, 0, 0, 0,  0.1, 6.5, 6.5, holesColor);

        this.time = new THREE.Clock();
        this.delta;

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

    updateTime() {
        this.delta = this.time.getDelta();
    }

    update() {

        this.updateTime();
    }
}

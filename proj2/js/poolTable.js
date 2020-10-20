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
        var club1 = new THREE.Object3D();
        var club2 = new THREE.Object3D();
        var club3 = new THREE.Object3D();
        var club4 = new THREE.Object3D();
        var club5 = new THREE.Object3D();
        var club6 = new THREE.Object3D();
        var legs = new THREE.Object3D();
        var ball1 = new THREE.Object3D();
        var ball2 = new THREE.Object3D();
        var ball3 = new THREE.Object3D();
        var ball4 = new THREE.Object3D();
        var ball5 = new THREE.Object3D();
        var ball6 = new THREE.Object3D();

        var wallColor = '#A84A3B';
        var floorColor = '#004731';
        var clubColor = '#F5F5DC';
        var ballColor = '#FFFFFF';

        //WALLS
        //LEFT
        new Cube(wallL, -100, 7.5, 0, 0, 1/2, 0, 100.5, 15, 0.1, wallColor);
        this.add(wallL);
        //RIGHT
        new Cube(wallR, 100, 7.5, 0, 0, 1/2, 0, 100.5, 15, 0.1, wallColor);
        this.add(wallR);
        //UP
        new Cube(wallU, 0, 7.5, -50, 0, 0, 0, 200.5, 15, 0.1, wallColor);
        this.add(wallU);
        //DOWN
        new Cube(wallD, 0, 7.5, 50, 0, 0, 0, 200.5, 15, 0.1, wallColor);
        this.add(wallD);

        //FLOOR
        new Cube(floor, 0, 0.05, 0, 0, 0, 0, 200-0.1-0.1, 0.1, 100-0.1-0.1, floorColor);
        this.add(floor);

        //EXTERIOR
        //LEFT
        new Cube(extL, -100-0.1-1.5, 0+7.5, 0, 0, 1/2, 0, 100+0.5, 15, 3, wallColor);
        this.add(extL);
        //RIGHT
        new Cube(extR, 100+0.1+1.5, 0+7.5, 0, 0, 1/2, 0, 100+0.5, 15, 3, wallColor);
        this.add(extR);
        //UP
        new Cube(extD, 0, 0+7.5, 0-50-1.5-0.1, 0, 0, 0, 200+0.1+6+0.1, 15, 3, wallColor);
        this.add(extD);
        //DOWN
        new Cube(extU, 0, 0+7.5, 0+50+1.5+0.1, 0, 0, 0, 200+0.1+6+0.1, 15, 3, wallColor);
        this.add(extU);

        //LEGS
        new Cube(legs, -80, -25, -40, 0, 0, 1/2, 50, 10, 10, wallColor);
        new Cube(legs, -80, -25, 40, 0, 0, 1/2, 50, 10, 10, wallColor);
        new Cube(legs, 80, -25, -40, 0, 0, 1/2, 50, 10, 10, wallColor);
        new Cube(legs, 80, -25, 40, 0, 0, 1/2, 50, 10, 10, wallColor);
        this.add(legs);

        //CLUBS
        //RIGHT
        new Club(club1, 100+35+5, 5, 0, 0, 0, 1/2, 70, clubColor);
        this.add(club1);
        //LEFT
        new Club(club2, -(100+35+5), 5, 0, 0, 0, -1/2, 70, clubColor);
        this.add(club2);
        //UP
        new Club(club3, -50, 5, -(50+35+5), 0, 1/2, 1/2, 70, clubColor);
        this.add(club3);

        new Club(club4, 50, 5, -(50+35+5), 0, 1/2, 1/2, 70, clubColor);
        this.add(club4);
        //DOWN
        new Club(club5, -50, 5, 50+35+5, 0, -1/2, 1/2, 70, clubColor);
        this.add(club5);

        new Club(club6, 50, 5, 50+35+5, 0, -1/2, 1/2, 70, clubColor);
        this.add(club6);

        //BALLS
        //RIGHT
        new Ball(ball1, 90, 5.1, 0, 5, ballColor);
        this.add(ball1);
        //LEFT
        new Ball(ball2, -90, 5.1, 0, 5, ballColor);
        this.add(ball2);
        //UP
        new Ball(ball3, -50, 5.1, -40, 5, ballColor);
        this.add(ball3);
        new Ball(ball4, 50, 5.1, -40, 5, ballColor);
        this.add(ball4);
        //DOWN
        new Ball(ball5, -50, 5.1, 40, 5, ballColor);
        this.add(ball5);
        new Ball(ball6, 50, 5.1, 40, 5, ballColor);
        this.add(ball6);

        this.time = new THREE.Clock();
        this.delta;

    }

    updateTime() {
        this.delta = this.time.getDelta();
    }

    update() {

        this.updateTime();
    }
}

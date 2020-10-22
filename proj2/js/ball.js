class Ball{
    
    constructor(x, y, z){
        this.balls = [];

        var radius = 5;
        var x = [-100 +radius, 100 -radius];
        var z = [-50 +radius, 50 -radius];


        for (var i=0; i<15; i++){
            this.newBall(new Sphere(THREE.Math.randFloat(x[0], x[1]), radius +0.1, THREE.Math.randFloat(z[0], z[1]), radius, 0xFFFFFFF));
        }
    }

    newBall(ball){
        this.balls.push(ball);
        scene.add(ball);
    }
}

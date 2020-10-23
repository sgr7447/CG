class BallsHandler {

    constructor() {

        this.balls = [];

        for (var i=0; i<15; i++){

            var radius = 5;
            var ball = new Ball(radius);

            var hole_radius = 14;
            
            var x = [-100 +radius + hole_radius, 100 -radius -hole_radius];
            var z = [-50 +radius + hole_radius, 50 -radius -hole_radius];
            this.setBall(ball, THREE.Math.randFloat(x[0], x[1]), radius +0.1, THREE.Math.randFloat(z[0], z[1]));

            this.balls.push(ball);

        }
    }

    setBall(ball, x,y,z){
        ball.position.x = x;
        ball.position.y = y;
        ball.position.z = z;
    }

    update(){
        for (var i=0; i<15; i++){
            this.balls[i].update();
        }
    }
}
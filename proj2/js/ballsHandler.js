class BallsHandler {

    constructor() {

        this.balls = [];

        for (var i=0; i<15; i++){

            var ball = new Ball();
            this.balls.push(ball);

        }

    }
}
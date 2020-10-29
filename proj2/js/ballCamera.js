class BallCamera extends THREE.PerspectiveCamera {
    constructor() {

        var aspect = window.innerWidth / window.innerHeight;
        var width = window.innerWidth / aspect;
        var height = window.innerHeight / aspect;

        super(60, aspect, 0.5, 5000);

        this.onResize();
    }

    followBall(ball) {
        this.ball = ball;
        this.update();
    }

    update(ball) {

        if(ball.direction.length() > 0.02){
            var speed = ball.direction.clone().multiplyScalar(-1).normalize();

            this.position.set(ball.position.x + speed.x, ball.position.y + ball.radius * 4, ball.position.z + speed.z);

            this.lookAt(ball.position);
        }

        else{
            this.position.set(ball.position.x, ball.position.y + ball.radius * 4, ball.position.z);
            this.lookAt(ball.position);
        }
    }

    onResize() {
        this.aspect = renderer.getSize().width / renderer.getSize().height;
        this.updateProjectionMatrix();
    }
}

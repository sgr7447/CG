class BallCamera extends THREE.PerspectiveCamera {
    constructor() {

        var aspect = window.innerWidth / window.innerHeight;
        var width = window.innerWidth / aspect;
        var height = window.innerHeight / aspect;

        super(60, aspect, 0.5, 5000);

        this.onResize();
    }

    update(ball) {

        if(ball.direction.length() > 1){
            //vetor com sentido oposto ao da velocidade
            var oppositeDirection = ball.direction.clone().multiplyScalar(-1).normalize();

            //somar o vetor oposto à direção da bola à bola
            this.position.set(ball.position.x + oppositeDirection.x*4 , ball.position.y + ball.radius * 4 +10, ball.position.z + oppositeDirection.z*4);
        }

        this.lookAt(ball.position);
    }

    onResize() {
        this.aspect = renderer.getSize().width / renderer.getSize().height;
        this.updateProjectionMatrix();
    }
}

class Ball extends THREE.Object3D{

    constructor(){

        super();
        var color = '#ffffff';

        this.ball = new THREE.Object3D();
        this.jumping = true;
        this.step = 0;
        this.radius = 10;

        //x, y, z, radius, color
        var textLoader = new THREE.TextureLoader();

        var texture = textLoader.load("textures/pattern_golfball.jpg");

        this.ball = new Sphere(0, this.radius, 0, this.radius, color, texture, null);

        scene.add(this.ball);
    }

    ballJump(delta){

        if(this.jumping){
          this.step += 2*delta;
          this.ball.position.y = Math.abs(200*(Math.sin(this.step)));
          this.ball.position.z = 100 - 100*(Math.cos(this.step));
        }
    }

    startOrStopJumping(){
        this.jumping = !this.jumping;
    }

    reset(){
        this.ball.position.set(0, 0, 0);
        this.jumping = true;
        this.step = 0;

    }

    update(delta) {
        this.ballJump(delta);
    }
}

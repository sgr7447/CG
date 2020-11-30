class Ball extends THREE.Object3D{

    constructor(){

        super();
        var radius = 10;
        var color = '#ffffff';

        this.ball = new THREE.Object3D();
        this.jumping = true;
        this.step = 0;

        /*const texture = new THREE.TextureLoader().load("textures/pattern_golfball.jpg");
        texture.wrapS = THREE.RepeatWrapping;
        texture.wrapT = THREE.RepeatWrapping;
        texture.repeat.set(4, 4);

        //x, y, z, radius, color
        this.add(new Sphere(0, 8, 0, 30, 0xffffff, texture));*/
        var textLoader = new THREE.TextureLoader();

        //nao sei se precisamos disto, é só uma imagem branca
        var texture1 = textLoader.load("textures/white.jpg");
        texture1.wrapS = THREE.RepeatWrapping;
        texture1.wrapT = THREE.RepeatWrapping;

        var texture2 = textLoader.load("textures/pattern_golfball.jpg");
        texture2.wrapS = THREE.RepeatWrapping;
        texture2.wrapT = THREE.RepeatWrapping;

        this.ball = new Sphere(50, radius, 30, radius, color, texture1, texture2);

        scene.add(this.ball);
    }
//acho que isto esta mal, forçamos a paragem da bola
    ballJump(delta){
        if(this.jumping){
          this.step += 2*delta;
          this.ball.position.y = Math.abs(200*(Math.sin(this.step)));
          this.ball.position.z = 100*(Math.cos(this.step));
        }
    }


    update(delta) {
        this.ballJump(delta);
    }
}

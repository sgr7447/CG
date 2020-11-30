class PauseMessage extends THREE.Object3D{

    constructor(){

        super();
        var color = '#ffffff';

        //FLOOR
        var textLoader = new THREE.TextureLoader();

        var texture = textLoader.load("textures/PAUSED.png");
        texture.wrapS = THREE.RepeatWrapping;
        texture.wrapT = THREE.RepeatWrapping;

        var texture2 = textLoader.load("textures/white.jpg");
        texture2.wrapS = THREE.RepeatWrapping;
        texture2.wrapT = THREE.RepeatWrapping;

        this.add(new Plane(0, 75, 600, 0, 1/4, 200, 120, 800, 800, color, texture, texture2));

        pauseScene.add(this);

    }
}

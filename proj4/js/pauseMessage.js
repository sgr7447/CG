class PauseMessage extends THREE.Object3D{

    constructor(){

        super();
        var color = '#ffffff';

        //FLOOR
        var textLoader = new THREE.TextureLoader();

        var texture = textLoader.load("textures/PAUSED.png");
        texture.wrapS = THREE.RepeatWrapping;
        texture.wrapT = THREE.RepeatWrapping;

        this.add(new Plane(0, 75, 600, 0, 1/4, 200, 120, 800, 800, color, texture, null));

        pauseScene.add(this);

    }
}

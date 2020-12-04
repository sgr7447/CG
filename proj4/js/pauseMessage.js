class PauseMessage extends THREE.Object3D{

    constructor(){

        super();
        var color = '#ebebeb';

        //FLOOR
        var textLoader = new THREE.TextureLoader();

        var texture = textLoader.load("textures/PAUSED.png");
        texture.wrapS = THREE.RepeatWrapping;
        texture.wrapT = THREE.RepeatWrapping;

        this.message = new Plane(0, 75, 600, 0, 0, 200, 120, 80, 80, color, texture, null);

        pauseScene.add(this.message);

    }
}

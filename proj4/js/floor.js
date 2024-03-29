class Floor extends THREE.Object3D{

    constructor(){

        super();
        var floorColor = '#ffffff';

        //FLOOR
        var textLoader = new THREE.TextureLoader();

        var texture = textLoader.load("textures/pattern_floor.jpg");
        texture.wrapS = THREE.RepeatWrapping;
        texture.wrapT = THREE.RepeatWrapping;
        texture.repeat.set(8, 8);

        var grassTexture = textLoader.load("textures/pattern_grass.jpg");
        grassTexture.wrapS = THREE.RepeatWrapping;
        grassTexture.wrapT = THREE.RepeatWrapping;
        grassTexture.repeat.set(8, 8);

        this.add(new Plane(0, 0, 0, 1/2,0, 700, 700, 20, 20, floorColor, texture, grassTexture));

        scene.add(this);

    }
}

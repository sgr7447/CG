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

        this.add(new Plane(0, 0, 0, 1/2,0, 700, 700, 800, 800, floorColor, texture, grassTexture));

        /*const loader = new THREE.TextureLoader();
        loader.load('textures/patter_floor.png', (texture) => {
        const material = new THREE.MeshBasicMaterial({
            map: texture,
        });
        const cube = new THREE.Mesh(geometry, material);
        scene.add(cube);
        cubes.push(cube);  // add to our list of cubes to rotate
        });*/

        scene.add(this);

    }
}

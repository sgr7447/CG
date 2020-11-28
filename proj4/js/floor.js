class Floor extends THREE.Object3D{

    constructor(){

        super();
        var floorColor = '#ffffff';

        //FLOOR

        const texture = new THREE.TextureLoader().load("textures/pattern_floor.jpg");
        texture.wrapS = THREE.RepeatWrapping;
        texture.wrapT = THREE.RepeatWrapping;
        texture.repeat.set(4, 4);

        this.add(new Plane(0, 0, 0, 1/2, 100, 100, 200, 200, floorColor, texture));

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

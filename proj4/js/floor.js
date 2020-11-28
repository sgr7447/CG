class Floor extends THREE.Object3D{

    constructor(){

        super();
        var floorColor = '#141413';

        //FLOOR

        this.add(new Plane(0, 0, 0, 1/2, 100, 100, 200, 200, floorColor));

        const texture = new THREE.TextureLoader().load( "textures/patter_floor.png" );
        texture.wrapS = THREE.RepeatWrapping;
        texture.wrapT = THREE.RepeatWrapping;
        texture.repeat.set( 4, 4 );

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

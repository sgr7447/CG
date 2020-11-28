class Floor extends THREE.Object3D{

    constructor(){

        super();
        var floorColor = '#141413';

        //FLOOR
        this.add(new Plane(0, 0, 0, 1/2, 1000, 1000, 200, 200, floorColor));

        /*const texture = new THREE.TextureLoader().load( "textures/patter_floor.png" );
        texture.wrapS = THREE.RepeatWrapping;
        texture.wrapT = THREE.RepeatWrapping;
        texture.repeat.set( 4, 4 );*/

        scene.add(this);
        
    }
}

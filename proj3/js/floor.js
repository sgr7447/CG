class Floor extends THREE.Object3D{

    constructor(){
        super();

        var floor = new THREE.Object3D();

        var floorColor = '#252629';

        //FLOOR
        floor.add(new Plane(0, 0, 0, 1/2, 450, 350, 100, 100, floorColor));
        scene.add(floor);
    }
}

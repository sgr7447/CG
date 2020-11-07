class Floor extends THREE.Object3D{

    constructor(){
        super();

        var floor = new THREE.Object3D();

        var floorColor = '#800000';

        //FLOOR
        floor.add(new Plane(0, 0, 0, 1/2, 400, 250, 100, 100, floorColor));
        scene.add(floor);
    }
}

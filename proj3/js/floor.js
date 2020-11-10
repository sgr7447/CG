class Floor extends THREE.Object3D{

    constructor(){

        super();
        var floorColor = '#141413';

        //FLOOR
        this.add(new Plane(0, 0, 0, 1/2, 1000, 1000, 200, 200, floorColor));
        scene.add(this);
    }
}

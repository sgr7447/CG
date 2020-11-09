class Floor extends THREE.Object3D{

    constructor(){

        super();
        var floorColor = '#848999';

        //FLOOR
        this.add(new Plane(0, 0, 0, 1/2, 450, 350, 100, 100, floorColor));
        scene.add(this);
    }
}

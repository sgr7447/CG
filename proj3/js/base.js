class Base extends THREE.Object3D{

    constructor(){
        super()

        var floor = new THREE.Object3D();
        var platform = new THREE.Object3D();

        var platformColor = '#FF6961';
        var floorColor = '#800000';

        //FLOOR
        floor.add(new Plane(0, 0, 0, 1/2, 400, 200, 20, 20, floorColor));
        platform.add(new Cylinder(0, 0.05+5, 0, 0, 0, 0, 10, 90, 90, platformColor));
        floor.add(platform);
        scene.add(floor);

    }

}

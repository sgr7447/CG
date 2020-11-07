class Platform extends THREE.Object3D{

    constructor(){
        super()

        var platform = new THREE.Object3D();

        var platformColor = '#FF6961';
        var platformHeight = 10;
        var platformRadius = 100;

        platform.add(new Cylinder(0, platformHeight/2, 0, 0, 0, 0, platformHeight, platformRadius, 200, 10, platformColor));
        scene.add(platform);

    }

}

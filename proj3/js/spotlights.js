class Spotlights extends THREE.Object3D{

    constructor(){

        super();

        var spotlight1 = new THREE.Object3D();
        var spotlight2 = new THREE.Object3D();
        var spotlight3 = new THREE.Object3D();

        spotlight1.add(new Sphere( 180, 10, 0, 2, 0x848999));

    }
}

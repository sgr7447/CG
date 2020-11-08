class Platform extends THREE.Object3D{

    constructor(platformHeight){

        super();

        var platformColor = '#848999';
        var platformRadius = 350;

        this.add(new Cylinder(0, platformHeight/2, 0, 0, 0, 0, platformHeight, platformRadius, 200, 10, platformColor));
    }

}

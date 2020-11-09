class Platform extends THREE.Object3D{

    constructor(platformHeight){

        super();

        var platformColor = '#D2B48C';
        var platformRadius = 350;

        this.add(new Cylinder(0, platformHeight/2, 0, 0, 0, 0, platformHeight, platformRadius, 200, 10, platformColor));
    }

}

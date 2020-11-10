class Platform extends THREE.Object3D{

    constructor(platformHeight){

        super();

        var platformColor = '#6b6a6a';
        var platformRadius = 350;

        this.add(new Cylinder(0, platformHeight/2, 0, 0, 0, 0, platformHeight, platformRadius, 200, 10, platformColor));
    }

}

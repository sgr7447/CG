class Platform extends THREE.Object3D{

    constructor(){

        super();

        var platformColor = '#848999';
        var platformHeight = 60;
        var platformRadius = 350;

        this.add(new Cylinder(0, platformHeight/2, 0, 0, 0, 0, platformHeight, platformRadius, 200, 10, platformColor));


    }

}

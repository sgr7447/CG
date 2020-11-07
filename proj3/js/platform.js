class Platform extends THREE.Object3D{

    constructor(){

        super();

        var platformColor = '#FF6961';
        var platformHeight = 60;
        var platformRadius = 620;

        this.add(new Cylinder(0, platformHeight/2, 0, 0, 0, 0, platformHeight, platformRadius, 200, 10, platformColor));
        this.scale.set(0.2, 0.2, 0.2);

        //scene.add(this);

    }

}

class Flag extends THREE.Object3D{

    constructor(){

        super();
        var stickColor = '#BFBFBF';

        //x, y, z, radx, rady, radz, len, radius, radialSeg, heightSeg, color
        this.add(new Cylinder(0, 0, 0, 0, 0, 0, 40, 5, 20, 20, stickColor));
        //this.add(new Cylinder());
    }
}

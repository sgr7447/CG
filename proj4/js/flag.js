class Flag extends THREE.Object3D{

    constructor(){

        super();
        var stickColor = '#BFBFBF';
        var flagColor = '#ff78cd';

        //x, y, z, radx, rady, radz, len, radius, radialSeg, heightSeg, color
        this.add(new Cylinder(0, 40, 0, 0, 0, 0, 80, 2, 20, 20, stickColor));
        this.add(new Cylinder(9, 64, 0, 1/2, 1/2, 0, 0.5, 20, 3, 3, flagColor));

        scene.add(this);
    }
}

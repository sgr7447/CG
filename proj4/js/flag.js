class Flag extends THREE.Object3D{

    constructor(){

        super();
        var stickColor = '#BFBFBF';
        var flagColor = '#ff78cd';

        //x, y, z, radx, rady, radz, len, radius, radialSeg, heightSeg, color
        this.add(new Cylinder(0, 0, 0, 0, 0, 0, 140, 3, 20, 20, stickColor));
        this.add(new Cylinder(18, 40, 0, 1/2, 1/2, 0, 0.5, 30, 3, 3, flagColor));

        this.position.set(-240, 70, 210);

        scene.add(this);
    }

    spin(speed, delta) {
        this.rotateY(speed*delta);
    }

    update(delta) {
        this.spin(1.2, delta);
    }
}

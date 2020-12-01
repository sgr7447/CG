class Flag extends THREE.Object3D{

    constructor(){

        super();
        var stickColor = '#BFBFBF';
        var flagColor = '#ff78cd';
        var textLoader = new THREE.TextureLoader();

        var flagTexture = textLoader.load("textures/pattern_flag.jpg");
        flagTexture.wrapS = THREE.RepeatWrapping;
        flagTexture.wrapT = THREE.RepeatWrapping;
        flagTexture.repeat.set(8, 8);

        //x, y, z, radx, rady, radz, len, radius, radialSeg, heightSeg, color
        this.add(new Cylinder(0, 0, 0, 0, 0, 0, 140, 3, 8, 8, stickColor, null));
        this.add(new Cylinder(18, 40, 0, 1/2, 1/2, 0, 0.5, 30, 3, 3, flagColor, flagTexture));

        this.position.set(-240, 70, 210);

        scene.add(this);
    }

    spin(speed, delta) {
        this.rotateY(speed*delta);
    }

    reset(){
        this.rotation.set(0, 1/2*Math.PI, 0);
    }

    update(delta) {
        this.spin(1.2, delta);
    }
}

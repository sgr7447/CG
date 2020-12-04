class pointLight extends THREE.PointLight {

    constructor() {

        super();

        this.position.set(-25, 180, 25);

        this.visible = true;
        scene.add(this);
    }

    flipSwitch() {
        this.visible = !this.visible
    }

    reset(){
        this.visible = true;
    }

}

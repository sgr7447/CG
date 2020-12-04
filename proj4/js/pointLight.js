class pointLight extends THREE.PointLight {

    constructor() {

        super();

        this.position.set(0, 100, 0);

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

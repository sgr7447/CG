class pointLight extends THREE.PointLight {

    constructor() {
        
        super();

        this.position.set(30, 200, 30);
        
        this.visible = true;
        scene.add(this);
    }

    flipSwitch() {
        this.visible = !this.visible
    }

}
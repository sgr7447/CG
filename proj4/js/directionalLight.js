
class directionalLight extends THREE.DirectionalLight {

    constructor() {
        
        super();

        scene.add(this.target);

        this.target = scene;

        this.position.set(30, 0, 0);
        
        this.visible = true;
        scene.add(this);
    }

    flipSwitch() {
        this.visible = !this.visible
    }

}
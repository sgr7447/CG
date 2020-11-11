
class globalLight extends THREE.DirectionalLight {

    constructor() {
        
        super();

        scene.add(this.target);

        this.target = scene;

        this.position.set(30, 200, 30);
        
        this.visible = true;
        scene.add(this);
    }

    flipSwitch() {
        this.visible = !this.visible
    }

}
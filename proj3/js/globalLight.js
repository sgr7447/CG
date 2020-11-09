
class globalLight extends THREE.DirectionalLight {

    constructor() {
        
        super();

        scene.add(this.target);

        this.target = scene;

        this.position.set(30, 200, 30);
        
        this.on = true;
        scene.add(this);
    }

    flipSwitch() {
        if (this.on)
            scene.remove(this);
        else
            scene.add(this);

        this.on = !this.on
    }

}
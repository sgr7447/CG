class spotlight extends THREE.SpotLight{

    constructor(x, y, z, rad, target){

        super(0xffffff, 1, 0, rad, 0, 1);

        scene.add(this.target);

        this.target = target;
        this.position.set(x, y, z);

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

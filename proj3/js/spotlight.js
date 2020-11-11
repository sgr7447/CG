class spotlight extends THREE.SpotLight{

    constructor(x, y, z, rad, target){

        super(0xffffff, 1, 0, rad, 0, 1);

        scene.add(this.target);

        this.target = target;
        this.position.set(x, y, z);
        this.visible = true;

        this.on = true;

        this.lamp = new THREE.Object3D();

        this.lamp.add(new Cone(5, 9, 0, 0, 0, 0xddff00));
        this.lamp.add(new Sphere(0, 4.5, 0, 3, 0xddff00));
        this.lamp.position.set(x, y, z);
        this.lamp.lookAt(target.position);
        this.lamp.rotateOnWorldAxis(THREE.Object3D.DefaultUp, Math.PI);

        scene.add(this.lamp);
        scene.add(this);
    }

    flipSwitch() {
        this.visible = !this.visible;
        this.lamp.visible = !this.lamp.visible;
    }
}

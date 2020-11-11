class spotlight extends THREE.SpotLight{

    constructor(x, y, z, rad, target){

        super(0xffffff, 1, 0, rad, 0, 1);

        scene.add(this.target);

        this.target = target;
        this.position.set(x, y, z);

        this.on = true;

        var lamp = new THREE.Object3D();

        lamp.add(new Cone(5, 9, 0, 0, 0));

        lamp.position.set(x, y, z);
        lamp.lookAt(target.position);
        lamp.rotateOnWorldAxis(THREE.Object3D.DefaultUp, Math.PI);
        //lamp.add(new Sphere);


        scene.add(lamp);
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

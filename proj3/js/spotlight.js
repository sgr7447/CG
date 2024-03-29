class spotlight extends THREE.SpotLight{

    constructor(x, y, z, rad, target){

        //SpotLight( color : Integer, intensity : Float, distance : Float, angle :
        //Radians, penumbra : Float, decay : Float )
        super(0xffffff, 1, 0, rad, 0, 1);

        scene.add(this.target);
        this.target = target;
        this.position.set(x, y, z);

        this.visible = true;

        //estrutura do candeeiro
        this.lamp = new THREE.Object3D();
        this.lamp.add(new Cone(5, 9, 0, 0, 0, 0xadadad));
        this.lamp.add(new Sphere(0, 4.5, 0, 3, 0xadadad));
        this.lamp.position.set(x, y, z);
        this.lamp.lookAt(target.position);
        this.lamp.rotateOnWorldAxis(THREE.Object3D.DefaultUp, Math.PI);
        this.lamp.visible = true;

        scene.add(this.lamp);
        scene.add(this);
    }

    flipSwitch() {
        this.visible = !this.visible;
        this.lamp.visible = !this.lamp.visible;
    }
}

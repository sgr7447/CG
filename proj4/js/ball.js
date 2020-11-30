class Ball extends THREE.Object3D{

    constructor(){

        super();

        const texture = new THREE.TextureLoader().load("textures/pattern_golfball.jpg");
        texture.wrapS = THREE.RepeatWrapping;
        texture.wrapT = THREE.RepeatWrapping;
        texture.repeat.set(4, 4);

        //x, y, z, radius, color
        this.add(new Sphere(0, 8, 0, 8, 0xffffff, texture));

        scene.add(this);
    }
}

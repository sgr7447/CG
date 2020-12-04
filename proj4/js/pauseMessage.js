class PauseMessage extends THREE.Object3D{

    constructor(){

        super();
        var color = '#ebebeb';

        //FLOOR
        var textLoader = new THREE.TextureLoader();
        var texture = textLoader.load("textures/PAUSED.png");

        var material = new THREE.MeshBasicMaterial({color: color, wireframe: false, side:THREE.DoubleSide, map: texture});

        var geometry = new THREE.PlaneGeometry(200, 120, 80, 80);

        mesh = new THREE.Mesh(geometry, material);
        mesh.position.set(0, 50, 600);
        this.add(mesh);

        pauseScene.add(this);
    }
}

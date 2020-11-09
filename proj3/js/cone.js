class Cone extends THREE.Object3D{

    constructor(radius, height, x, y, z){
        super();
        var color ='#C0C0C0';
        var material = new THREE.MeshBasicMaterial({ color: color, wireframe: false});
        var geometry = new THREE.ConeGeometry(radius, height, 32);
        this.material = material;

        this.radius = radius;

        mesh = new THREE.Mesh(geometry, material);
        mesh.position.set(x, y, z);

        this.add(mesh);

    }
}

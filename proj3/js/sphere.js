class Sphere extends THREE.Object3D{

    constructor(x, y, z, radius, color){
        super();

        var material = new THREE.MeshBasicMaterial({ color: color, wireframe: false});
        var geometry = new THREE.SphereGeometry(radius, 30, 30);
        this.material = material;

        this.radius = radius;

        this.Axis = new THREE.AxesHelper(10);
        this.add(this.Axis);

        mesh = new THREE.Mesh(geometry, material);

        this.add(mesh);

        this.x = x;
        this.y = y;
        this.z = z;
    }
}

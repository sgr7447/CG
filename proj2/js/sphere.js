class Sphere extends THREE.Object3D{

    constructor(x, y, z, radius, color){
        super();

        var material = new THREE.MeshBasicMaterial({ color: color, wireframe: false});
        var geometry = new THREE.SphereGeometry(radius, 30, 30);
        this.material = material;

        this.radius = radius;

        //this.axis = new THREE.AxisHelper(50);
        //this.add(this.axis);

        mesh = new THREE.Mesh(geometry, material);
        mesh.position.set(x, y, z);

        this.add(mesh);
        
        this.x = x;
        this.y = y;
        this.z = z;
    }
}

class Sphere extends THREE.Object3D{

    constructor(x, y, z, radius, segW, segH){

        super();

        this.axis = new THREE.AxisHelper(5);
        this.add(this.axis);

        var material = new THREE.MeshBasicMaterial({ color: '#F8ABBA', wireframe: true});
        var geometry = new THREE.SphereGeometry(radius, segW, segH);

        mesh = new THREE.Mesh(geometry, material);
        mesh.position.set(x, y, z);
        this.add(mesh);
    }

}

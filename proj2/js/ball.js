class Ball extends THREE.Object3D{

    constructor(obj, x, y, z, radius, color){
        super();

        var material = new THREE.MeshBasicMaterial({ color: color, wireframe: false});
        var geometry = new THREE.SphereGeometry(radius, 30, 30);

        mesh = new THREE.Mesh(geometry, material);
        mesh.position.set(x, y, z);

        this.add(mesh);
        obj.add(this);

        this.x = x;
        this.y = y;
        this.z = z;
    }


}

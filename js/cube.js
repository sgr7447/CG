class Cube extends THREE.Object3D{

    constructor(obj, x, y, z, rad, len, height, color){

        super();

        var material = new THREE.MeshBasicMaterial({ color: color, wireframe: true });
        var geometry = new THREE.BoxGeometry(len, height, len);

        mesh = new THREE.Mesh(geometry, material);
        mesh.rotation.set(0, 0, Math.PI*rad);
        mesh.position.set(x, y, z);
        this.add(mesh);
        obj.add(this);

        this.x = x;
        this.y = y;
        this.z = z;
    }

}

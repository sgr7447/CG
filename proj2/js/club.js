class Club extends THREE.Object3D{

    constructor(obj, x, y, z, radx, rady, radz, len, color){
        super();

        var material = new THREE.MeshBasicMaterial({ color: color, wireframe: false });
        var geometry = new THREE.CylinderGeometry(0.7, 1.3, len, 20);

        mesh = new THREE.Mesh(geometry, material);
        mesh.rotation.set(Math.PI*radx, Math.PI*rady, Math.PI*radz);
        mesh.position.set(x, y, z);

        //adds geometry to class Cylinder and adds Cylinder to obj
        this.add(mesh);
        obj.add(this);

        this.len = len;

        this.x = x;
        this.y = y;
        this.z = z;
    }
}

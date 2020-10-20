class Cylinder extends THREE.Object3D{

    constructor(obj, x, y, z, rad, len, radius, color){

        super();

        var material = new THREE.MeshBasicMaterial({ color: color, wireframe: false });
        var geometry = new THREE.CylinderGeometry( radius, radius, len, 15);

        mesh = new THREE.Mesh(geometry, material);
        mesh.rotation.set(0, 0, Math.PI*rad);
        mesh.position.set(x, y, z);

        //adds geometry to class Cylinder and adds Cylinder to obj
        this.add(mesh);
        obj.add(this);

        this.len = len;
        this.rad = rad;

        this.x = x;
        this.y = y;
        this.z = z;
    }

}

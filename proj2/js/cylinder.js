class Cylinder extends THREE.Object3D{

    constructor(obj, x, y, z, radx, rady, radz, len, radius1, radius2, segL, segR, color){

        super();

        var material = new THREE.MeshBasicMaterial({ color: color, wireframe: false });
        var geometry = new THREE.CylinderGeometry( radius1, radius2, len, segR, segL);

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

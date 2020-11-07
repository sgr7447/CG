class Cylinder extends THREE.Object3D{

    constructor(x, y, z, radx, rady, radz, len, radius, radialSeg, heightSeg, color){
        super();

        var material = new THREE.MeshBasicMaterial({ color: color, wireframe: false });
        var geometry = new THREE.CylinderGeometry(radius, radius, len, radialSeg, heightSeg);
        this.material = material;

        mesh = new THREE.Mesh(geometry, material);
        mesh.rotation.set(Math.PI*radx, Math.PI*rady, Math.PI*radz);
        mesh.position.set(x, y, z);

        //adds geometry to class Cylinder and adds Cylinder to obj
        this.add(mesh);

        this.len = len;

        this.x = x;
        this.y = y;
        this.z = z;
    }
}

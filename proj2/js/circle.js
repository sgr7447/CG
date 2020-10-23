class Circle extends THREE.Object3D{
    
    constructor(obj, x, y, z, radx, rady, radz, radius, seg, color){

        super();

        var material = new THREE.MeshBasicMaterial({ color: color, wireframe: false});
        var geometry = new THREE.CircleGeometry(radius, seg);

        mesh = new THREE.Mesh(geometry, material);
        mesh.rotation.set(Math.PI*radx, Math.PI*rady, Math.PI*radz);
        mesh.position.set(x, y, z);
        this.add(mesh);
        obj.add(this);

        this.x = x;
        this.y = y;
        this.z = z;
    }

}
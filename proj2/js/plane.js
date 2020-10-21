class Plane extends THREE.Object3D{

    constructor(obj, x, y, z, rad, len, height, segL, segH, color){

        super();

        var material = new THREE.MeshBasicMaterial({ color: color, wireframe: true});
        var geometry = new THREE.PlaneGeometry(len, height, segL, segH);

        mesh = new THREE.Mesh(geometry, material);
        mesh.rotation.set(Math.PI*rad, 0, 0);
        mesh.position.set(x, y, z);
        this.add(mesh);
        obj.add(this);

        this.x = x;
        this.y = y;
        this.z = z;
    }

}

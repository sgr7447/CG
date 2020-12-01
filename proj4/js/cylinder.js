class Cylinder extends THREE.Object3D{

    constructor(x, y, z, radx, rady, radz, len, radius, radialSeg, heightSeg, color, texture){
        super();

        var materials = [ new THREE.MeshBasicMaterial({color: color, wireframe: false, bumpMap: texture}),
                          new THREE.MeshPhongMaterial({color: color, wireframe: false, bumpMap: texture})
                        ];

        var geometry = new THREE.CylinderGeometry(radius, radius, len, radialSeg, heightSeg);

        mesh = new MeshHandler(geometry, materials);
        mesh.rotation.set(Math.PI*radx, Math.PI*rady, Math.PI*radz);
        mesh.position.set(x, y, z);

        //adds geometry to class Cylinder and adds Cylinder to obj
        this.add(mesh);
    }
}

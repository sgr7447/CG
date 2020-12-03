class Sphere extends THREE.Object3D{

    constructor(x, y, z, radius, color, texture1, texture2){
        super();

        var materials = [ new THREE.MeshBasicMaterial({color: color, wireframe: false, map: texture1}),
                          new THREE.MeshPhongMaterial({color: color, wireframe: false, side:THREE.DoubleSide, map: texture1, bumpMap: texture2, shininess: 90})
                        ];
        var geometry = new THREE.SphereGeometry(radius, 30, 30);

        mesh = new MeshHandler(geometry, materials);
        mesh.position.set(x, y, z);

        this.add(mesh);
    }
}

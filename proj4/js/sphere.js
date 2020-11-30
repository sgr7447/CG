class Sphere extends THREE.Object3D{

    constructor(x, y, z, radius, color, texture){
        super();

        var materials = [ new THREE.MeshBasicMaterial({color: color, wireframe: false, map: texture}),
            new THREE.MeshLambertMaterial({color: color, wireframe: false, side:THREE.DoubleSide, map: texture}),
            new THREE.MeshPhongMaterial({color: color, wireframe: false, side:THREE.DoubleSide, map: texture})
            ]
        var geometry = new THREE.SphereGeometry(radius, 30, 30);

        mesh = new MeshHandler(geometry, materials);
        mesh.position.set(x, y, z);

        this.add(mesh);
    }
}

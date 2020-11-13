class Cone extends THREE.Object3D{

    constructor(radius, height, x, y, z, color){
        super();

        var materials = [ new THREE.MeshBasicMaterial({color: color, wireframe: false}),
            new THREE.MeshLambertMaterial({color: color, wireframe: false, side:THREE.DoubleSide, flatShading: true}),
            new THREE.MeshPhongMaterial({color: color, wireframe: false, side:THREE.DoubleSide, flatShading: true})
            ]

        var geometry = new THREE.ConeGeometry(radius, height, 32);

        mesh = new MeshHandler(geometry, materials);
        mesh.position.set(x, y, z);

        this.add(mesh);

    }
}

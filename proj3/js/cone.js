class Cone extends THREE.Object3D{

    constructor(radius, height, x, y, z){
        super();

        var color ='#adadad';
        var materials = [ new THREE.MeshBasicMaterial({color: color, wireframe: false}),
            new THREE.MeshLambertMaterial({color: color, wireframe: false, side:THREE.DoubleSide, shading: THREE.FlatShading, emissive: color}),
            new THREE.MeshPhongMaterial({color: color, wireframe: false, side:THREE.DoubleSide, shading: THREE.FlatShading})
            ]

        var geometry = new THREE.ConeGeometry(radius, height, 32);

        mesh = new MeshHandler(geometry, materials);
        mesh.position.set(x, y, z);

        this.add(mesh);

    }
}

class Cube extends THREE.Object3D{

    constructor(x, y, z, radx, rady, radz, len, height, depth, color){

        super();

        var materials = [ new THREE.MeshBasicMaterial({color: color, wireframe: false}),
            new THREE.MeshLambertMaterial({color: color, wireframe: false, side:THREE.DoubleSide, flatShading: true}),
            new THREE.MeshPhongMaterial({color: color, wireframe: false, side:THREE.DoubleSide, flatShading: true})
            ]

        var geometry = new THREE.BoxGeometry(len, height, depth);

        mesh = new MeshHandler(geometry, materials);
        mesh.rotation.set(Math.PI*radx, Math.PI*rady, Math.PI*radz);
        mesh.position.set(x, y, z);

        this.add(mesh);

        this.x = x;
        this.y = y;
        this.z = z;
    }

}

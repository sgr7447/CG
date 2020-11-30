class Plane extends THREE.Object3D{

    constructor(x, y, z, radx, rady, len, height, segL, segH, color, texture, texture2){

        super();

        var materials = [ new THREE.MeshBasicMaterial({color: color, wireframe: false, side:THREE.DoubleSide, map: texture}),
                          new THREE.MeshPhongMaterial({color: color, wireframe: false, side:THREE.DoubleSide, map: texture, bumpMap: texture2})
                        ];

        var geometry = new THREE.PlaneGeometry(len, height, segL, segH);

        mesh = new MeshHandler(geometry, materials);
        mesh.rotation.set(Math.PI*radx, Math.PI*rady, 0);
        mesh.position.set(x, y, z);
        this.add(mesh);
    }

}

class Plane extends THREE.Object3D{

    constructor(x, y, z, rad, len, height, segL, segH, color, texture, grassTexture){

        super();

        var materials = [ new THREE.MeshBasicMaterial({color: color, wireframe: false, side:THREE.DoubleSide, map: texture}),
                        new THREE.MeshLambertMaterial({color: color, wireframe: false, side:THREE.DoubleSide, map: texture}),
                        new THREE.MeshPhongMaterial({color: color, wireframe: false, side:THREE.DoubleSide, map: texture, bumpMap: grassTexture})
                        ]

        var geometry = new THREE.PlaneGeometry(len, height, segL, segH);

        mesh = new MeshHandler(geometry, materials);
        mesh.rotation.set(Math.PI*rad, 0, 0);
        mesh.position.set(x, y, z);
        this.add(mesh);

        this.x = x;
        this.y = y;
        this.z = z;
    }

}

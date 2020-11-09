class Plane extends THREE.Object3D{

    constructor(x, y, z, rad, len, height, segL, segH, color){

        super();

        var materials = [ new THREE.MeshBasicMaterial({color: color, wireframe: true}),
                        new THREE.MeshLambertMaterial({color: color, wireframe: true}),
                        new THREE.MeshPhongMaterial({color: color, wireframe: true}) 
                        ]

        var geometry = new THREE.PlaneGeometry(len, height, segL, segH);

        mesh = new CreateMesh(geometry, materials);
        mesh.rotation.set(Math.PI*rad, 0, 0);
        mesh.position.set(x, y, z);
        this.add(mesh);

        this.x = x;
        this.y = y;
        this.z = z;
    }

}

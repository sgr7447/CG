
class Mobile extends THREE.Object3D{

    constructor(x, y, z) {

        super();

        this.addArm(0, 0, 0, 0, 12);
        this.addArm(0, -20, 0, 0, 7);
        //this.addArm(0, -10, 0, 0, 3);

        scene.add(this);

        this.position.x = x;
        this.position.y = y;
        this.position.z = z;
    }


    addArm(x, y, z, rad, len){

        material = new THREE.MeshBasicMaterial({ color: 0x00ff00, wireframe: true });
        geometry = new THREE.CylinderGeometry(0.2, 0.2, len);
        mesh = new THREE.Mesh(geometry, material);
        mesh.position.set(x, y, z);
        mesh.rotation.set(Math.PI*rad, 0, 0);
        this.add(mesh);
    }
}
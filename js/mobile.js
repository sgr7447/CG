
class Mobile extends THREE.Object3D{

    constructor(x, y, z) {

        super();


        var mobileTopLayer = new THREE.Object3D();
        var mobileMiddleLayer = new THREE.Object3D();
        var mobileBottomLayer = new THREE.Object3D();


        this.addArm(mobileTopLayer, 0, 0, 0, 0, 12);
        this.addArm(mobileTopLayer, -8.48, -14.48, 0, -1/4, 24);
        this.addArm(mobileTopLayer, -8.48 +4.24, -14.48 -4.24, 0, 1/4, 12);
        this.addArm(mobileMiddleLayer, +8.48, -14.48, 0, 1/4, 24);
        this.addArm(mobileMiddleLayer, +8.48 +8.48, -14.48 -8.48, 0, 1/4, 24);
        this.addArm(mobileMiddleLayer, 8.48, -31.44, 0, -1/4, 24);

        this.addCylinder(mobileTopLayer, -16.96, -30.48, 0, 15, 4, 0x836FFF);
        this.addSphere(mobileTopLayer, -10.48, -30.48, 0,5,0x836FFF);

        mobileMiddleLayer.add(mobileBottomLayer);
        mobileTopLayer.add(mobileMiddleLayer);

        this.add(mobileTopLayer);

        scene.add(this);

        this.position.x = x;
        this.position.y = y;
        this.position.z = z;
    }


    addArm(obj, x, y, z, rad, len){

        material = new THREE.MeshBasicMaterial({ color: 0x00FA9A, wireframe: true });
        geometry = new THREE.CylinderGeometry(0.2, 0.2, len);
        mesh = new THREE.Mesh(geometry, material);
        mesh.rotation.set(0, 0, Math.PI*rad);
        mesh.position.set(x, y, z);

        obj.add(mesh);
    }

    addCylinder(obj, x, y, z, len, radius, color){

        material = new THREE.MeshBasicMaterial({ color: color, wireframe: true });
        geometry = new THREE.CylinderGeometry( radius, radius, len, 5);
        mesh = new THREE.Mesh(geometry, material);
        mesh.position.set(x, y, z);

        obj.add(mesh);
    }

    addSphere(obj, x, y, z, radius, color){

        material = new THREE.MeshBasicMaterial({ color: color, wireframe: true });
        geometry = new THREE.SphereGeometry(radius, 15, 15);
        mesh = new THREE.Mesh(geometry, material);
        mesh.position.set(x, y, z);

        obj.add(mesh);
    }
}

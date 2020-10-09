
class Mobile extends THREE.Object3D{

    constructor(x, y, z) {

        super();


        var mobileTopLayer = new THREE.Object3D();
        var mobileMiddleLayer = new THREE.Object3D();
        var mobileBottomLayer = new THREE.Object3D();


        this.addArm(mobileTopLayer, 0, 0, 0, 0, 12);
        this.addArm(mobileTopLayer, 0, -6, 0, -1/2, 54);
        this.addArm(mobileTopLayer, -27, -8.5, 0, 0, 5);
        this.addArm(mobileTopLayer, 27, -8.5, 0, 0, 5);
        this.addArm(mobileTopLayer, -27, -11, 0, -1/2, 27);
        this.addArm(mobileTopLayer, -13.5, -13.5, 0, 0, 5);
        this.addArm(mobileTopLayer, -44.5, -15.1, 0, -1/4, 12);
        this.addArm(mobileTopLayer, -36.5, -15.3, 0, 1/4, 12);
        this.addArm(mobileTopLayer, 34, -18, 0, 1/4, 20);
        this.addArm(mobileTopLayer, 21.5, -16.5, 0, -1/4, 15);

        this.addSphere(mobileTopLayer, -13.5, -21, 0, 5, 0x836FFF);
        this.addCube(mobileTopLayer, -48.5, -24.5, 0, 10, 0x836FFF);
        this.addOct(mobileTopLayer, -32.2, -24.3, 0, 5, 0x836FFF);
        this.addTorus(mobileTopLayer, 16, -28, 0, 5, 2, 0x836FFF);



        /*this.addArm(mobileTopLayer, 0, 0, 0, 0, 12);
        this.addArm(mobileTopLayer, -8.48, -14.48, 0, -1/4, 24);
        this.addArm(mobileTopLayer, -8.48 +4.24, -14.48 -4.24, 0, 1/4, 12);
        this.addArm(mobileMiddleLayer, +8.48, -14.48, 0, 1/4, 24);
        this.addArm(mobileMiddleLayer, +8.48 +8.48, -14.48 -8.48, 0, 1/4, 24);
        this.addArm(mobileMiddleLayer, 8.48, -31.44, 0, -1/4, 24);

        this.addCylinder(mobileTopLayer, -16.96, -30.48, 0, 15, 4, 0x836FFF);
        this.addSphere(mobileTopLayer, -10.48, -30.48, 0,5,0x836FFF);*/

        mobileMiddleLayer.add(mobileBottomLayer);
        mobileTopLayer.add(mobileMiddleLayer);


        this.add(mobileTopLayer);

        scene.add(this);

        this.position.x = x;
        this.position.y = y;
        this.position.z = z;
    }

    addFigure(obj, x, y, z, rad, geometry, material){

        mesh = new THREE.Mesh(geometry, material);
        mesh.rotation.set(0, 0, Math.PI*rad);
        mesh.position.set(x, y, z);
        obj.add(mesh);

    }


    addArm(obj, x, y, z, rad, len){

        material = new THREE.MeshBasicMaterial({ color: 0x00FA9A, wireframe: true });
        geometry = new THREE.CylinderGeometry(0.2, 0.2, len);
        this.addFigure(obj, x, y, z, rad, geometry, material);
    }

    addOct(obj, x, y, z, len, color){

        material = new THREE.MeshBasicMaterial({ color: color, wireframe: true });
        geometry = new THREE.OctahedronGeometry(len);
        this.addFigure(obj, x, y, z, 0, geometry, material);
        
    }

    addCube(obj, x, y, z, len, color){

        material = new THREE.MeshBasicMaterial({ color: color, wireframe: true });
        geometry = new THREE.BoxGeometry(len, len, len );
        this.addFigure(obj, x, y, z, 0, geometry, material);
    }


    addCylinder(obj, x, y, z, len, radius, color){

        material = new THREE.MeshBasicMaterial({ color: color, wireframe: true });
        geometry = new THREE.CylinderGeometry( radius, radius, len, 5);
        this.addFigure(obj, x, y, z, 0, geometry, material);
    }

    addSphere(obj, x, y, z, radius, color){

        material = new THREE.MeshBasicMaterial({ color: color, wireframe: true });
        geometry = new THREE.SphereGeometry(radius, 15, 15);
        this.addFigure(obj, x, y, z, 0, geometry, material);
    }

    addTorus(obj, x, y, z, r1, r2, color){

        material = new THREE.MeshBasicMaterial({ color: color, wireframe: true });
        geometry = new THREE.TorusGeometry( r1, r2);
        this.addFigure(obj, x, y, z, 0, geometry, material);
    }
}

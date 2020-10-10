
class Mobile extends THREE.Object3D{

    constructor(x, y, z) {

        super();


        var mobileTopLayer = new THREE.Object3D();
        var mobileMiddleLayer = new THREE.Object3D();
        var mobileBottomLayer = new THREE.Object3D();


        this.addArm(mobileTopLayer, 0, 0, 0, 0, 12);
        this.addArm(mobileTopLayer, 0, -6, 0, -1/2, 54);
        this.addArm(mobileTopLayer, -27, -11, 0, -1/2, 28);
        this.addArm(mobileTopLayer, -27, -8.5, 0, 0, 5);
        this.addArm(mobileTopLayer, 27, -8.5, 0, 0, 5);
        this.addArm(mobileTopLayer, -41, -13.5, 0, 0, 5);
        this.addArm(mobileTopLayer, -13, -15.24, 0, 0, 8.48);//3 - esfera
        this.addArm(mobileTopLayer, -45.24, -20.35, 0, -1/4, 12);//1 - cubo
        this.addArm(mobileTopLayer, -36.76, -20.35, 0, 1/4, 12);//2 - oct lado do triangulo: 8.84
        this.addArm(mobileTopLayer, 21.7, -16.3, 0, -1/4, 15);//4 - lado: 10.6
        this.addArm(mobileTopLayer, 35.84, -19.84, 0, 1/4, 25);//lado:17.68 -8.84
        this.addArm(mobileTopLayer, 44.68, -33.6, 0, 0, 10);//
        this.addArm(mobileTopLayer, 44.68, -33.6, 0, 0, 10);//
        this.addArm(mobileTopLayer, 44.68, -38.6, 0, 1/2, 30);//
        this.addArm(mobileTopLayer, 59.68, -41.1, 0, 0, 5);//5
        this.addArm(mobileTopLayer, 29.68, -42.5, 0, 0, 8);//
        this.addArm(mobileTopLayer, 29.68, -46.5, 0, 1/2, 30);//
        this.addArm(mobileTopLayer, 44.68, -61.5, 0, 0, 30);//6
        this.addArm(mobileTopLayer, 14.68, -50.5, 0, 0, 8);//7
        this.addArm(mobileTopLayer, 14.68, -54.5, 0, 1/2, 30);//
        this.addArm(mobileTopLayer, 29.68, -58.5, 0, 0, 8);//
        this.addArm(mobileTopLayer, -0.5, -58.5, 0, 0, 8);//8

        this.addArm(mobileTopLayer, -5.8, -67.8, 0, -1/4, 15);//
        this.addArm(mobileTopLayer, 4.8, -67.8, 0, 1/4, 15);//8

        this.addArm(mobileTopLayer, -16.4, -78.4, 0, -1/4, 15);//10
        this.addArm(mobileTopLayer, -5.8, -78.4, 0, 1/4, 15);//9

//16.3+5.3+5

        this.addSphere(mobileTopLayer, -13, -24.48, 0, 5, 0x836FFF);
        this.addCube(mobileTopLayer, -49.48, -29.5, 0, 10, 0x836FFF);
        this.addOct(mobileTopLayer, -32.52, -29.3, 0, 5, 0x836FFF);
        this.addTorus(mobileTopLayer, 16.4, -27.6, 0, 5, 2, 0x836FFF);

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

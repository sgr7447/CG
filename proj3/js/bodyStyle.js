class BodyStyle extends THREE.Object3D{

    constructor(wheelRadius, platformHeight){

        super();

        material = new THREE.MeshBasicMaterial({ color: 0x575a63, wireframe: true});
        const bodyStyle = new THREE.Geometry();

        var bottomBodyStyleLength = 588.5;
        var bottomBodyStyleWidth = 202.7;
        var bodyStyleHeight = 190.5;

        var vertex0 = new THREE.Vector3(-bottomBodyStyleLength/2, platformHeight + wheelRadius +10, bottomBodyStyleWidth/2 -40);//0
        var vertex1 = new THREE.Vector3(-bottomBodyStyleLength/2 +50, platformHeight + wheelRadius, bottomBodyStyleWidth/2);//1
        var vertex2 = new THREE.Vector3(bottomBodyStyleLength/2 -50, platformHeight + wheelRadius, bottomBodyStyleWidth/2);//2
        var vertex3 = new THREE.Vector3(bottomBodyStyleLength/2, platformHeight + wheelRadius +30, bottomBodyStyleWidth/2);//3
        var vertex4 = new THREE.Vector3(bottomBodyStyleLength/2, platformHeight + wheelRadius +30, -bottomBodyStyleWidth/2);//4
        var vertex5 = new THREE.Vector3(bottomBodyStyleLength/2 -50, platformHeight + wheelRadius, -bottomBodyStyleWidth/2);//5
        var vertex6 = new THREE.Vector3(-bottomBodyStyleLength/2 +50, platformHeight + wheelRadius, -bottomBodyStyleWidth/2);//6
        var vertex7 = new THREE.Vector3(-bottomBodyStyleLength/2, platformHeight + wheelRadius +10, -bottomBodyStyleWidth/2 +40);//7
        var vertex8 = new THREE.Vector3(-bottomBodyStyleLength/2, platformHeight + wheelRadius *9/4, bottomBodyStyleWidth/2 -40);//8
        var vertex9 = new THREE.Vector3(-bottomBodyStyleLength/2, platformHeight + wheelRadius *9/4, bottomBodyStyleWidth/2 -40);//9
        var vertex10 = new THREE.Vector3(bottomBodyStyleLength/2 +10, platformHeight + wheelRadius *11/4, bottomBodyStyleWidth/2);//10
        var vertex11 = new THREE.Vector3(bottomBodyStyleLength/2 +10, platformHeight + wheelRadius *11/4, -bottomBodyStyleWidth/2);//11
        var vertex12 = new THREE.Vector3(-bottomBodyStyleLength/2, platformHeight + wheelRadius *9/4, -bottomBodyStyleWidth/2 +40);//12
        var vertex13 = new THREE.Vector3(-bottomBodyStyleLength/2, platformHeight + wheelRadius *9/4, -bottomBodyStyleWidth/2 +40);//13
        var vertex14 = new THREE.Vector3(-bottomBodyStyleWidth *1/6, platformHeight + bodyStyleHeight, -bottomBodyStyleWidth/2 +20);//14
        var vertex15 = new THREE.Vector3(-bottomBodyStyleWidth *1/6, platformHeight + bodyStyleHeight, bottomBodyStyleWidth/2 -20);//15

        var vec8_15 = new THREE.Vector3();
        vec8_15.subVectors(vertex15, vertex8);
        vec8_15.normalize();

        var vec13_14 = new THREE.Vector3();
        vec13_14.subVectors(vertex14, vertex13);
        vec13_14.normalize();

        var vec8_13 = new THREE.Vector3();
        vec8_13.subVectors(vertex13, vertex8);
        vec8_13.normalize();

        /*var vec13_8 = new THREE.Vector3();
        vec13_8.subVectors(vertex8, vertex13);
        vec13_8.normalize();*/

        vec8_15.setLength(50);
        vec13_14.setLength(50);
        vec8_13.setLength(30);

        vertex9.sub(vec8_13);
        vertex9.add(vec8_15);
        vertex12.add(vec8_13);
        vertex12.add(vec13_14);

        vertex1.x = vertex9.x;
        vertex1.z = vertex9.z;
        vertex6.x = vertex12.x;
        vertex6.z = vertex12.z;



        bodyStyle.vertices.push(
            vertex0,
            vertex1,
            vertex2,
            vertex3,
            vertex4,
            vertex5,
            vertex6,
            vertex7,
            vertex8,
            vertex9,
            vertex10,
            vertex11,
            vertex12,
            vertex13,
            vertex14,
            vertex15
        );

        bodyStyle.faces.push(new THREE.Face3(0, 1, 9));//lado direito
        bodyStyle.faces.push(new THREE.Face3(1, 2, 10));//lado direito
        bodyStyle.faces.push(new THREE.Face3(2, 3, 10));//lado direito
        bodyStyle.faces.push(new THREE.Face3(10, 9, 1));//lado direito
        bodyStyle.faces.push(new THREE.Face3(9, 8, 0));//lado direito
        bodyStyle.faces.push(new THREE.Face3(3, 4, 11));//trás
        bodyStyle.faces.push(new THREE.Face3(11, 10, 3));//trás
        bodyStyle.faces.push(new THREE.Face3(11, 4, 5));//lado esquerdo
        bodyStyle.faces.push(new THREE.Face3(5, 6, 11));//lado esquerdo
        bodyStyle.faces.push(new THREE.Face3(6, 12, 11));//lado esquerdo
        bodyStyle.faces.push(new THREE.Face3(6, 7, 12));//lado esquerdo
        bodyStyle.faces.push(new THREE.Face3(7, 13, 12));//lado esquerdo
        bodyStyle.faces.push(new THREE.Face3(0, 1, 9));//frente
        bodyStyle.faces.push(new THREE.Face3(0, 9, 8));//frente
        bodyStyle.faces.push(new THREE.Face3(7, 0, 8));//frente
        bodyStyle.faces.push(new THREE.Face3(7, 8, 13));//frente
        bodyStyle.faces.push(new THREE.Face3(7, 13, 12));//frente
        bodyStyle.faces.push(new THREE.Face3(6, 7, 12));//frente
        bodyStyle.faces.push(new THREE.Face3(12, 13, 14));//cima
        bodyStyle.faces.push(new THREE.Face3(13, 8, 14));//cima
        bodyStyle.faces.push(new THREE.Face3(8, 9, 15));//cima
        bodyStyle.faces.push(new THREE.Face3(15, 14, 8));//cima
        bodyStyle.faces.push(new THREE.Face3(10, 11, 15));//cima
        bodyStyle.faces.push(new THREE.Face3(11, 14, 15));//cima
        bodyStyle.faces.push(new THREE.Face3(9, 10, 15));//lado direito
        bodyStyle.faces.push(new THREE.Face3(12, 14, 11));//lado esquerdo

        bodyStyle.computeBoundingSphere();

        mesh = new THREE.Mesh(bodyStyle, material);
        mesh.position.set(0, 0, 0);
        this.add(mesh);

        this.bodyStyle = bodyStyle;

    }

    fixVertex(){

    }
    /*var quinze_oito = new THREE.Vector3();
    quinze_oito.subVectors(bodyStyle.bodyStyle.vertices[8], bodyStyle.bodyStyle.vertices[15]).normalize();

    var catorze_doze = new THREE.Vector3();
    catorze_doze.subVectors(bodyStyle.bodyStyle.vertices[12], bodyStyle.bodyStyle.vertices[14]).normalize();

    var catorzeF = new THREE.Vector3();
    oito_quinze.setLength(90);
    oito.add(oito_quinze);*/
}

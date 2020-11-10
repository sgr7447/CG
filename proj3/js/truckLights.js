class TruckLights extends THREE.Object3D{

    constructor(wheelRadius, platformHeight, bodyStyle){

        super();

        var color = 0xf0f5fc;
        var materials = [ new THREE.MeshBasicMaterial({color: color, wireframe: false}),
            new THREE.MeshLambertMaterial({color: color, wireframe: false, side:THREE.DoubleSide, shading: THREE.FlatShading, emissive: color}),
            new THREE.MeshPhongMaterial({color: color, wireframe: false, side:THREE.DoubleSide, shading: THREE.FlatShading})
            ]
        const frontLights = new THREE.Geometry();

        var bottomBodyStyleLength = 588.5;
        var bottomBodyStyleWidth = 202.7;
        var bodyStyleHeight = 190.5;

        var vertex8 = new THREE.Vector3();
        var vertex9 = new THREE.Vector3();
        var vertex10 = new THREE.Vector3();
        var vertex11 = new THREE.Vector3();
        var vertex12 = new THREE.Vector3();
        var vertex13 = new THREE.Vector3();
        var vertex16 = new THREE.Vector3();
        var vertex17 = new THREE.Vector3();
        var vertex18 = new THREE.Vector3();
        var vertex19 = new THREE.Vector3();
        var vertex20 = new THREE.Vector3();
        var vertex21 = new THREE.Vector3();
        var translation = new THREE.Vector3(0, -8, 0);
        var translation2 = new THREE.Vector3(0, -5, 0);
        var vec12_18 = new THREE.Vector3();
        var vec13_19 = new THREE.Vector3();
        var vec8_16 = new THREE.Vector3();
        var vec9_17 = new THREE.Vector3();
        var normalF = new THREE.Vector3();
        var normalL = new THREE.Vector3();
        var normalR = new THREE.Vector3();

        vertex8 = bodyStyle.bodyStyle.vertices[8].clone();
        vertex9 = bodyStyle.bodyStyle.vertices[9].clone();
        vertex10 = bodyStyle.bodyStyle.vertices[10].clone();
        vertex11 = bodyStyle.bodyStyle.vertices[11].clone();
        vertex12 = bodyStyle.bodyStyle.vertices[12].clone();
        vertex13 = bodyStyle.bodyStyle.vertices[13].clone();

        vertex16 = bodyStyle.bodyStyle.vertices[12].clone();
        vertex17 = bodyStyle.bodyStyle.vertices[13].clone();
        vertex18 = bodyStyle.bodyStyle.vertices[8].clone();
        vertex19 = bodyStyle.bodyStyle.vertices[9].clone();
        vertex20 = bodyStyle.bodyStyle.vertices[10].clone();
        vertex21 = bodyStyle.bodyStyle.vertices[11].clone();

        vertex16.add(translation);
        vertex17.add(translation2);
        vertex18.add(translation2);
        vertex19.add(translation);

        vec12_18.subVectors(vertex18, vertex12);
        vec13_19.subVectors(vertex19, vertex13);
        vec8_16.subVectors(vertex16, vertex8);
        vec9_17.subVectors(vertex17, vertex9);

        normalF.crossVectors(vec13_19, vec8_16).normalize();
        normalL.crossVectors(vec13_19, vec12_18).normalize();
        normalR.crossVectors(vec8_16, vec9_17).normalize();

        vertex8.add(normalF);
        vertex9.add(normalF);
        vertex12.sub(normalL);
        vertex13.add(normalF);
        vertex16.add(normalF);
        vertex17.add(normalR);
        vertex18.sub(normalL);
        vertex19.add(normalF);


        vertex20.add(translation);
        vertex21.add(translation);

        frontLights.vertices.push(
            vertex8, //0
            vertex9, //1
            vertex12, //2
            vertex13, //3
            vertex16, //4
            vertex17, //5
            vertex18, //6
            vertex19, //7
        );

        frontLights.faces.push(new THREE.Face3(0, 7, 1),//frente
                          new THREE.Face3(0, 6, 7),//frente
                          new THREE.Face3(0, 5, 6),//frente
                          new THREE.Face3(0, 3, 5),//frente
                          new THREE.Face3(2, 5, 3),//frente
                          new THREE.Face3(2, 4, 5),//frente
        );

        frontLights.computeBoundingSphere();

        mesh = new MeshHandler(frontLights, materials);
        mesh.position.set(0, 0, 0);
        this.add(mesh);


        const rearLights = new THREE.Geometry();

        color = 0xed0505;
        materials = [ new THREE.MeshBasicMaterial({color: color, wireframe: false}),
            new THREE.MeshLambertMaterial({color: color, wireframe: false, side:THREE.DoubleSide, shading: THREE.FlatShading, emissive: color}),
            new THREE.MeshPhongMaterial({color: color, wireframe: false, side:THREE.DoubleSide, shading: THREE.FlatShading})
            ]

        rearLights.vertices.push(
            vertex10, //8
            vertex11, //9
            vertex20, //10
            vertex21 //11
        );

        rearLights.faces.push(new THREE.Face3(0, 2, 1),//traseira
                          new THREE.Face3(1, 2, 3)//traseira
        );

        rearLights.computeBoundingSphere();

        mesh = new MeshHandler(rearLights, materials);
        mesh.position.set(0, 0, 0);
        this.add(mesh);
    }

}

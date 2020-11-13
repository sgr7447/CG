class CyberTruckLights extends THREE.Object3D{

    constructor(bodyStyle){

        super();

        var materials = [ new THREE.MeshBasicMaterial({color: color, wireframe: false}),
            new THREE.MeshLambertMaterial({color: color, wireframe: false, side:THREE.DoubleSide, flatShading: true}),
            new THREE.MeshPhongMaterial({color: color, wireframe: false, side:THREE.DoubleSide, flatShading: true})
            ]

        const lights = new THREE.Geometry();

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
        var translationF = new THREE.Vector3(0, -6, 0);
        var translationT = new THREE.Vector3(0, -6, 0);

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

        vertex16.add(translationF);
        vertex17.add(translationF);
        vertex18.add(translationF);
        vertex19.add(translationF);

        vertex20.add(translationT);
        vertex21.add(translationT);

        lights.vertices.push(
            vertex8, //0
            vertex9, //1
            vertex12, //2
            vertex13, //3
            vertex16, //4
            vertex17, //5
            vertex18, //6
            vertex19, //7
            vertex10, //8
            vertex11, //9
            vertex20, //10
            vertex21 //11
        );

        lights.faces.push(new THREE.Face3(0, 7, 1),//frente
                          new THREE.Face3(0, 6, 7),//frente
                          new THREE.Face3(0, 5, 6),//frente
                          new THREE.Face3(0, 3, 5),//frente
                          new THREE.Face3(2, 5, 3),//frente
                          new THREE.Face3(2, 4, 5),//frente
                          new THREE.Face3(8, 10, 9),//traseira
                          new THREE.Face3(9, 10, 11)//traseira
        );

        lights.computeBoundingSphere();

        mesh = new MeshHandler(lights, material);
        mesh.position.set(0, 0, 0);
        this.add(mesh);
    }
}

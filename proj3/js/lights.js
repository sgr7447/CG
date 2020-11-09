class Lights extends THREE.Object3D{

    constructor(wheelRadius, platformHeight, bodyStyle){

        super();

        material = new THREE.MeshBasicMaterial({ color: 0xd1dcff, wireframe: false});
        const lights = new THREE.Geometry();

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
        var translationF = new THREE.Vector3(0, -3, 0);
        var translationT = new THREE.Vector3(0, -6, 0);

        vertex8 = bodyStyle.bodyStyle.vertices[8].clone();
        vertex9 = bodyStyle.bodyStyle.vertices[9].clone();
        vertex10 = bodyStyle.bodyStyle.vertices[10].clone();
        vertex11 = bodyStyle.bodyStyle.vertices[11].clone();
        vertex12 = bodyStyle.bodyStyle.vertices[12].clone();
        vertex13 = bodyStyle.bodyStyle.vertices[13].clone();

        vertex16 = bodyStyle.bodyStyle.vertices[8].clone();
        vertex17 = bodyStyle.bodyStyle.vertices[9].clone();
        vertex18 = bodyStyle.bodyStyle.vertices[10].clone();
        vertex19 = bodyStyle.bodyStyle.vertices[11].clone();
        vertex20 = bodyStyle.bodyStyle.vertices[12].clone();
        vertex21 = bodyStyle.bodyStyle.vertices[13].clone();

        vertex16.add(translationF);
        vertex17.add(translationF);
        vertex18.add(translationF);
        vertex19.add(translationF);
        vertex20.add(translationT);
        vertex21.add(translationT);

        lights.vertices.push(
            vertex8,
            vertex9,
            vertex12,
            vertex13,
            vertex16,
            vertex17,
            vertex18,
            vertex19,
            vertex20,
            vertex21
        );

        lights.faces.push(new THREE.Face3(6, 3, 2),//frente
                          new THREE.Face3(6, 7, 3),//frente
                          new THREE.Face3(7, 4, 0),//frente
                          new THREE.Face3(7, 0, 3),//frente
                          new THREE.Face3(4, 5, 1),//frente
                          new THREE.Face3(1, 0, 4),//frente
                          new THREE.Face3(10, 11, 9),//traseira
                          new THREE.Face3(9, 8, 10)//traseira
        );

        lights.computeBoundingSphere();

        mesh = new THREE.Mesh(lights, material);
        mesh.position.set(0, 0, 0);
        this.add(mesh);
    }
}

class Windows extends THREE.Object3D{

    constructor(bodyStyle){

        super();

        var color = '#1d1e1f';
        var materials = [ new THREE.MeshBasicMaterial({color: color, wireframe: false}),
            new THREE.MeshLambertMaterial({color: color, wireframe: false, side:THREE.DoubleSide, shading: THREE.FlatShading, emissive: color}),
            new THREE.MeshPhongMaterial({color: color, wireframe: false, side:THREE.DoubleSide, shading: THREE.FlatShading})
            ]
        const windows = new THREE.Geometry();

        var bottomBodyStyleLength = 588.5;
        var bottomBodyStyleWidth = 202.7;
        var bodyStyleHeight = 190.5;


        // Calculos janela lateral 9 - 10 - 15
        //ponto 9
        var vec9_15 = new THREE.Vector3();
        vec9_15.subVectors(bodyStyle.bodyStyle.vertices[15], bodyStyle.bodyStyle.vertices[9]).normalize();

        var vec9_10 = new THREE.Vector3();
        vec9_10.subVectors (bodyStyle.bodyStyle.vertices[10], bodyStyle.bodyStyle.vertices[9]).normalize();

        var vec9 = new THREE.Vector3();
        vec9 = bodyStyle.bodyStyle.vertices[9].clone();
        vec9.add(vec9_15.setLength(25));
        vec9.add(vec9_10.setLength(25));

        //ponto 10
        var vec10_9 = new THREE.Vector3();
        vec10_9.subVectors (bodyStyle.bodyStyle.vertices[9], bodyStyle.bodyStyle.vertices[10]).normalize();

        var vec10_15 = new THREE.Vector3();
        vec10_15.subVectors (bodyStyle.bodyStyle.vertices[15], bodyStyle.bodyStyle.vertices[10]).normalize();

        var vec10 = new THREE.Vector3();
        vec10 = bodyStyle.bodyStyle.vertices[10].clone();
        vec10.add(vec10_9.setLength(150));
        vec10.add(vec10_15.setLength(40));


        //ponto 15
        var vec15_9 = new THREE.Vector3();
        vec15_9.subVectors (bodyStyle.bodyStyle.vertices[9], bodyStyle.bodyStyle.vertices[15]).normalize();

        var vec15_10 = new THREE.Vector3();
        vec15_10.subVectors (bodyStyle.bodyStyle.vertices[10], bodyStyle.bodyStyle.vertices[15]).normalize();

        var vec15L = new THREE.Vector3();
        vec15L = bodyStyle.bodyStyle.vertices[15].clone();
        vec15L.add(vec15_9.setLength(25));
        vec15L.add(vec15_10.setLength(25));
        var normalR = new THREE.Vector3();
        normalR.crossVectors(vec10_9, vec9_15).normalize();
        vec9.sub(normalR);
        vec10.sub(normalR);
        vec15L.sub(normalR);


        // Calculos janela lateral 11 - 12 - 14
        //ponto 11
        var vec11_12 = new THREE.Vector3();
        vec11_12.subVectors (bodyStyle.bodyStyle.vertices[12], bodyStyle.bodyStyle.vertices[11]).normalize();

        var vec11_14 = new THREE.Vector3();
        vec11_14.subVectors (bodyStyle.bodyStyle.vertices[14], bodyStyle.bodyStyle.vertices[11]).normalize();

        var vec11 = new THREE.Vector3();
        vec11 = bodyStyle.bodyStyle.vertices[11].clone();
        vec11.add(vec11_12.setLength(150));
        vec11.add(vec11_14.setLength(40));


        //ponto 12
        var vec12_11 = new THREE.Vector3();
        vec12_11.subVectors (bodyStyle.bodyStyle.vertices[11], bodyStyle.bodyStyle.vertices[12]).normalize();

        var vec12_14 = new THREE.Vector3();
        vec12_14.subVectors (bodyStyle.bodyStyle.vertices[14], bodyStyle.bodyStyle.vertices[12]).normalize();

        var vec12 = new THREE.Vector3();
        vec12 = bodyStyle.bodyStyle.vertices[12].clone();
        vec12.add(vec12_11.setLength(25));
        vec12.add(vec12_14.setLength(25));

        //ponto 14
        var vec14_11 = new THREE.Vector3();
        vec14_11.subVectors (bodyStyle.bodyStyle.vertices[11], bodyStyle.bodyStyle.vertices[14]).normalize();

        var vec14_12 = new THREE.Vector3();
        vec14_12.subVectors (bodyStyle.bodyStyle.vertices[12], bodyStyle.bodyStyle.vertices[14]).normalize();

        var vec14L = new THREE.Vector3();
        vec14L = bodyStyle.bodyStyle.vertices[14].clone();
        vec14L.add(vec14_11.setLength(25));
        vec14L.add(vec14_12.setLength(25));

        var normalL = new THREE.Vector3();
        normalL.crossVectors(vec12_11, vec14_11).normalize();
        vec11.add(normalL);
        vec12.add(normalL);
        vec14L.add(normalL);


        // Calculos janela frontal 9 - 12 - 14 - 15
        //ponto 9
        var vec9_12 = new THREE.Vector3();
        vec9_12.subVectors(bodyStyle.bodyStyle.vertices[12], bodyStyle.bodyStyle.vertices[9]).normalize();

        var vec9_15 = new THREE.Vector3();
        vec9_15.subVectors (bodyStyle.bodyStyle.vertices[15], bodyStyle.bodyStyle.vertices[9]).normalize();

        var vec9F = new THREE.Vector3();
        vec9F = bodyStyle.bodyStyle.vertices[9].clone();
        vec9F.add(vec9_15.setLength(50));


        //ponto 12
        var vec12_9 = new THREE.Vector3();
        vec12_9.subVectors(bodyStyle.bodyStyle.vertices[9], bodyStyle.bodyStyle.vertices[12]).normalize();

        var vec12_14 = new THREE.Vector3();
        vec12_14.subVectors(bodyStyle.bodyStyle.vertices[14], bodyStyle.bodyStyle.vertices[12]).normalize();

        var vec12F = new THREE.Vector3();
        vec12F = bodyStyle.bodyStyle.vertices[12].clone();
        vec12F.add(vec12_14.setLength(50));



        //ponto 14
        var vec14_12 = new THREE.Vector3();
        vec14_12.subVectors(bodyStyle.bodyStyle.vertices[12], bodyStyle.bodyStyle.vertices[14]).normalize();

        var vec14_15 = new THREE.Vector3();
        vec14_15.subVectors(bodyStyle.bodyStyle.vertices[15], bodyStyle.bodyStyle.vertices[14]).normalize();

        var vec14F = new THREE.Vector3();
        vec14F = bodyStyle.bodyStyle.vertices[14].clone();



        //ponto 15
        var vec15_9 = new THREE.Vector3();
        vec15_9.subVectors(bodyStyle.bodyStyle.vertices[9], bodyStyle.bodyStyle.vertices[15]).normalize();

        var vec15_14 = new THREE.Vector3();
        vec15_14.subVectors(bodyStyle.bodyStyle.vertices[14], bodyStyle.bodyStyle.vertices[15]).normalize();

        var vec15F = new THREE.Vector3();
        vec15F = bodyStyle.bodyStyle.vertices[15].clone();

        var normalF = new THREE.Vector3();
        normalF.crossVectors(vec14_12, vec15_9).normalize();
        vec9F.add(normalF);
        vec12F.add(normalF);
        vec14F.add(normalF);
        vec15F.add(normalF);

        windows.vertices.push(
                    vec9,
                    vec10,
                    vec15L,

                    vec11,
                    vec12,
                    vec14L,

                    vec9F,
                    vec12F,
                    vec14F,
                    vec15F
        );

        windows.faces.push(
            new THREE.Face3(0, 1, 2),
            new THREE.Face3(3, 4, 5),
            new THREE.Face3(6, 8, 7),
            new THREE.Face3(6, 9, 8)
        );

        windows.computeBoundingSphere();

        mesh = new MeshHandler(windows, materials);
        mesh.position.set(0, 0, 0);
        this.add(mesh);
    }
}

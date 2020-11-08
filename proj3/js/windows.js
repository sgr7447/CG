class Windows extends THREE.Object3D{

    constructor(wheelRadius, platformHeight, bodyStyle){

        super();

        material = new THREE.MeshBasicMaterial({ color: '#34558B', wireframe: false});
        const windows = new THREE.Geometry();

        var bottomBodyStyleLength = 588.5;
        var bottomBodyStyleWidth = 202.7;
        var bodyStyleHeight = 190.5;


        // Calculos janela lateral 9 - 10 - 15
        //ponto 9
        var nove_quinze = new THREE.Vector3();
        nove_quinze.subVectors (bodyStyle.bodyStyle.vertices[15], bodyStyle.bodyStyle.vertices[9]);

        var nove_dez = new THREE.Vector3();
        nove_dez.subVectors (bodyStyle.bodyStyle.vertices[10], bodyStyle.bodyStyle.vertices[9]);

        var nove = new THREE.Vector3();

        //ponto 10
        var dez_nove = new THREE.Vector3();
        dez_nove.subVectors (bodyStyle.bodyStyle.vertices[9], bodyStyle.bodyStyle.vertices[10]);

        var dez_quinze = new THREE.Vector3();
        dez_quinze.subVectors (bodyStyle.bodyStyle.vertices[15], bodyStyle.bodyStyle.vertices[10]);

        var dez = new THREE.Vector3();

        //ponto 15
        var quinze_nove = new THREE.Vector3();
        quinze_nove.subVectors (bodyStyle.bodyStyle.vertices[9], bodyStyle.bodyStyle.vertices[15]);

        var quinze_dez = new THREE.Vector3();
        quinze_dez.subVectors (bodyStyle.bodyStyle.vertices[10], bodyStyle.bodyStyle.vertices[15]);

        var quinzeL = new THREE.Vector3();

        // Calculos janela lateral 11 - 12 - 14
        //ponto 11
        var onze_doze = new THREE.Vector3();
        onze_doze.subVectors (bodyStyle.bodyStyle.vertices[12], bodyStyle.bodyStyle.vertices[11]);

        var onze_catorze = new THREE.Vector3();
        onze_catorze.subVectors (bodyStyle.bodyStyle.vertices[14], bodyStyle.bodyStyle.vertices[11]);

        var onze = new THREE.Vector3();

        //ponto 12
        var doze_onze = new THREE.Vector3();
        doze_onze.subVectors (bodyStyle.bodyStyle.vertices[11], bodyStyle.bodyStyle.vertices[12]);

        var doze_catorze = new THREE.Vector3();
        doze_catorze.subVectors (bodyStyle.bodyStyle.vertices[14], bodyStyle.bodyStyle.vertices[12]);

        var doze = new THREE.Vector3();

        //ponto 14
        var catorze_onze = new THREE.Vector3();
        catorze_onze.subVectors (bodyStyle.bodyStyle.vertices[11], bodyStyle.bodyStyle.vertices[14]);

        var catorze_doze = new THREE.Vector3();
        catorze_doze.subVectors (bodyStyle.bodyStyle.vertices[12], bodyStyle.bodyStyle.vertices[14]);

        var catorzeL = new THREE.Vector3();

        // Calculos janela frontal 8 - 13 - 14 - 15
        //ponto 8
        var oito_treze = new THREE.Vector3();
        oito_treze.subVectors(bodyStyle.bodyStyle.vertices[13], bodyStyle.bodyStyle.vertices[8]);

        var oito_quinze = new THREE.Vector3();
        oito_quinze.subVectors (bodyStyle.bodyStyle.vertices[15], bodyStyle.bodyStyle.vertices[8]);

        var oito = new THREE.Vector3();

        //ponto 13
        var treze_oito = new THREE.Vector3();
        treze_oito.subVectors(bodyStyle.bodyStyle.vertices[8], bodyStyle.bodyStyle.vertices[13]);

        var treze_catorze = new THREE.Vector3();
        treze_catorze.subVectors(bodyStyle.bodyStyle.vertices[14], bodyStyle.bodyStyle.vertices[13]);

        var treze = new THREE.Vector3();

        //ponto 14
        var catorze_treze = new THREE.Vector3();
        catorze_treze.subVectors(bodyStyle.bodyStyle.vertices[13], bodyStyle.bodyStyle.vertices[14]);

        var catorze_quinze = new THREE.Vector3();
        catorze_quinze.subVectors(bodyStyle.bodyStyle.vertices[15], bodyStyle.bodyStyle.vertices[14]);

        var catorzeF = new THREE.Vector3();

        //ponto 15
        var quinze_oito = new THREE.Vector3();
        quinze_oito.subVectors(bodyStyle.bodyStyle.vertices[8], bodyStyle.bodyStyle.vertices[15]);

        var quinze_catorze = new THREE.Vector3();
        quinze_catorze.subVectors(bodyStyle.bodyStyle.vertices[14], bodyStyle.bodyStyle.vertices[15]);

        var quinzeF = new THREE.Vector3();



        nove.setLength(50);
        dez.setLength(150);
        quinzeL.setLength(15);

        onze.setLength(150);
        doze.setLength(50);
        catorzeL.setLength(15);

        oito.setLength(15);
        oito_treze.normalize();
        oito_treze.setLength(30);
        oito.add(oito_treze);

        treze.setLength(15);
        catorzeF.setLength(15);
        quinzeF.setLength(15);


        windows.vertices.push(
            nove.add(bodyStyle.bodyStyle.vertices[9]),
            dez.add(bodyStyle.bodyStyle.vertices[10]),
            quinzeL.add(bodyStyle.bodyStyle.vertices[15]),

            onze.add(bodyStyle.bodyStyle.vertices[11]),
            doze.add(bodyStyle.bodyStyle.vertices[12]),
            catorzeL.add(bodyStyle.bodyStyle.vertices[14]),

            oito.add(bodyStyle.bodyStyle.vertices[8]),
            treze.add(bodyStyle.bodyStyle.vertices[13]),
            catorzeF.add(bodyStyle.bodyStyle.vertices[14]),
            quinzeF.add(bodyStyle.bodyStyle.vertices[15])

        );

        windows.faces.push(
            new THREE.Face3(0, 1, 2),
            new THREE.Face3(3, 4, 5),
            new THREE.Face3(6, 8, 7),
            new THREE.Face3(6, 9, 8)
        );

        windows.computeBoundingSphere();

        mesh = new THREE.Mesh(windows, material);
        mesh.position.set(0, 0, 0);
        this.add(mesh);
    }
}

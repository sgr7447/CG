class Lights extends THREE.Object3D{

    constructor(wheelRadius, platformHeight, body){

        super();

        material = new THREE.MeshBasicMaterial({ color: 0xd1dcff, wireframe: false});
        const lights = new THREE.Geometry();

        var bottomBodyStyleLength = 588.5;
        var bottomBodyStyleWidth = 202.7;
        var bodyStyleHeight = 190.5;

        var vertex0 = new THREE.Vector3();
        var vertex1 = new THREE.Vector3();
        var vertex2 = new THREE.Vector3();
        var vertex3 = new THREE.Vector3();
        var vertex4 = new THREE.Vector3();
        var vertex5 = new THREE.Vector3();
        var vertex6 = new THREE.Vector3();
        var vertex7 = new THREE.Vector3();

        vertex0 =          

        lights.vertices.push(
            new THREE.Vector3(-bottomBodyStyleLength/2 -0.1, platformHeight + wheelRadius *9/4, bottomBodyStyleWidth/2 -40),//8 cima 0
            new THREE.Vector3(-bottomBodyStyleLength/2 +50 -0.1, platformHeight + wheelRadius *9/4, bottomBodyStyleWidth/2),//9 1
            new THREE.Vector3(-bottomBodyStyleLength/2 +50 -0.1, platformHeight + wheelRadius *9/4, -bottomBodyStyleWidth/2),//12 2
            new THREE.Vector3(-bottomBodyStyleLength/2 -0.1, platformHeight + wheelRadius *9/4, -bottomBodyStyleWidth/2 +40),//13 3

            new THREE.Vector3(-bottomBodyStyleLength/2 -0.1, platformHeight + wheelRadius *9/4 -3, bottomBodyStyleWidth/2 -40),//16 baixo 4
            new THREE.Vector3(-bottomBodyStyleLength/2 +50 -0.1, platformHeight + wheelRadius *9/4 -3, bottomBodyStyleWidth/2),//17 5
            new THREE.Vector3(-bottomBodyStyleLength/2 +50 -0.1, platformHeight + wheelRadius *9/4 -3, -bottomBodyStyleWidth/2),//18 6
            new THREE.Vector3(-bottomBodyStyleLength/2 -0.1, platformHeight + wheelRadius *9/4 -3, -bottomBodyStyleWidth/2 +40),//19 7

            new THREE.Vector3( bottomBodyStyleLength/2 +10, platformHeight + wheelRadius *11/4, bottomBodyStyleWidth/2),//8
            new THREE.Vector3( bottomBodyStyleLength/2 +10, platformHeight + wheelRadius *11/4, -bottomBodyStyleWidth/2),//9
            new THREE.Vector3( bottomBodyStyleLength/2 +10, platformHeight + wheelRadius *11/4 -6, bottomBodyStyleWidth/2),//10
            new THREE.Vector3( bottomBodyStyleLength/2 +10, platformHeight + wheelRadius *11/4 -6, -bottomBodyStyleWidth/2)//11
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

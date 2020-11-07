class BodyStyle extends THREE.Object3D{

    constructor(){

        super();

        material = new THREE.MeshBasicMaterial({ color: 0xfffff, wireframe: false});
        const bodyStyle = new THREE.Geometry();

        var platformHeight = 60;
        var wheelRadius = 88.9;

        var bottomBodyStyleLength = 588.5;
        var bottomBodyStyleWidth = 202.7;
        var bodyStyleHeight = 190.5;

        bodyStyle.vertices.push(
        	new THREE.Vector3( -bottomBodyStyleLength/2, platformHeight + wheelRadius, -bottomBodyStyleWidth/2),
        	new THREE.Vector3( bottomBodyStyleLength/2, platformHeight + wheelRadius, -bottomBodyStyleWidth/2),
        	new THREE.Vector3( bottomBodyStyleLength/2, platformHeight + wheelRadius + bodyStyleHeight/2, -bottomBodyStyleWidth/2),
            new THREE.Vector3( -bottomBodyStyleLength/2, platformHeight + wheelRadius + bodyStyleHeight/2, -bottomBodyStyleWidth/2),
            new THREE.Vector3( -bottomBodyStyleLength/2, platformHeight + wheelRadius, bottomBodyStyleWidth/2),
        	new THREE.Vector3( bottomBodyStyleLength/2, platformHeight + wheelRadius, bottomBodyStyleWidth/2),
        	new THREE.Vector3( bottomBodyStyleLength/2, platformHeight + wheelRadius + bodyStyleHeight/2, bottomBodyStyleWidth/2),
            new THREE.Vector3( -bottomBodyStyleLength/2, platformHeight + wheelRadius + bodyStyleHeight/2, bottomBodyStyleWidth/2)
        );

        bodyStyle.faces.push(new THREE.Face3( 1, 0, 3));//lado direito
        bodyStyle.faces.push(new THREE.Face3( 1, 3, 2));
        bodyStyle.faces.push(new THREE.Face3( 4, 5, 6));//lado esquerdo
        bodyStyle.faces.push(new THREE.Face3( 4, 6, 7));
        bodyStyle.faces.push(new THREE.Face3( 5, 1, 2));//trás
        bodyStyle.faces.push(new THREE.Face3( 5, 2, 6));//trás

        bodyStyle.computeBoundingSphere();

        mesh = new THREE.Mesh(bodyStyle, material);
        mesh.position.set(0, 0, 0);
        this.add(mesh);

        bodyStyle.scale(0.2, 0.2, 0.2);

        //scene.add(this);



    }
}

class BodyStyle extends THREE.Object3D{

    constructor(){

        super();

        material = new THREE.MeshBasicMaterial({ color: 0xfffff, wireframe: false});
        var bodyStyle = new THREE.Geometry();

        var platformHeight = 60;

        var bottomBodyStyleLength = 588.5;
        var bottomBodyStyleWidth = 202.7;
        var bodyStyleHeight = 190.5;

        bodyStyle.vertices.push(
        	new THREE.Vector3( -bottomBodyStyleLength/2, platformHeight + 190.5/2 , -bottomBodyStyleWidth/2),
        	new THREE.Vector3( bottomBodyStyleLength/2, platformHeight + 190.5/2 , -bottomBodyStyleWidth/2),
        	new THREE.Vector3( bottomBodyStyleLength/2, platformHeight + 190.5*3/2 , -bottomBodyStyleWidth/2),
            new THREE.Vector3( -bottomBodyStyleLength/2, platformHeight + 190.5*3/2 , -bottomBodyStyleWidth/2),
            new THREE.Vector3( -bottomBodyStyleLength/2, platformHeight + 190.5/2 , bottomBodyStyleWidth/2),
        	new THREE.Vector3( bottomBodyStyleLength/2, platformHeight + 190.5/2 , bottomBodyStyleWidth/2),
        	new THREE.Vector3( bottomBodyStyleLength/2, platformHeight + 190.5*3/2 , bottomBodyStyleWidth/2),
            new THREE.Vector3( -bottomBodyStyleLength/2, platformHeight + 190.5*3/2 , bottomBodyStyleWidth/2),
        );

        bodyStyle.faces.push(new THREE.Face3( 0, 1, 2));
        bodyStyle.faces.push(new THREE.Face3( 0, 2, 3));

        bodyStyle.computeBoundingSphere();

        mesh = new THREE.Mesh(bodyStyle, material);
        mesh.position.set(0, 0, 0);

        this.add(mesh);

        scene.add(bodyStyle);



    }
}

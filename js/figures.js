
function addFigure(obj, x, y, z, rad, geometry, material){

    mesh = new THREE.Mesh(geometry, material);
    mesh.rotation.set(0, 0, Math.PI*rad);
    mesh.position.set(x, y, z);
    obj.add(mesh);

}

// TYPES OF FIGURES

function addArm(obj, x, y, z, rad, len){

    material = new THREE.MeshBasicMaterial({ color: 0x00FA9A, wireframe: true });
    geometry = new THREE.CylinderGeometry(0.2, 0.2, len);
    addFigure(obj, x, y, z, rad, geometry, material);

}

function addOct(obj, x, y, z, len, color, detail){

    material = new THREE.MeshBasicMaterial({ color: color, wireframe: true });
    geometry = new THREE.OctahedronGeometry(len, detail);
    addFigure(obj, x, y, z, 0, geometry, material);

}

function addCube(obj, x, y, z, len, color){

    material = new THREE.MeshBasicMaterial({ color: color, wireframe: true });
    geometry = new THREE.BoxGeometry(len, len, len );
    addFigure(obj, x, y, z, 0, geometry, material);

}

function addCylinder(obj, x, y, z, len, radius, color){

    material = new THREE.MeshBasicMaterial({ color: color, wireframe: true });
    geometry = new THREE.CylinderGeometry( radius, radius, len, 5);
    addFigure(obj, x, y, z, 0, geometry, material);
}

function addSphere(obj, x, y, z, radius, color){

    material = new THREE.MeshBasicMaterial({ color: color, wireframe: true });
    geometry = new THREE.SphereGeometry(radius, 15, 15);
    addFigure(obj, x, y, z, 0, geometry, material);

}

function addTorus(obj, x, y, z, r1, r2, color){

    material = new THREE.MeshBasicMaterial({ color: color, wireframe: true });
    geometry = new THREE.TorusGeometry( r1, r2);
    addFigure(obj, x, y, z, 0, geometry, material);

}

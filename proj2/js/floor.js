class Floor extends THREE.Object3D{

    constructor(floor, x, y){ //x e y tamanhos do campo

        super();

        var floor = new THREE.Shape();
        var tableFloor = new THREE.Shape();
        var tableFloor1 = new THREE.Shape();
        var tableFloor2 = new THREE.Shape();
        var tableFloor3 = new THREE.Shape();
        var tableFloor4 = new THREE.Shape();

        var radius = 7;

        tableFloor1.moveTo(-x/2, y/2);
        tableFloor1.lineTo(-x/2 +2 +radius, y/2);
        tableFloor1.lineTo(-x/2 +2 +radius, y/2 -2);
        tableFloor1.absarc(-x/2 +2 +radius, y/2 -2 -radius, radius, Math.PI/2, -Math.PI/2);
        tableFloor1.lineTo(-x/2 +2 +radius, -y/2 +2 +2*radius); //<--
        tableFloor1.absarc(-x/2 +2 +radius, -y/2 +2 +radius, radius, Math.PI/2, -Math.PI/2);
        tableFloor1.lineTo(-x/2 +2 +radius, -y/2);
        tableFloor1.lineTo(-x/2, -y/2);
        tableFloor1.lineTo(-x/2, y/2);

        tableFloor2.moveTo(-x/2 +2 +radius, y/2);
        tableFloor2.lineTo(0, y/2);
        //tableFloor2.lineTo(0, y/2 -2);
        tableFloor2.absarc(0, y/2 -2 -radius, radius, Math.PI/2, -Math.PI/2);
        tableFloor2.lineTo(0, -y/2 +2 +2*radius);
        tableFloor2.absarc(0, -y/2 +2 +radius, radius, Math.PI/2, -Math.PI/2);
        tableFloor2.lineTo(0, -y/2);
        tableFloor2.lineTo(-x/2 +2 +radius, -y/2);
        tableFloor2.lineTo(-x/2 +2 +radius, -y/2 +2);
        tableFloor2.absarc(-x/2 +2 +radius, -y/2 +2 +radius, radius, -Math.PI/2, Math.PI/2);
        tableFloor2.lineTo(-x/2 +2 +radius, y/2 -2 -2*radius);
        tableFloor2.absarc(-x/2 +2 +radius, y/2 -2 -radius, radius, -Math.PI/2, Math.PI/2);
        tableFloor2.lineTo(-x/2 +2 +radius, y/2);

        tableFloor3.moveTo(0, y/2);
        tableFloor3.lineTo(x/2 -2 -radius, y/2);
        tableFloor3.lineTo(x/2 -2 -radius, y/2 -2);
        tableFloor3.absarc(x/2 -2 -radius, y/2 -2 -radius, radius, Math.PI/2, -Math.PI/2);
        tableFloor3.lineTo(x/2 -2 -radius, -y/2 +2 +2*radius);
        tableFloor3.absarc(x/2 -2 -radius, -y/2 +2 +radius, radius, Math.PI/2, -Math.PI/2);
        tableFloor3.lineTo(x/2 -2 -radius, -y/2);
        tableFloor3.lineTo(0, -y/2);
        tableFloor3.lineTo(0, -y/2 +2);
        tableFloor3.absarc(0, -y/2 +2 +radius, radius, -Math.PI/2, Math.PI/2);
        tableFloor3.lineTo(0, y/2 -2 -2*radius);
        tableFloor3.lineTo(0, y/2 -2 -radius, radius, -Math.PI/2, Math.PI/2);
        tableFloor3.lineTo(0, y/2);

        tableFloor4.moveTo(x/2 -2 -radius, y/2);
        tableFloor4.lineTo(x/2, y/2);
        tableFloor4.lineTo(x/2, -y/2);
        tableFloor4.lineTo(x/2 -2 -radius, -y/2);
        tableFloor4.lineTo(x/2 -2 -radius, -y/2 +2);
        tableFloor4.absarc(x/2 -2 -radius, -y/2 +2 +radius, radius, -Math.PI/2, Math.PI/2);
        tableFloor4.lineTo(x/2 -2 -radius, y/2 -2 -2*radius);
        tableFloor4.absarc(x/2 -2 -radius, y/2 -2 -radius, radius, -Math.PI/2, Math.PI/2);
        tableFloor4.lineTo(x/2 -2 -radius, y/2);



        var extrudeSettings = {
            curveSegments: 12,
        	steps: 2,
        	depth: 0.1,
        	bevelEnabled: false
        };

        var geometry = new THREE.ExtrudeGeometry(tableFloor1, extrudeSettings);
        var material = new THREE.MeshBasicMaterial({color: 0x004731});
        var mesh = new THREE.Mesh(geometry, material);
        mesh.rotation.set(-Math.PI*1/2, 0, 0);
        this.add(mesh);
        floor.add(this);

        var geometry = new THREE.ExtrudeGeometry(tableFloor2, extrudeSettings);
        var material = new THREE.MeshBasicMaterial({color: 0x004731});
        var mesh = new THREE.Mesh(geometry, material);
        mesh.rotation.set(-Math.PI*1/2, 0, 0);
        this.add(mesh);
        floor.add(this);

        var geometry = new THREE.ExtrudeGeometry(tableFloor3, extrudeSettings);
        var material = new THREE.MeshBasicMaterial({color: 0x004731});
        var mesh = new THREE.Mesh(geometry, material);
        mesh.rotation.set(-Math.PI*1/2, 0, 0);
        this.add(mesh);
        floor.add(this);

        var geometry = new THREE.ExtrudeGeometry(tableFloor4, extrudeSettings);
        var material = new THREE.MeshBasicMaterial({color: 0x004731});
        var mesh = new THREE.Mesh(geometry, material);
        mesh.rotation.set(-Math.PI*1/2, 0, 0);
        this.add(mesh);
        floor.add(this);

    }
}

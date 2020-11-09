class Spotlight extends THREE.Object3D{
    constructor(radius, height, x, y, z){
        super();
        this.lamp = this.createLamp(radius, height);
        this.scale.multiplyScalar(0.3);

        this.add(this.lamp)

    }

    createLamp(x, y, radius, height){

      var lamp = new THREE.Object3D();

      /*var material = new THREE.MeshBasicMaterial({ color: '#6C7A86', wireframe: false});
      var geometry = new THREE.SphereGeometry(radius, 30, 30);
      this.material = material;

      mesh = new THREE.Mesh(geometry, material);
      mesh.position.set(0,0,0);

      lamp.add(mesh);*/

      var material = new THREE.MeshBasicMaterial({ color: '#C0C0C0', wireframe: false});
      var geometry = new THREE.ConeGeometry(radius, height, 32);
      this.material = material;

      mesh = new THREE.Mesh(geometry, material);
      mesh.rotation.x += Math.PI/2;
      //mesh.rotation.y += Math.PI/2;
      mesh.position.set(0, 60, 0);
      //mesh.lookAt(new THREE.Vector3(0,0,0));

      lamp.add(mesh);

      return lamp;
    }

    /*setLamp(x, y, z){
        this.lamp.position.set(x, y, z);
        //this.lookAt(new THREE.Vector3(0,0,0));
    }*/
}

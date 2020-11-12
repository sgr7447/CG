class OrthographicCamera extends THREE.OrthographicCamera{

    constructor(){

        var aspect = window.innerWidth / window.innerHeight;
        var width = window.innerWidth / aspect;
        var height = window.innerHeight / aspect;

        //delimita os campos da camara
        super(-width/2, width/2, height/2, -height/2);
        this.aspect = aspect;
        this.zoom = 0.3;
        this.view_from_platform();
        this.onResize();

    }

    view_from_platform(){

        this.onResize();
        this.position.set(0, 120, 920);
        this.lookAt(scene.position);

    }

    onResize() {
        var target = new THREE.Vector2();
        var size = renderer.getSize(target);
        this.aspect = size.width / size.height;
        this.updateProjectionMatrix();
    }

}

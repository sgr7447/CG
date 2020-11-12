class PerspectiveCamera extends THREE.PerspectiveCamera{

    constructor(){

        var aspect = window.innerWidth / window.innerHeight;
        var width = window.innerWidth / aspect;
        var height = window.innerHeight / aspect;

        //delimita os campos da camara
        super(60, aspect, 0.5, 5000);
        this.aspect = aspect;
        this.view_scene();
        this.onResize();
    }

    view_scene(){
        this.onResize();
        this.position.set(-180, 100, 200);
        this.lookAt(scene.position);
    }

    onResize() {
        var target = new THREE.Vector2();
        this.aspect = renderer.getSize(target).width / renderer.getSize(target).height;
        this.updateProjectionMatrix();

    }
}

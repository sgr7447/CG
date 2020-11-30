class PerspectiveCamera extends THREE.PerspectiveCamera{

    constructor(){

        var aspect = window.innerWidth / window.innerHeight;

        //delimita os campos da camara
        super(60, aspect, 0.5, 5000);
        this.aspect = aspect;
        this.view_scene();
        this.onResize();
    }

    view_scene(){
        this.onResize();
        this.position.set(550, 350, 550);
        this.lookAt(scene.position);
    }

    onResize() {
        this.aspect = window.innerWidth / window.innerHeight;
        this.updateProjectionMatrix();
        renderer.setSize(window.innerWidth, window.innerHeight);

    }
}

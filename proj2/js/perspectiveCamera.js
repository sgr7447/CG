class PerspectiveCamera extends THREE.PerspectiveCamera{

    constructor(){

        var aspect = window.innerWidth / window.innerHeight;
        var width = window.innerWidth / aspect;
        var height = window.innerHeight / aspect;

        //delimita os campos da camara
        super(60, aspect, 0.5, 5000);
        this.aspect = aspect;
        this.view1();
        this.onResize();
    }

    view1(){
        this.onResize();
        this.position.set(60, 60, 60);
        this.lookAt(scene.position);
    }

    onResize() {
        renderer.setSize(window.innerWidth, window.innerHeight);
        this.updateProjectionMatrix();

    }
}

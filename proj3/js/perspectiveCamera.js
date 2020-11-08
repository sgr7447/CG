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
        this.position.set(120, 100, 150);
        this.lookAt(scene.position);
    }

    spinPositive(){}
    spinNegative(){}
    stopSpinPositive(){}
    stopSpinNegative(){}
    update(delta){}

    onResize() {
        renderer.setSize(window.innerWidth, window.innerHeight);
        this.updateProjectionMatrix();

    }
}

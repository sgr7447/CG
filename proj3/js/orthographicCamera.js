class OrthographicCamera extends THREE.OrthographicCamera{

    constructor(){

        var aspect = window.innerWidth / window.innerHeight;
        var width = window.innerWidth / aspect;
        var height = window.innerHeight / aspect;

        //delimita os campos da camara
        super(-width/2, width/2, height/2, -height/2);
        this.aspect = aspect;
        this.view_from_platform();
        this.zoom = 1.2;
        this.onResize();

        //SPINS
        this.spinPos = false;
        this.spinNeg = false;
    }

    view_from_platform(){

        this.onResize();
        this.position.set(0, 30, 620);
        this.lookAt(scene.position);

    }

    // SPINS
    spinPositive(){
        this.spinPos = true;
    }
    spinNegative(){
        this.spinNeg = true;
    }
    stopSpinPositive(){
        this.spinPos = false;
    }
    stopSpinNegative(){
        this.spinNeg = false;
    }


    //fazer a camara rodar juntamente com a plataforma
    update(delta){

        var speed = 0.5;

        var direction = 0;
        if ( this.spinNeg && !this.spinPos) direction = -1;
        else if ( this.spinPos && !this.spinNeg ) direction = 1;

        this.rotateY( direction * delta * speed);
    }

    onResize() {

        renderer.setSize(window.innerWidth, window.innerHeight);

        if (window.innerHeight > 0 && window.innerWidth > 0) {

            var width = window.innerWidth / this.aspect;
            var height = window.innerHeight / this.aspect;

            this.left = -width/2;
            this.right = width/2;
            this.top = height/2;
            this.bottom = -height/2;

            this.updateProjectionMatrix();
        }
    }

}

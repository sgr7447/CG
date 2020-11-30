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
        this.position.set(0, 50, 920);
        this.lookAt(pauseScene.position);

    }

    onResize(){

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

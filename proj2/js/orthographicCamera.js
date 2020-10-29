class OrthographicCamera extends THREE.OrthographicCamera{

    constructor(){

        var aspect = window.innerWidth / window.innerHeight;
        var width = window.innerWidth / aspect;
        var height = window.innerHeight / aspect;

        //delimita os campos da camara
        super(-width/2, width/2, height/2, -height/2);
        this.aspect = aspect;
        this.view1();
        this.zoom = 1.2;
        this.onResize();
    }

    /* TOP */
    view1(){

        this.onResize();
        this.position.set(0, window.innerHeight, 0);
        this.lookAt(scene.position);

    }
    /* FRONT */
    view2(){

        this.onResize();
        this.position.set(0, 0, window.innerHeight);
        this.lookAt(scene.position);

    }

    /* SIDE */
    view3(){

        this.onResize();
        this.position.set(window.innerHeight, 0, 0);
        this.lookAt(scene.position);
    }

    update(){}

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

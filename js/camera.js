class Camera extends THREE.OrthographicCamera{

    constructor(){

        var aspectRatio = (window.innerWidth/ window.innerHeight * 7);
        var width = window.innerWidth / aspectRatio;
        var height = window.innerHeight / aspectRatio;
        super(-width, width, height, -height, 1, 2000 );
        this.view1();
        this.onResize();
    }

    /* FRONT */
    view1(){

        this.num = 1;
        this.onResize();
        this.position.set(0, 0, 500);
        this.lookAt(scene.position);

    }

    /* TOP */
    view2(){

        this.num = 2;
        this.onResize();
        this.position.set(0, window.innerHeight/2, 0);
        this.lookAt(scene.position);
    }

    /* SIDE */
    view3(){

        this.num = 3;
        this.onResize();
        this.position.set( window.innerHeight/2, 0, 0);
        this.lookAt(scene.position);
    }

    onResize() {
    
        renderer.setSize(window.innerWidth, window.innerHeight);
    
        if (window.innerHeight > 0 && window.innerWidth > 0) {
            this.aspect = window.innerWidth / window.innerHeight;
            this.updateProjectionMatrix();
        }
    
    }


}
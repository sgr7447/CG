class Camera extends THREE.OrthographicCamera{

    constructor(){

        var aspect = window.innerWidth / window.innerHeight;
        var aspectRatio = (aspect * 3);
        var width = window.innerWidth / aspectRatio;
        var height = window.innerHeight / aspectRatio;
        super(-width/2, width/2, height/2, -height/2, 1, 1000);
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
        this.position.set(window.innerHeight/2, 0, 0);
        this.lookAt(scene.position);
    }

    onResize() {

        renderer.setSize(window.innerWidth, window.innerHeight);

        if (window.innerHeight > 0 && window.innerWidth > 0) {

            this.aspect = window.innerWidth / window.innerHeight;
            var aspectRatio = (this.aspect * 3);
            var width = window.innerWidth / aspectRatio;
            var height = window.innerHeight / aspectRatio;

            this.left = -width/2;
            this.right = width/2
            this.top = height/2;
            this.bottom = -height/2;
            this.updateProjectionMatrix();
        }

    }


}
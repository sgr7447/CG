class Camera extends THREE.OrthographicCamera{

    constructor(){

        var aspect = window.innerHeight / window.innerWidth;
        var aspectRatio = (aspect * 13);
        var width = window.innerWidth / aspectRatio;
        var height = window.innerHeight / aspectRatio;
        super(-width/2, width/2, height/2, -height/2);
        this.view1();
        this.onResize();
    }

    /* FRONT */
    view1(){

        this.num = 1;
        this.onResize();
        this.position.set(0, 0, window.innerHeight);
        this.lookAt(scene.position);

    }

    /* TOP */
    view2(){

        this.num = 2;
        this.onResize();
        this.position.set(0, window.innerHeight, 0);
        this.lookAt(scene.position);
    }

    /* SIDE */
    view3(){

        this.num = 3;
        this.onResize();
        this.position.set(window.innerHeight, 0, 0);
        this.lookAt(scene.position);
    }

    onResize() {
        renderer.setSize(window.innerWidth, window.innerHeight);
    }
}

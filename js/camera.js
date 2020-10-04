class Camera extends THREE.PerspectiveCamera
{
    constructor(){
        super(70, window.innerWidth / window.innerHeight, 1, 1000);
        this.view1();
        this.onResize();
    }

    /* FRONT */
    view1(){
        'use strict';

        this.num = 1;
        this.onResize();
        this.position.x = 50;
        this.position.y = 50;
        this.position.z = 50;
        this.lookAt(scene.position);

    }

    /* TOP */
    view2(){
        'use strict';

        this.num = 2;
        this.onResize();
        this.position.x = 0;
        this.position.y = 70;
        this.position.z = 0;
        this.lookAt(scene.position);
    }

    /* SIDE */
    view3(){
        'use strict';

        this.num = 3;
        this.onResize();
        this.position.x = 0;
        this.position.y = 0;
        this.position.z = 70;
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
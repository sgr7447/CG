/*global THREE, requestAnimationFrame, console*/

var camera, scene, renderer;
var geometry, material, mesh;
var table;
var balls;


function createTable(x, y, z){
    'use strict';

    material = new THREE.MeshBasicMaterial({color: 0x00ff00, wireframe: false});
    table = new Table(x, y, z);

}

function createScene() {
    'use strict';

    scene = new THREE.Scene();
    scene.add(new THREE.AxisHelper(10));

    createTable(0,0,0);
    scene.add(table);

    balls = new Ball();

}

function createCamera() {
    'use strict';

    camera = new Camera();
}

function onResize() {
    'use strict';
    camera.onResize();

}

function onKeyDown(e) {
    'use strict';

    switch (e.keyCode) {

        case 49: //key 1 - front
            camera.view1();
            break;

        case 50: //key 2 - top
            camera.view2();
            break;

        case 51: //key 3 - side
            camera.view3();
            break;

        case 52: //key 4 - solid or not
            scene.traverse( function (node) {
                if (node instanceof THREE.Mesh) {
                    node.material.wireframe = !node.material.wireframe;
                }
            } );
            break;

        case 81: //Q or q - Top spin postive
            break;

        case 87: //W or w - Top spin negative
            break;

        case 65: //A or a - Middle spin postive
            break;

        case 68: //D or d - Middle spin negative
            break;

        case 90: //Z or z - Bottom spin postive
            break;

        case 67: //C or c - Bottom spin negative
            break;

        case 39:
            break;

        case 37:
            break;

        case 38:
            break;

        case 40:
            break;
        }
    }

function onKeyUp(e) {
    'use strict';

    switch (e.keyCode) {

        case 81: //Q or q - Top stops spin positive
            break;

        case 87: //W or w - Top stops spin negative
            break;

        case 65: //A or a - Middle stops spin postive
            break;

        case 68: //D or d - Middle stops spin negative
            break;

        case 90: //Z or z - Bottom stops spin postive
            break;

        case 67: //C or c - Bottom stops spin negative
            break;

        case 39:
            break;

        case 37:
            break;

        case 38:
            break;

        case 40:
            break;

    }
}

function render() {
    'use strict';
    renderer.render(scene, camera);
}

function init() {
    'use strict';
    renderer = new THREE.WebGLRenderer({antialias: true});
    renderer.setSize(window.innerWidth, window.innerHeight);
    document.body.appendChild(renderer.domElement);

    //aspect = window.innerWidth / window.innerHeight;

    createScene();
    createCamera();

    render();

    window.addEventListener("keydown", onKeyDown);
    window.addEventListener("keyup", onKeyUp);
    window.addEventListener("resize", onResize);
}

function animate() {
    'use strict';


    render();
    requestAnimationFrame(animate);
}

/*global THREE, requestAnimationFrame, console*/

var camera, scene, renderer;
var geometry, material, mesh;

var mobileTopLayer = new THREE.Object3D();
var mobileMiddleLayer = new THREE.Object3D();
var mobileBottomLayer = new THREE.Object3D();
var g0 = new THREE.Object3D();
var g1 = new THREE.Object3D();
var g2 = new THREE.Object3D();

var topLayerPos = false;
var topLayerNeg = false;
var middleLayerPos = false;
var middleLayerNeg = false;
var bottomLayerPos = false;
var bottomLayerNeg = false;

var time = new THREE.Clock();
var delta;

function createScene() {
    'use strict';

    scene = new THREE.Scene();
    scene.add(new THREE.AxisHelper(10));

    createMobile(0,46,0);
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
            spinTopPos();
            break;

        case 87: //W or w - Top spin negative
            spinTopNeg();
            break;

        case 65: //A or a - Middle spin postive
            spinMiddlePos();
            break;

        case 68: //D or d - Middle spin negative
            spinMiddleNeg();
            break;

        case 90: //Z or z - Bottom spin postive
            spinBottomPos();
            break;

        case 67: //C or c - Bottom spin negative
            spinBottomNeg();
            break;
    }
}

function onKeyUp(e) {
    'use strict';

    switch (e.keyCode) {

        case 81: //Q or q - Top stops spin positive
            stopTop();
            break;

        case 87: //W or w - Top stops spin negative
            stopTop();
            break;

        case 65: //A or a - Middle stops spin postive
            stopMiddle();
            break;

        case 68: //D or d - Middle stops spin negative
            stopMiddle();
            break;

        case 90: //Z or z - Bottom stops spin postive
            stopBottom();
            break;

        case 67: //C or c - Bottom stops spin negative
            stopBottom();
            break;

    }
}

function render() {
    'use strict';
    renderer.render(scene, camera);
}

function init() {
    'use strict';
    renderer = new THREE.WebGLRenderer({
        antialias: true
    });
    renderer.setSize(window.innerWidth, window.innerHeight);
    document.body.appendChild(renderer.domElement);

    createScene();
    createCamera();

    render();

    window.addEventListener("keydown", onKeyDown);
    window.addEventListener("keyup", onKeyUp);
    window.addEventListener("resize", onResize);
}

function animate() {
    'use strict';

    update();
    render();
    requestAnimationFrame(animate);
}

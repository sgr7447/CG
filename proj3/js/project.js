/*global THREE, requestAnimationFrame, console*/

var orthographicCamera, perspectiveCamera, ballCamera, currentCamera, scene, renderer;
var geometry, material, mesh;
var floor;
var totalParts;


function createBase(x, y, z){
    'use strict';

    material = new THREE.MeshBasicMaterial({color: 0x00ff00, wireframe: false});

    floor = new Floor();
    totalParts = new TotalParts();
}

function createScene() {
    'use strict';

    scene = new THREE.Scene();
    scene.add(new THREE.AxesHelper(50));

    createBase(0,0,0);
}

function createCamera() {
    'use strict';

    orthographicCamera = new OrthographicCamera();
    perspectiveCamera = new PerspectiveCamera();

    currentCamera = orthographicCamera;
}

function onResize() {
    'use strict';
    currentCamera.onResize();
}

function onKeyDown(e) {
    'use strict';

    switch (e.keyCode) {

        case 49: //key 1 - top orthographic camera
            currentCamera = orthographicCamera;
            currentCamera.view1();
            break;


        case 50: //key 2 - perspective camera
            currentCamera = perspectiveCamera;
            currentCamera.view1();
            break;


        case 39: //key ->
            totalParts.spinPositive();
            break;


        case 37: //key <-
            totalParts.spinNegative();
            break;

    }
  }

function onKeyUp(e) {
    'use strict';

    switch (e.keyCode) {

        case 39: //key ->
            totalParts.stopSpinPos();
            break;


        case 37: //key <-
            totalParts.stopSpinNeg();
            break;

    }
}

function render() {
    'use strict';
    renderer.render(scene, currentCamera);
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

    window.addEventListener("keydown", onKeyDown);
    window.addEventListener("keyup", onKeyUp);
    window.addEventListener("resize", onResize);
}

function animate() {
    'use strict';

    totalParts.update();

    render();
    requestAnimationFrame(animate);
}

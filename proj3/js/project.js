/*global THREE, requestAnimationFrame, console*/

var orthographicCamera, perspectiveCamera, ballCamera, currentCamera, scene, renderer;
var geometry, material, mesh;
var floor, platform, chassis, bodyStyle;
var totalParts;

//TIME
var time;
var delta;


function createBase(x, y, z){
    'use strict';

    material = new THREE.MeshBasicMaterial({color: 0x00ff00, wireframe: false});

    floor = new Floor();
    chassis = new Chassis();
    bodyStyle = new BodyStyle();
    platform = new Platform();
    totalParts = new TotalParts(chassis, bodyStyle, platform);

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

    currentCamera = perspectiveCamera;
}

function onResize() {
    'use strict';
    currentCamera.onResize();
}

function onKeyDown(e) {
    'use strict';

    switch (e.keyCode) {

        case 52: //key 4 - perspective camera
            currentCamera = perspectiveCamera;
            currentCamera.view_scene();
            break;


        case 53: //key 5 - top orthographic camera
            currentCamera = orthographicCamera;
            currentCamera.view_from_platform();
            break;

        case 39: //key ->
            totalParts.spinPositive();
            currentCamera.spinPositive();
            break;


        case 37: //key <-
            totalParts.spinNegative();
            currentCamera.spinNegative();
            break;

    }
  }

function onKeyUp(e) {
    'use strict';

    switch (e.keyCode) {

        case 39: //key ->
            totalParts.stopSpinPos();
            currentCamera.stopSpinPositive();
            break;


        case 37: //key <-
            totalParts.stopSpinNeg();
            currentCamera.stopSpinNegative();
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

    time = new THREE.Clock();

    createScene();
    createCamera();

    window.addEventListener("keydown", onKeyDown);
    window.addEventListener("keyup", onKeyUp);
    window.addEventListener("resize", onResize);
}


function updateTime() {
    delta = time.getDelta();
}


function animate() {
    'use strict';

    updateTime();
    totalParts.update(delta);
    currentCamera.update(delta);

    render();
    requestAnimationFrame(animate);
}

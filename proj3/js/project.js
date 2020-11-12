/*global THREE, requestAnimationFrame, console*/

var orthographicCamera, perspectiveCamera, currentCamera, scene, renderer;
var geometry, mesh;
var floor;
var totalParts;
var allMeshes;

//LIGHTS
var gLight;
var spotLights;

//TIME
var time;
var delta;


function createBase(x, y, z){
    'use strict';

    allMeshes = [];
    floor = new Floor();
    totalParts = new TotalParts();
}

function createScene() {
    'use strict';

    time = new THREE.Clock();

    scene = new THREE.Scene();
    scene.add(new THREE.AxesHelper(50));

    perspectiveCamera = new PerspectiveCamera();
    currentCamera = perspectiveCamera;

    createBase(0,0,0);

    //LIGHTS
    gLight = new globalLight();
    spotLights = new spotlightsHandler();
}

function onResize() {
    'use strict';
    currentCamera.onResize();
}

function onKeyDown(e) {
    'use strict';

    switch (e.keyCode) {

        case 49: //key 1 - flip switch spotlight 1
            spotLights.flipSwitch(0);
            break;

        case 50: //key 2 - flip switch spotlight 2
            spotLights.flipSwitch(1);
            break;

        case 51: //key 3 - flip switch spotlight 3
            spotLights.flipSwitch(2);
            break;

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
            break;

        case 37: //key <-
            totalParts.spinNegative();
            break;

        case 81: //key Q/q
            gLight.flipSwitch();
            break;

        case 87: //key W/w
            //switch between Basic and (Lambert or Phong)
            allMeshes.forEach( _mesh => { _mesh.switchIlumination(); } );
            break;

        case 69: //key E/e
            //switch between Lambert or Phong
            allMeshes.forEach( _mesh => { _mesh.switchShading(); } );
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

    render();
    requestAnimationFrame(animate);
}

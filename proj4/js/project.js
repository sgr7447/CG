/*global THREE, requestAnimationFrame, console*/

var orthoCamera, persCamera, currentCamera, scene, renderer;
var geometry, mesh;
var floor, flag;
var allMeshes;

//LIGHTS
var dirLight, pLight;

//TIME
var time;
var delta;


function createBase(x, y, z){
    'use strict';

    allMeshes = [];
    floor = new Floor();
    flag = new Flag();
}

function createScene() {
    'use strict';

    time = new THREE.Clock();

    scene = new THREE.Scene();
    scene.add(new THREE.AxesHelper(50));

    persCamera = new PerspectiveCamera();
    currentCamera = persCamera;

    //SKYBOX
    /*scene.background = new THREE.CubeTextureLoader()
        .setPath( 'textures/cubeMaps/' )
        .load( [
            'px.png',
            'nx.png',
            'py.png',
            'ny.png',
            'pz.png',
            'nz.png'
        ] );*/

    //PARTS
    createBase(0,0,0);

    //LIGHTS
    dirLight = new directionalLight();
    pLight = new pointLight();
}

function onResize() {
    'use strict';
    currentCamera.onResize();
}

function onKeyDown(e) {
    'use strict';

    switch (e.keyCode) {

        case 68: //key D/d
            dirLight.flipSwitch();
            break;

        case 80: //key P/p
            pLight.flipSwitch();
            break;

        case 87: //key I/i
            //ativa ou desativa calculo da iluminacao
            allMeshes.forEach( _mesh => { _mesh.switchIlumination(); } );
            break;

        /*case 49: //key 1 - flip switch spotlight 1
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

        case 69: //key E/e
            //switch between Lambert or Phong
            allMeshes.forEach( _mesh => { _mesh.switchShading(); } );
            break;*/

    }
  }

function onKeyUp(e) {
    'use strict';

    switch (e.keyCode) {

        /*case 39: //key ->
            totalParts.stopSpinPos();
            break;


        case 37: //key <-
            totalParts.stopSpinNeg();
            break;*/

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

    render();
    requestAnimationFrame(animate);
}

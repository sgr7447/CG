/*global THREE, requestAnimationFrame, console*/

var persCamera, orthCamera, scene, pauseScene, renderer, controls;
var geometry, mesh;
var floor, flag, ball, message;
var allMeshes;

//LIGHTS
var dirLight, pLight;

//TIME
var time;
var delta;
var pause = false;


function createBase(x, y, z){
    'use strict';

    allMeshes = [];
    floor = new Floor();
    message = new PauseMessage();
    flag = new Flag();
    ball = new Ball();
}

function createScene() {
    'use strict';

    time = new THREE.Clock();

    scene = new THREE.Scene();
    pauseScene = new THREE.Scene();
    scene.add(new THREE.AxesHelper(50));

    persCamera = new PerspectiveCamera();
    orthCamera = new OrthographicCamera();
    controls = new THREE.OrbitControls(persCamera, renderer.domElement);


    //SKYBOX
    scene.background = new THREE.CubeTextureLoader()
        .setPath( 'textures/cubemap3/' )
        .load( [
            'px.png',
            'nx.png',
            'py.png',
            'ny.png',
            'pz.png',
            'nz.png'
        ] );

    //PARTS
    createBase(0,0,0);

    //LIGHTS
    dirLight = new directionalLight();
    pLight = new pointLight();
}

function onResize() {
    'use strict';
    persCamera.onResize();
}

function onKeyDown(e) {
    'use strict';

    switch (e.keyCode) {

        case 66: //key B/b
            ball.jumping = !ball.jumping;
            break;

        case 68: //key D/d
            dirLight.flipSwitch();
            break;

        case 73: //key I/i
            //ativa ou desativa calculo da iluminacao
            allMeshes.forEach( _mesh => { _mesh.switchIlumination(); } );
            break;

        case 80: //key P/p
            pLight.flipSwitch();
            break;

        case 83: //key S/s
            pause = !pause;
            break;

        case 87: //key W/w
            scene.traverse( function (node) {
                if (node instanceof THREE.Mesh) {
                    node.material.wireframe = !node.material.wireframe;
                }
            } );
            break;

        case 82: //key R/r
            reset();
            break;
    }
  }

/*function onKeyUp(e) {
    'use strict';

    switch (e.keyCode) {

        /*case 39: //key ->
            totalParts.stopSpinPos();
            break;


        case 37: //key <-
            totalParts.stopSpinNeg();
            break;

    }
}*/

function reset() {
    pause = 0;

    ball.reset();
    flag.reset();

    pLight.reset();
    dirLight.reset();

    allMeshes.forEach( _mesh => { _mesh.reset(); } );
    scene.traverse( function (node) {
        if (node instanceof THREE.Mesh) {
            node.material.wireframe = false;
        }
    } );
}

function render() {
    'use strict';
    renderer.render(scene, persCamera);
    if(pause){
        renderer.autoClear = false;
        renderer.clear();
        renderer.render(scene, persCamera);
        renderer.clearDepth();
        renderer.render(pauseScene, orthCamera);
    }
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
    //window.addEventListener("keyup", onKeyUp);
    window.addEventListener("resize", onResize);
}


function updateTime() {
    if(pause){
        time.getDelta();
        delta = 0;
    }
    else{
        delta = time.getDelta();
    }
}


function animate() {
    'use strict';

    updateTime();
    flag.update(delta);
    ball.update(delta);
    controls.update();
    render();
    requestAnimationFrame(animate);
}

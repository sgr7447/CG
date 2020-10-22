/*global THREE, requestAnimationFrame, console*/

var orthographicCamera, perspectiveCamera, currentCamera, scene, renderer;
var geometry, material, mesh;
var poolTable;
var balls;
var clubs;


function createPoolTable(x, y, z){
    'use strict';

    material = new THREE.MeshBasicMaterial({color: 0x00ff00, wireframe: false});
    poolTable = new PoolTable(x, y, z);
    clubs = new ClubHandler();
    scene.add(poolTable);

}

function createScene() {
    'use strict';

    scene = new THREE.Scene();
    scene.add(new THREE.AxisHelper(10));

    createPoolTable(0,0,0);

    balls = new Ball();

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

        case 81: //para apagar FRONT
            currentCamera = orthographicCamera;
            currentCamera.view2();
            break;

        case 65: //para apagar SIDE
            currentCamera = orthographicCamera;
            currentCamera.view3();
            break;

        case 50: //key 2 - perspective camera
            currentCamera = perspectiveCamera;
            currentCamera.view1();
            break;

        /*case 51: //key 3 - mobile perspective camera
            break;*/

        case 52: //key 4 - taco1
            clubs.selected(0);
            break;

        case 53: //key 5 - taco2
            clubs.selected(1);
            break;

        case 54: //key 6 - taco3
            clubs.selected(2);
            break;

        case 55: //key 7 - taco4
            clubs.selected(3);
            break;

        case 56: //key 8 - taco5
            clubs.selected(4);
            break;

        case 57: //key 9 - taco6
            clubs.selected(5);
            break;

        case 20: //shoot -space
            break;
        }
    }

/*function onKeyUp(e) {
    'use strict';
    switch (e.keyCode) {

    }
}*/

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

    render();

    window.addEventListener("keydown", onKeyDown);
    //window.addEventListener("keyup", onKeyUp);
    window.addEventListener("resize", onResize);
}

function animate() {
    'use strict';

    poolTable.update();

    render();
    requestAnimationFrame(animate);
}

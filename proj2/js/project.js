/*global THREE, requestAnimationFrame, console*/

var orthographicCamera, scene, renderer;
var geometry, material, mesh;
var poolTable;


function createPoolTable(x, y, z){
    'use strict';

    material = new THREE.MeshBasicMaterial({color: 0x00ff00, wireframe: false});
    poolTable = new PoolTable(x, y, z);

}

function createScene() {
    'use strict';

    scene = new THREE.Scene();
    scene.add(new THREE.AxisHelper(10));

    createPoolTable(0,0,0);
    scene.add(poolTable);

}

function createCamera() {
    'use strict';

    orthographicCamera = new OrthographicCamera();
}

function onResize() {
    'use strict';
    orthographicCamera.onResize();

}

function onKeyDown(e) {
    'use strict';

    switch (e.keyCode) {

        case 49: //key 1 - top orthographic camera
            orthographicCamera.view1();
            break;

        case 50: //para apagar FRONT
            orthographicCamera.view2();
            break;

        case 51: //para apagar SIDE
            orthographicCamera.view3();
            break;

        /*case 50: //key 2 - perspective camera
            break;

        case 51: //key 3 - mobile perspective camera
            break;*/

        case 52: //key 4 - taco1
            break;

        case 53: //key 5 - taco2
            break;

        case 54: //key 6 - taco3
            break;
        case 55: //key 7 - taco4
            break;
        case 56: //key 8 - taco5
            break;
        case 57: //key 9 - taco6
            break;

        case 20: //shoot -space
            break;

        /*case 87: //W or w - Top spin negative
            mobile.spinTopNeg();
            break;

        case 65: //A or a - Middle spin postive
            mobile.spinMiddlePos();
            break;

        case 68: //D or d - Middle spin negative
            mobile.spinMiddleNeg();
            break;

        case 90: //Z or z - Bottom spin postive
            mobile.spinBottomPos();
            break;

        case 67: //C or c - Bottom spin negative
            mobile.spinBottomNeg();
            break;

        case 39:
            mobile.movingRight();
            break;

        case 37:
            mobile.movingLeft();
            break;

        case 38:
            mobile.movingFront();
            break;

        case 40:
            mobile.movingBack();
            break;*/
        }
    }

/*function onKeyUp(e) {
    'use strict';

    switch (e.keyCode) {

        case 81: //Q or q - Top stops spin positive
            mobile.stopTopPos();
            break;

        case 87: //W or w - Top stops spin negative
            mobile.stopTopNeg();
            break;

        case 65: //A or a - Middle stops spin postive
            mobile.stopMiddlePos();
            break;

        case 68: //D or d - Middle stops spin negative
            mobile.stopMiddleNeg();
            break;

        case 90: //Z or z - Bottom stops spin postive
            mobile.stopBottomPos();
            break;

        case 67: //C or c - Bottom stops spin negative
            mobile.stopBottomNeg();
            break;

        case 39:
            mobile.stopRight();
            break;

        case 37:
            mobile.stopLeft();
            break;

        case 38:
            mobile.stopFront();
            break;

        case 40:
            mobile.stopBack();
            break;

    }
}*/

function render() {
    'use strict';
    renderer.render(scene, orthographicCamera);
}

function init() {
    'use strict';
    renderer = new THREE.WebGLRenderer({
        antialias: true
    });
    renderer.setSize(window.innerWidth, window.innerHeight);
    document.body.appendChild(renderer.domElement);

    //aspect = window.innerWidth / window.innerHeight;

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

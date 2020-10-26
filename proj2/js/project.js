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
    balls = new BallsHandler();

}

function createScene() {
    'use strict';

    scene = new THREE.Scene();
    scene.add(new THREE.AxesHelper(10));

    createPoolTable(0,0,0);
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

        case 51: //key 3 - mobile perspective camera
            break;

        case 52: //key 4 - club1
            clubs.selected(0);
            break;

        case 53: //key 5 - club2
            clubs.selected(1);
            break;

        case 54: //key 6 - club3
            clubs.selected(2);
            break;

        case 55: //key 7 - club4
            clubs.selected(3);
            break;

        case 56: //key 8 - club5
            clubs.selected(4);
            break;

        case 57: //key 9 - club6
            clubs.selected(5);
            break;

        case 39: //key -> - angle to the right
            clubs.angleRight();
            break;

        case 37: //key <- - angle to the left
            clubs.angleLeft();
            break;

        case 32: //shoot -space
            balls.shoot( clubs.getSelectedClub() );
            break;
        }
    }

function onKeyUp(e) {
    'use strict';
    switch (e.keyCode) {

        case 37: //key -> - stop angle left
            clubs.stopAngleLeft();
            break;

        case 39: //key <- - stop angle right
            clubs.stopAngleRight();
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

    render();

    window.addEventListener("keydown", onKeyDown);
    window.addEventListener("keyup", onKeyUp);
    window.addEventListener("resize", onResize);
}

function animate() {
    'use strict';

    clubs.update();
    balls.update();

    render();
    requestAnimationFrame(animate);
}

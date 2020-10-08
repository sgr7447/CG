/*global THREE, requestAnimationFrame, console*/

var camera, scene, renderer;

var geometry, material, mesh;

function addArm(obj, x, y, z, rad, len){
    'use strict'
    geometry = new THREE.CylinderGeometry(0.2, 0.2, len);
    mesh = new THREE.Mesh(geometry, material);
    mesh.position.set(x, y, z);
    mesh.rotation.set(Math.PI*rad, 0, 0);
    obj.add(mesh);
}


function createMobile(x, y, z){
    'use strict';

    var mobile = new THREE.Object3D();
    var mobileTopLayer = new THREE.Object3D();
    var mobileTopArm1 = new THREE.Object3D();
    var mobileTopArm2 = new THREE.Object3D();
    var mobileTopArm3 = new THREE.Object3D();
    var mobileMiddleLayer = new THREE.Object3D();
    var mobileBottomLayer = new THREE.Object3D();
    material = new THREE.MeshBasicMaterial({color: 0x00ff00, wireframe: true});

    addArm(mobileTopArm1, 0, 0, 0, 0, 12);
    addArm(mobileTopArm2, 0, -11, 2, -1/4, 8);
    addArm(mobileTopArm3, 0, -10, 0, 1/6, 9);
    mobileTopLayer.add(mobileTopLayer1);
    mobileTopLayer.add(mobileTopLayer2);
    mobileTopLayer.add(mobileTopLayer3);


    addArm(mobile, 0, -20, 0, 1/6, 8);
    addArm(mobile, 0, -20, 0, 5/6, 5);

    mobileMiddleLayer.add(mobileBottomLayer);
    mobileTopLayer.add(mobileMiddleLayer);
    mobile.add(mobileTopLayer);


    scene.add(mobile);

    mobile.position.x = x;
    mobile.position.y = y;
    mobile.position.z = z;
  }

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

        case 49: /*key 1*/
            camera.view1(); /* front */
            break;

        case 50: /*key 2*/
            camera.view2(); /* top */
            break;

        case 51: /*key 3*/
            camera.view3(); /* side */
            break;

        case 52: /*key 4*/
            /* solid or not */
            scene.traverse( function (node) {
                if (node instanceof THREE.Mesh) {
                    node.material.wireframe = !node.material.wireframe;
                }
            } );
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
    /*TEMOS DE CRIAR: window.addEventListener("keyup", onKeyUp);*/
    window.addEventListener("resize", onResize);
}

function animate() {
    'use strict';

    /*if (ball.userData.jumping) {
        ball.userData.step += 0.04;
        ball.position.y = Math.abs(30 * (Math.sin(ball.userData.step)));
        ball.position.z = 15 * (Math.cos(ball.userData.step));
    }*/

    render();
    requestAnimationFrame(animate);
}

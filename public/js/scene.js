var container;
var camera, scene, renderer;
var box;

init();
animate();

function init() {
    var aspect = window.innerWidth / window.innerHeight;
    camera = new THREE.PerspectiveCamera(70, aspect, 1, 1000);
    scene = new THREE.Scene();
    var light = new THREE.DirectionalLight(0xffffff, 1);
    light.position.set(100, 100, 100).normalize();
    scene.add(light);

    var boxGeometry = new THREE.BoxBufferGeometry(40, 40, 40, 10, 10, 10);
    var boxMaterial = new THREE.MeshBasicMaterial({
        color: 0xA3A375, 
        transparent: true, 
        opacity: 1
    });
    box = new THREE.Mesh(boxGeometry, boxMaterial);
    box.position.x = 0;
    box.position.y = 0;
    box.position.z = 0;
    box.scale.x = 1;
    box.scale.y = 1;
    box.scale.z = 1;
    scene.add(box);

    renderer = new THREE.WebGLRenderer();
    renderer.setClearColor(0xf0f0f0);
    renderer.setPixelRatio(window.devicePixelRatio);
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.sortObjects = false;

    $("#scene").append(renderer.domElement);

    camera.position.x = 100;
    camera.position.y = 100;
    camera.position.z = 100;
    camera.lookAt(scene.position);
    camera.updateMatrixWorld();
    
    window.addEventListener('resize', onWindowResize, false);
}

function onWindowResize() {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
}

function animate() {
    window.requestAnimationFrame(animate);
    render();
}

function render() {
    box.rotation.y += 0.01;
    renderer.render(scene, camera);
}
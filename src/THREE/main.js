// ----------------------------------------------------------------------------------
// Homepage v3 JS/React/Three Project
// Author: Jace Weyant
// Date Created: Nov 26, 2024
// ----------------------------------------------------------------------------------


// THREE IMPORTS
// ----------------------------------------------------------------------------------
import * as THREE from "three";
import gsap from "gsap";
import { OrbitControls } from "three/examples/jsm/Addons.js";
import { OBJLoader } from "three/examples/jsm/Addons.js";
import MouseFX from "../lib/MouseFX.js";


// SETUP RENDERER
// ----------------------------------------------------------------------------------
const w = window.innerWidth;
const h = window.innerHeight;
const renderer = new THREE.WebGLRenderer({antialias : true});
renderer.setSize(w,h);
document.body.appendChild(renderer.domElement);

// SETUP CAMERA
// ----------------------------------------------------------------------------------
const fov = 60;
const aspect = w / h;
const near = 0.1;
const far = 10;
const camera = new THREE.PerspectiveCamera(fov, aspect, near, far);
camera.position.z = 4;

// INITIALIZE SCENE
// ----------------------------------------------------------------------------------
const scene = new THREE.Scene();

// SETUP ORBIT CONTROLS
// ----------------------------------------------------------------------------------

/*const controls = new OrbitControls(camera, renderer.domElement);
controls.enableDamping = true;
controls.dampingFactor = 0.03;*/

// OBJ LOADERS
// ----------------------------------------------------------------------------------

// name LOADER
var nameMesh,nameMat;
const nameLoader = new OBJLoader();
nameLoader.load(
  // resource URL
  "JaceWeyant-Website/models/icosWireframe_1.obj",

  // called upon resource load
  (object) => {
    nameMesh = object;

    nameMat = new THREE.MeshPhysicalMaterial({
        color: 0xfffef7,  
        roughness: 0.2,
        metalness: 0.8,
        emissive: 0x000000,
    });
    
    object.traverse(function(child) {
      if (child.isMesh) child.material = nameMat;
    });

    object.position.y = -0.2;

    // Initial spin in animation
    gsap.to(object.rotation, {
      y: 3 * Math.PI, 
      duration: 8.0, delay: 0.0,
      ease: "power2.inOut",
      repeat: 0
    });
    // sustained spin
    gsap.to(object.rotation, {
        y: "+=2 * Math.PI", 
        duration: 24.0,
        delay: 8.0, 
        ease: "sine.inOut", 
        yoyo: true, 
        repeat: -1
    });
    // scale in
    gsap.fromTo(object.scale, {x: 0.0, y: 0.0, z: 0.0}, {
        x: 2.0, y: 2.0, z: 2.0,
        duration: 2.4,
        delay: 2.4,
        ease: "power3.inOut",
        repeat: 0
    });

    scene.add(object);

    var ctrl = new MouseFX();
    window.addEventListener("mousemove", (e) => {
      ctrl.lookToPoint(e);
      console.log(ctrl.rotation.x, ctrl.rotation.y, ctrl.rotation.z);
      object.rotation.set(ctrl.rotation.x, ctrl.rotation.y, ctrl.rotation.z);
    });
      

  },

  // called during loading
  (xhr) => {console.log((xhr.loaded / xhr.total * 100) + "% loaded");},
  
  // called when loading has errors
  (error) => {console.error("An error occured: " + error);}
);


// SETUP LIGHTS
// ----------------------------------------------------------------------------------

const origin = new THREE.Object3D();
scene.add(origin);

// rotation origin rotates in
gsap.to(origin.rotation, {
  y: 2 * Math.PI, 
  duration: 6.0, 
  ease: "none", 
  repeat: 0
});


const pointLight = new THREE.PointLight({
  color: 0xd45a18,
  intensity: 10.0,
  decay: 0.3,
  distance: 3.0
});
pointLight.intensity = 0.0;
pointLight.decay = 1.4;
pointLight.position.set(1.2, 1.6, 8.0);
origin.add(pointLight);

// light fades up
gsap.fromTo(pointLight, 
  {intensity: 0.0}, 
  {intensity: 1.0, 
    duration: 10.0, delay: 3.0,
    ease: "ease-in", 
    repeat: 0
  }
);

const pointLightOrange = new THREE.PointLight({
  color: 0xd45a18,
  intensity: 1.0,
});
//pointLightOrange.color = 0xd45a18;
pointLightOrange.intensity = 1.0;
pointLightOrange.decay = 1.4;
pointLight.position.set(-2.0, 0.0, 1.0);
scene.add(pointLightOrange);

const hemiLight = new THREE.HemisphereLight({
  color: 0xffffff,
  intensity: 10.0
});
hemiLight.intensity = 2.5;
//scene.add(hemiLight);



// RENDER ANIMATION
// ----------------------------------------------------------------------------------
var rad = 0.0;
function animate(t = 0) {
  requestAnimationFrame(animate);

  rad += 0.01;
  //origin.rotation.y = rad / 2.0;

  renderer.render(scene, camera);
  //controls.update();
}
animate();


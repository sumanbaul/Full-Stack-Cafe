var checkIfMobile = false;

window.mobileCheck = function() {
    debugger;
    //let checkIfMobile = false;
    (function(a){if(/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(a)||/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(a.substr(0,4))) check = true;})(navigator.userAgent||navigator.vendor||window.opera);
    return checkIfMobile;
};

function isMobileDevice() {
    return (typeof window.orientation !== "undefined") || (navigator.userAgent.indexOf('IEMobile') !== -1);
};

console.log(isMobileDevice());
console.log(checkIfMobile);
var mobileX,mobileY;
var output = document.querySelector('.output');
//Device movement detection
function handleOrientation(event) {
    mobileX = event.beta;  // In degree in the range [-180,180]
    mobileY = event.gamma; // In degree in the range [-90,90]
  
     output.innerHTML  = "beta : " + mobileX + "\n";
     output.innerHTML += "gamma: " + mobileY + "\n";
  
    // Because we don't want to have the device upside down
    // We constrain the x value to the range [-90,90]
     if (mobileX >  90) { mobileX =  90};
     if (mobileX < -90) { mobileX = -90};
  
    // To make computation easier we shift the range of 
    // x and y to [0,180]
    // mobileX += 90;
    // mobileY += 90;
  
    // 10 is half the size of the ball
    // It center the positioning point to the center of the ball
    // ball.style.top  = (maxY*y/180 - 10) + "px";
    // ball.style.left = (maxX*x/180 - 10) + "px";
}
window.addEventListener('deviceorientation', handleOrientation);


//--------------------------------------------------------------Color generator
function getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '';
    for (var i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return parseInt(color ,16) ;
  }
  


// Three JS Template
var scene3d = document.getElementById('canvas');
var WindowHeight = window.innerHeight;
var HeaderHeight = document.getElementById("header").offsetHeight;
var SliderHeight = (WindowHeight - HeaderHeight)-75;
var containerWidth = document.getElementById('canvasContainer').offsetWidth;
var containerHeight = SliderHeight;
console.log(containerWidth);




//document.body.appendChild(container);
var renderer = new THREE.WebGLRenderer({ antialias: true });
renderer.setSize(containerWidth, containerHeight);
renderer.shadowMap.enabled = false;
renderer.shadowMap.type = THREE.PCFSoftShadowMap;
renderer.shadowMap.needsUpdate = true;



scene3d.appendChild(renderer.domElement);
window.addEventListener('resize', onWindowResize, false);
function onWindowResize() {
    camera.aspect = containerWidth / containerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(containerWidth, containerHeight);
}
var camera = new THREE.PerspectiveCamera(35, containerWidth / containerHeight, 1, 500);
var scene = new THREE.Scene();
var cameraRange = 3;

var setcolor = 0x312a3e;

scene.background = new THREE.Color(setcolor)
scene.fog = new THREE.Fog(setcolor, 2.5, 3.5);

//-------------------------------------------------------------- SCENE

var sceneGruop = new THREE.Object3D();
var particularGruop = new THREE.Object3D();
var modularGruop = new THREE.Object3D();

function generateParticle(num, amp = 2) {
    var gmaterial = new THREE.MeshPhysicalMaterial({ color: 0xFFFFFF, side: THREE.DoubleSide });

    var gparticular = new THREE.CircleGeometry(0.2, 5);

    for (var i = 1; i < num; i++) {
        var pscale = 0.001 + Math.abs(mathRandom(0.03));
        var particular = new THREE.Mesh(gparticular, gmaterial);
        particular.position.set(mathRandom(amp), mathRandom(amp), mathRandom(amp));
        particular.rotation.set(mathRandom(), mathRandom(), mathRandom());
        particular.scale.set(pscale, pscale, pscale);
        particular.speedValue = mathRandom(1);

        particularGruop.add(particular);
    }
}
generateParticle(200, 2);

sceneGruop.add(particularGruop);
scene.add(modularGruop);
scene.add(sceneGruop);

function mathRandom(num = 1) {
    var setNumber = - Math.random() * num + Math.random() * num;
    return setNumber;
}

//------------------------------------------------------------- INIT
function init() {
    
   
        for (var i = 0; i < 30; i++) {
            var geometry = new THREE.IcosahedronGeometry(1);
            var material = new THREE.MeshStandardMaterial({ shading: THREE.FlatShading, color: 0x111111, transparent: false, opacity: 1, wireframe: false });
            var cube = new THREE.Mesh(geometry, material);
            cube.speedRotation = Math.random() * 0.1;
            cube.positionX = mathRandom();
            cube.positionY = mathRandom();
            cube.positionZ = mathRandom();
            cube.castShadow = true;
            cube.receiveShadow = true;

            var newScaleValue = mathRandom(0.3);

            cube.scale.set(newScaleValue, newScaleValue, newScaleValue);
            //---
            cube.rotation.x = mathRandom(180 * Math.PI / 180);
            cube.rotation.y = mathRandom(180 * Math.PI / 180);
            cube.rotation.z = mathRandom(180 * Math.PI / 180);
            //
            cube.position.set(cube.positionX, cube.positionY, cube.positionZ);
            modularGruop.add(cube);
        }
   
    
}

//------------------------------------------------------------- CAMERA
camera.position.set(0, 0, cameraRange);
var cameraValue = false;
function cameraSet() {
    if (!cameraValue) {
        TweenMax.to(camera.position, 1, { z: cameraRange, ease: Power4.easeInOut });
        cameraValue = true;
    } else {
        TweenMax.to(camera.position, 1, { z: cameraRange, x: 0, y: 0, ease: Power4.easeInOut });
        INTERSECTED = null;
        cameraValue = false;
    }
}

//------------------------------------------------------------- SCENE
var ambientLight = new THREE.AmbientLight(0xFFFFFF, 0.1);
//scene.add(ambientLight);

var light = new THREE.SpotLight(0xFFFFFF, 3);
light.position.set(5, 5, 2);
light.castShadow = true;
light.shadow.mapSize.width = 10000;
light.shadow.mapSize.height = light.shadow.mapSize.width;
light.penumbra = 0.5;

var lightBack = new THREE.PointLight(0x0FFFFF, 1);
lightBack.position.set(0, -3, -1);

scene.add(sceneGruop);
scene.add(light);
scene.add(lightBack);

var rectSize = 2;
var intensity = 100;
var rectLight = new THREE.RectAreaLight(getRandomColor(), intensity, rectSize, rectSize);  //0x512a82
rectLight.position.set(0, 0, 1);
rectLight.lookAt(0, 0, 0);
scene.add(rectLight)

rectLightHelper = new THREE.RectAreaLightHelper(rectLight);
//scene.add( rectLightHelper );

//------------------------------------------------------------- RAYCASTER
var raycaster = new THREE.Raycaster();
var mouse = new THREE.Vector2(), INTERSECTED;
var intersected;

function onMouseMove(event) {

    if(isMobileDevice()){
        event.preventDefault();
        mouse.x = (mobileX / containerWidth) * 2 - 1;
        mouse.y = -(mobileY / containerHeight) * 2 + 1;
    }else {
        event.preventDefault();
    mouse.x = (event.clientX / containerWidth) * 2 - 1;
    mouse.y = -(event.clientY / containerHeight) * 2 + 1;
    }
    
}
function onMouseDown(event) {
    event.preventDefault();
    onMouseMove(event);
    raycaster.setFromCamera(mouse, camera);
    var intersected = raycaster.intersectObjects(modularGruop.children);
    if (intersected.length > 0) {
        cameraValue = false;
        if (INTERSECTED != intersected[0].object) {
            if (INTERSECTED) INTERSECTED.material.emissive.setHex(INTERSECTED.currentHex);

            INTERSECTED = intersected[0].object;
            INTERSECTED.currentHex = INTERSECTED.material.emissive.getHex();
            INTERSECTED.material.emissive.setHex(0xFFFF00);
            //INTERSECTED.material.map = null;
            //lightBack.position.set(INTERSECTED.position.x,INTERSECTED.position.y,INTERSECTED.position.z);

            TweenMax.to(camera.position, 1, {
                x: INTERSECTED.position.x,
                y: INTERSECTED.position.y,
                z: INTERSECTED.position.z + 3,
                ease: Power2.easeInOut
            });

        } else {
            if (INTERSECTED) INTERSECTED.material.emissive.setHex(INTERSECTED.currentHex);
            INTERSECTED = null;

        }
    }
    console.log(intersected.length);
}
function onMouseUp(event) {

}

window.addEventListener('mousedown', onMouseDown, false);
window.addEventListener('mouseup', onMouseUp, false);
window.addEventListener('mousemove', onMouseMove, false);

//------------------------------------------------------------- RENDER
var uSpeed = 0.1;
function animate() {
    var time = performance.now() * 0.0003;
    requestAnimationFrame(animate);
    //---
    for (var i = 0, l = particularGruop.children.length; i < l; i++) {
        var newObject = particularGruop.children[i];
        newObject.rotation.x += newObject.speedValue / 10;
        newObject.rotation.y += newObject.speedValue / 10;
        newObject.rotation.z += newObject.speedValue / 10;
        //---
        //newObject.position.y = Math.sin(time) * 3;
    };

    for (var i = 0, l = modularGruop.children.length; i < l; i++) {
        var newCubes = modularGruop.children[i];
        newCubes.rotation.x += 0.008;
        newCubes.rotation.y += 0.005;
        newCubes.rotation.z += 0.003;
        //---
        newCubes.position.x = Math.sin(time * newCubes.positionZ) * newCubes.positionY;
        newCubes.position.y = Math.cos(time * newCubes.positionX) * newCubes.positionZ;
        newCubes.position.z = Math.sin(time * newCubes.positionY) * newCubes.positionX;
    }
    //---
    particularGruop.rotation.y += 0.005;
    //---


//     mobileY = mobileY/10;
//     mobileX = mobileX/10;
// console.log("MobileX:"+mobileX);
// console.log("MobileY:"+mobileY);
if(isMobileDevice()){


    modularGruop.rotation.y =  parseFloat(((mobileX * 4)) * uSpeed);
    modularGruop.rotation.x =  parseFloat(((mobileY * 4)) * uSpeed);

    // modularGruop.rotation.y =  parseFloat(((mobileX * 4)) * uSpeed);
    // modularGruop.rotation.x =  parseFloat(((mobileY * 4)) * uSpeed);
 
console.log("Modular Y:"+modularGruop.rotation.y);
console.log("Modular X:"+modularGruop.rotation.x);

}else {
    

     modularGruop.rotation.y -= ((mouse.x * 4) + modularGruop.rotation.y) * uSpeed;
     modularGruop.rotation.x -= ((-mouse.y * 4) + modularGruop.rotation.x) * uSpeed;

}

// console.log("Mouse X:"+mouse.x);
// console.log("Mouse Y:"+mouse.y);

    camera.lookAt(scene.position);
    renderer.render(scene, camera);
}

animate();
init();
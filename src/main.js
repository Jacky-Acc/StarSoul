import * as THREE from
"https://cdn.jsdelivr.net/npm/three@0.160.0/build/three.module.js";


import Player from
"./src/player/Player.js";



const scene =
new THREE.Scene();


scene.background =
new THREE.Color(
0x87ceeb
);



scene.fog =
new THREE.FogExp2(

0x9bdcff,

0.002

);




const camera =
new THREE.PerspectiveCamera(

70,

window.innerWidth/window.innerHeight,

0.1,

2000

);



const renderer =
new THREE.WebGLRenderer({

canvas:
document.getElementById(
"gameCanvas"
),

antialias:true

});



renderer.setSize(

window.innerWidth,

window.innerHeight

);



renderer.shadowMap.enabled=true;



renderer.outputColorSpace =
THREE.SRGBColorSpace;



// 光照


const sun =
new THREE.DirectionalLight(

0xffffff,

3

);


sun.position.set(

100,

150,

50

);


sun.castShadow=true;


scene.add(
sun
);



scene.add(

new THREE.HemisphereLight(

0xbfe8ff,

0x446633,

1.5

)

);





// 地面

const ground =
new THREE.Mesh(

new THREE.PlaneGeometry(

500,

500

),


new THREE.MeshStandardMaterial({

color:0x55aa55

})

);


ground.rotation.x=
-Math.PI/2;


ground.receiveShadow=true;


scene.add(
ground
);






// 山体


for(
let i=0;i<20;i++
){


const m =
new THREE.Mesh(

new THREE.ConeGeometry(

10,

30,

8

),


new THREE.MeshStandardMaterial({

color:0x557755

})

);



m.position.set(

(Math.random()-0.5)*300,

15,

(Math.random()-0.5)*300

);



scene.add(m);


}





// 玩家

const player =
new Player(scene);





// 鼠标视角

let angle=0;


window.addEventListener(

"mousemove",

e=>{

angle -= e.movementX*0.002;

}

);





const keys={};


window.addEventListener(

"keydown",

e=>keys[e.code]=true

);


window.addEventListener(

"keyup",

e=>keys[e.code]=false

);






function animate(){


requestAnimationFrame(
animate
);



// 移动

let dir =
new THREE.Vector3();



if(keys.KeyW)
dir.z-=1;


if(keys.KeyS)
dir.z+=1;


if(keys.KeyA)
dir.x-=1;


if(keys.KeyD)
dir.x+=1;



dir.normalize();



player.group.position.addScaledVector(

dir,

0.15

);




// 镜头

camera.position.set(

player.group.position.x,

player.group.position.y+5,

player.group.position.z+10

);



camera.lookAt(

player.group.position

);



renderer.render(

scene,

camera

);



}


animate();

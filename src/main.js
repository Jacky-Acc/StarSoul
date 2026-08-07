import * as THREE from
"https://cdn.jsdelivr.net/npm/three@0.160.0/build/three.module.js";


import PlayerController from
"./src/PlayerController.js";


// ======================
// 场景
// ======================

const scene = new THREE.Scene();


scene.background =
new THREE.Color(
0x87ceeb
);


scene.fog =
new THREE.FogExp2(
0x9bdcff,
0.002
);



// ======================
// 摄像机
// ======================

const camera =
new THREE.PerspectiveCamera(

70,

window.innerWidth /
window.innerHeight,

0.1,

2000

);


camera.position.set(
0,
5,
10
);



// ======================
// 渲染器
// ======================

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





// ======================
// 光照
// ======================


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





// ======================
// 地面
// ======================

const ground =
new THREE.Mesh(

new THREE.PlaneGeometry(

500,

500

),


new THREE.MeshStandardMaterial({

color:0x55aa55,

roughness:1

})

);


ground.rotation.x =
-Math.PI/2;


ground.receiveShadow=true;


scene.add(
ground
);





// ======================
// 山体
// ======================

for(
let i=0;

i<20;

i++

){


const mountain =
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



mountain.position.set(

(Math.random()-0.5)*300,

15,

(Math.random()-0.5)*300

);


mountain.castShadow=true;


scene.add(
mountain
);


}





// ======================
// 玩家
// ======================


const player =
new PlayerController(

scene,

camera

);





// ======================
// 键盘移动
// ======================

const keys={};



window.addEventListener(

"keydown",

e=>{

keys[e.code]=true;

}

);



window.addEventListener(

"keyup",

e=>{

keys[e.code]=false;

}

);





// ======================
// 游戏循环
// ======================

function animate(){


requestAnimationFrame(
animate
);



if(player.update){

player.update(keys);

}



renderer.render(

scene,

camera

);



}



animate();





// ======================
// 窗口适配
// ======================

window.addEventListener(

"resize",

()=>{


camera.aspect =

window.innerWidth /
window.innerHeight;


camera.updateProjectionMatrix();


renderer.setSize(

window.innerWidth,

window.innerHeight

);


});
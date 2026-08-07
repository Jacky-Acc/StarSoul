import * as THREE from
"https://cdn.jsdelivr.net/npm/three@0.160.0/build/three.module.js";


// =====================
// 创建场景
// =====================

const scene = new THREE.Scene();


// 白天异星天空

scene.background =
new THREE.Color(
0x87ceeb
);


// 大气雾

scene.fog =
new THREE.FogExp2(

0x9bdcff,

0.002

);



// =====================
// 摄像机
// =====================

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

6,

12

);



// =====================
// Renderer
// =====================

const renderer =
new THREE.WebGLRenderer({

canvas:
document.getElementById(
"gameCanvas"
),

antialias:true

});


renderer.setPixelRatio(
window.devicePixelRatio
);


renderer.setSize(

window.innerWidth,

window.innerHeight

);


// 高质量渲染

renderer.shadowMap.enabled=true;


renderer.shadowMap.type =
THREE.PCFSoftShadowMap;


renderer.outputColorSpace =
THREE.SRGBColorSpace;


renderer.toneMapping =
THREE.ACESFilmicToneMapping;


renderer.toneMappingExposure =
1.2;





// =====================
// 太阳
// =====================

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


sun.shadow.mapSize.width=2048;

sun.shadow.mapSize.height=2048;


scene.add(
sun
);




// 环境光

const ambient =
new THREE.HemisphereLight(

0xbfe8ff,

0x557744,

1.5

);


scene.add(
ambient
);





// =====================
// 异星地面
// =====================

const ground =
new THREE.Mesh(

new THREE.PlaneGeometry(

500,

500,

100,

100

),


new THREE.MeshStandardMaterial({

color:0x4f9b52,

roughness:1

})

);


ground.rotation.x =
-Math.PI/2;


ground.receiveShadow=true;


scene.add(
ground
);






// =====================
// 异星山体
// =====================


for(
let i=0;

i<15;

i++
){


const mountain =
new THREE.Mesh(

new THREE.ConeGeometry(

10+

Math.random()*15,

30+

Math.random()*30,

8

),


new THREE.MeshStandardMaterial({

color:0x557755,

roughness:1

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







// =====================
// 玩家探索者
// =====================


const player =
new THREE.Mesh(

new THREE.CapsuleGeometry(

0.5,

1.5,

8,

16

),


new THREE.MeshStandardMaterial({

color:0xffffff,

metalness:0.5,

roughness:0.5

})

);



player.position.y=1;


player.castShadow=true;


scene.add(
player
);






// =====================
// 简单移动
// =====================

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





function update(){

const speed=0.15;


if(keys.KeyW)

player.position.z-=speed;


if(keys.KeyS)

player.position.z+=speed;


if(keys.KeyA)

player.position.x-=speed;


if(keys.KeyD)

player.position.x+=speed;


camera.position.x =
player.position.x;


camera.position.z =
player.position.z+10;


camera.lookAt(player.position);



}






// =====================
// 循环
// =====================

function animate(){

requestAnimationFrame(
animate
);


update();


renderer.render(

scene,

camera

);


}


animate();





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
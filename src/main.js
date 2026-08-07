import * as THREE from
"https://cdn.jsdelivr.net/npm/three@0.160.0/build/three.module.js";


import PlayerController from
"./PlayerController.js";

import Terrain from
"./Terrain.js";

import Plant from
"./Plant.js";

import Crystal from
"./Crystal.js";

import Creature from
"./Creature.js";

import Environment from
"./Environment.js";

import Base from
"./Base.js";

import Spaceship from
"./Spaceship.js";

import Tower from
"./Tower.js";


import PlayerData from
"./PlayerData.js";

import UI from
"./UI.js";


import Resource from
"./Resource.js";

import Quest from
"./Quest.js";

import Scanner from
"./Scanner.js";





// =======================
// 世界
// =======================

const scene =
new THREE.Scene();





// =======================
// 摄像机
// =======================

const camera =
new THREE.PerspectiveCamera(

75,

window.innerWidth /
window.innerHeight,

0.1,

1500

);


camera.position.set(

0,

5,

20

);





// =======================
// 渲染器
// =======================

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



renderer.shadowMap.enabled=true;





// =======================
// 环境
// =======================

new Environment(scene);




// =======================
// 星球生态
// =======================

new Terrain(scene);


new Plant(scene);


new Crystal(scene);




// =======================
// 文明设施
// =======================

new Base(scene);


new Spaceship(scene);


new Tower(scene);





// =======================
// 生物
// =======================

const creatures =
new Creature(scene);





// =======================
// 玩家数据
// =======================

const playerData =
new PlayerData();





// =======================
// UI
// =======================

const ui =
new UI(
playerData
);





// =======================
// 资源系统
// =======================

const resource =
new Resource(
scene
);





// =======================
// 任务系统
// =======================

const quest =
new Quest();





// =======================
// 扫描采集
// =======================

const scanner =
new Scanner(

camera,

resource,

playerData,

quest

);





// =======================
// 玩家
// =======================

const player =
new PlayerController(
camera
);






// =======================
// 游戏循环
// =======================

function animate(){


requestAnimationFrame(
animate
);



player.update();



creatures.update();



ui.update();



renderer.render(

scene,

camera

);



}



animate();





// =======================
// 屏幕适配
// =======================

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
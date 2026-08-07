import * as THREE from
"https://cdn.jsdelivr.net/npm/three@0.160.0/build/three.module.js";


// 玩家

import PlayerController from
"./PlayerController.js";


// 世界

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


// 文明

import Base from
"./Base.js";

import Spaceship from
"./Spaceship.js";

import Tower from
"./Tower.js";


// 游戏系统

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


// 剧情系统

import Intro from
"./Intro.js";

import AI from
"./AI.js";

import Story from
"./Story.js";

import Mission from
"./Mission.js";




// ==========================
// 世界创建
// ==========================


const scene =
new THREE.Scene();




// ==========================
// 摄像机
// ==========================


const camera =
new THREE.PerspectiveCamera(

75,

window.innerWidth /
window.innerHeight,

0.1,

2000

);



camera.position.set(

0,

5,

20

);




// ==========================
// 渲染器
// ==========================


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






// ==========================
// 星球环境
// ==========================


new Environment(scene);




// 地形

new Terrain(scene);



// 植物

new Plant(scene);



// 水晶

new Crystal(scene);






// ==========================
// 人类设施
// ==========================


new Base(scene);


new Spaceship(scene);


new Tower(scene);






// ==========================
// 异星生命
// ==========================


const creatures =
new Creature(scene);






// ==========================
// 玩家数据
// ==========================


const playerData =
new PlayerData();





// UI

const ui =
new UI(
playerData
);






// ==========================
// 资源系统
// ==========================


const resource =
new Resource(scene);






// 任务

const quest =
new Quest();



// 扫描

const scanner =
new Scanner(

camera,

resource,

playerData,

quest

);







// ==========================
// 剧情系统
// ==========================


// 开场

new Intro();



// AI

const ai =
new AI();



// 剧情

new Story(ai);



// 任务

const mission =
new Mission();






// ==========================
// 玩家
// ==========================


const player =
new PlayerController(
camera
);







// ==========================
// 游戏循环
// ==========================


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








// ==========================
// 屏幕适配
// ==========================


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
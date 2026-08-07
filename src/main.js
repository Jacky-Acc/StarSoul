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


// 环境

import Environment from
"./Environment.js";

import Atmosphere from
"./Atmosphere.js";

import Clouds from
"./Clouds.js";

import Water from
"./Water.js";


// 文明

import Base from
"./Base.js";

import Spaceship from
"./Spaceship.js";

import Tower from
"./Tower.js";


// 游戏

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


// 剧情

import Intro from
"./Intro.js";

import AI from
"./AI.js";

import Story from
"./Story.js";

import Mission from
"./Mission.js";


// 视觉升级

import PostProcessing from
"./PostProcessing.js";





// =======================
// 场景
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

2000

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



renderer.shadowMap.type =
THREE.PCFSoftShadowMap;






// =======================
// 后处理
// =======================

const post =
new PostProcessing(

renderer,

scene,

camera

);






// =======================
// 环境
// =======================


new Atmosphere(scene);


new Environment(scene);


new Clouds(scene);


new Water(scene);






// =======================
// 星球
// =======================


new Terrain(scene);



const plants =
new Plant(scene);



new Crystal(scene);







// =======================
// 文明
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
// 游戏数据
// =======================


const playerData =
new PlayerData();



const ui =
new UI(
playerData
);



const resource =
new Resource(scene);



const quest =
new Quest();



new Scanner(

camera,

resource,

playerData,

quest

);







// =======================
// 剧情
// =======================


new Intro();



const ai =
new AI();



new Story(ai);



new Mission();







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



plants.update();



ui.update();



post.render();



}



animate();








// =======================
// 自适应
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
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


import Environment from
"./Environment.js";


import Base from
"./Base.js";


import Spaceship from
"./Spaceship.js";


import Tower from
"./Tower.js";


import Creature from
"./Creature.js";




// =======================
// 创建世界
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



renderer.shadowMap.enabled = true;





// =======================
// 世界环境
// =======================

new Environment(
    scene
);





// =======================
// 自然生态
// =======================

new Terrain(
    scene
);



new Plant(
    scene
);



new Crystal(
    scene
);





// =======================
// 科技文明
// =======================

new Base(
    scene
);



new Spaceship(
    scene
);



new Tower(
    scene
);





// =======================
// 异星生命
// =======================

const creatures =
new Creature(
    scene
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



    renderer.render(

        scene,

        camera

    );



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
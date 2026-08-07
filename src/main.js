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



// =======================
// 世界创建
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

    1000

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



// 开启阴影

renderer.shadowMap.enabled = true;





// =======================
// 环境
// =======================

new Environment(
    scene
);




// =======================
// 地形
// =======================

new Terrain(
    scene
);




// =======================
// 植物
// =======================

new Plant(
    scene
);




// =======================
// 能量水晶
// =======================

new Crystal(
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



    renderer.render(

        scene,

        camera

    );


}



animate();





// =======================
// 自适应屏幕
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
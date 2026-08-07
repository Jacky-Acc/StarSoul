import * as THREE from
"https://cdn.jsdelivr.net/npm/three@0.160.0/build/three.module.js";


import PlayerController from
"./PlayerController.js";


import Terrain from
"./Terrain.js";



// =====================
// 创建世界
// =====================

const scene =
new THREE.Scene();


// 天空颜色

scene.background =
new THREE.Color(
    0x8fd3ff
);


// 空气雾效果

scene.fog =
new THREE.Fog(
    0x8fd3ff,
    80,
    300
);




// =====================
// 摄像机
// =====================

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

    8,

    20

);




// =====================
// 渲染器
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



// =====================
// 异星地形
// =====================

const terrain =
new Terrain(
    scene
);




// =====================
// 光照系统
// =====================


// 太阳

const sun =
new THREE.DirectionalLight(

    0xffffff,

    2.5

);


sun.position.set(

    50,

    100,

    30

);


scene.add(
    sun
);



// 环境光

const skyLight =
new THREE.HemisphereLight(

    0x87ceeb,

    0x446644,

    1.2

);


scene.add(
    skyLight
);




// =====================
// 玩家
// =====================


const player =
new PlayerController(
    camera
);




// =====================
// 动画循环
// =====================

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




// =====================
// 屏幕适配
// =====================


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


}

);
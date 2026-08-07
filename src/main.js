import * as THREE from
"https://cdn.jsdelivr.net/npm/three@0.160.0/build/three.module.js";


import PlayerController from
"./PlayerController.js";


// 场景

const scene =
new THREE.Scene();


scene.background =
new THREE.Color(
    0x87ceeb
);



// 摄像机

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
    3,
    10
);



// 渲染器

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



// 地面

const ground =
new THREE.Mesh(

    new THREE.PlaneGeometry(
        200,
        200
    ),


    new THREE.MeshStandardMaterial({

        color:0x3f9142

    })

);


ground.rotation.x =
-Math.PI/2;


scene.add(
    ground
);



// 光照

const sun =
new THREE.DirectionalLight(
    0xffffff,
    2
);


sun.position.set(
    50,
    100,
    50
);


scene.add(
    sun
);



const ambient =
new THREE.AmbientLight(
    0xffffff,
    0.5
);


scene.add(
    ambient
);



// 玩家控制器

const player =
new PlayerController(
    camera
);



// 游戏循环

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



// 自适应

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
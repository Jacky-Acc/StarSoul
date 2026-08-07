import * as THREE from 
"https://cdn.jsdelivr.net/npm/three@0.160.0/build/three.module.js";


// 创建场景
const scene = new THREE.Scene();


// 异星白天天空颜色
scene.background = new THREE.Color(
    0x87ceeb
);


// 创建摄像机
const camera = new THREE.PerspectiveCamera(
    75,
    window.innerWidth / window.innerHeight,
    0.1,
    1000
);


// 创建渲染器
const renderer = new THREE.WebGLRenderer({

    canvas: document.getElementById("gameCanvas"),

    antialias: true

});


renderer.setSize(
    window.innerWidth,
    window.innerHeight
);


// 地面
const groundGeometry =
    new THREE.PlaneGeometry(
        200,
        200
    );


const groundMaterial =
    new THREE.MeshStandardMaterial({

        color: 0x3f9142

    });


const ground =
    new THREE.Mesh(
        groundGeometry,
        groundMaterial
    );


ground.rotation.x =
    -Math.PI / 2;


scene.add(ground);



// 太阳光
const sunlight =
    new THREE.DirectionalLight(
        0xffffff,
        2
    );


sunlight.position.set(
    50,
    100,
    50
);


scene.add(sunlight);



// 环境光
const ambient =
    new THREE.AmbientLight(
        0xffffff,
        0.5
    );


scene.add(ambient);



// 摄像机位置
camera.position.set(
    0,
    5,
    10
);


// 看向地面
camera.lookAt(
    0,
    0,
    0
);



// 动画循环
function animate(){

    requestAnimationFrame(
        animate
    );


    renderer.render(
        scene,
        camera
    );

}


animate();



// 窗口适配
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
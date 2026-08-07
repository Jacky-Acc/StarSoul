import * as THREE from 
"https://cdn.jsdelivr.net/npm/three@0.160.0/build/three.module.js";


// ====================
// 基础场景
// ====================

const scene = new THREE.Scene();

scene.background = new THREE.Color(
    0x87ceeb
);


// ====================
// 摄像机
// ====================

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


// ====================
// 渲染器
// ====================

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


// ====================
// 地面
// ====================

const groundGeometry =
    new THREE.PlaneGeometry(
        200,
        200
    );


const groundMaterial =
    new THREE.MeshStandardMaterial({

        color:0x3f9142

    });


const ground =
    new THREE.Mesh(
        groundGeometry,
        groundMaterial
    );


ground.rotation.x =
    -Math.PI / 2;


scene.add(ground);


// ====================
// 光照
// ====================

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


scene.add(sun);



const ambient =
    new THREE.AmbientLight(
        0xffffff,
        0.6
    );


scene.add(ambient);


// ====================
// 玩家控制
// ====================

const keys = {};

window.addEventListener(
    "keydown",
    (event)=>{

        keys[event.code]=true;

    }
);


window.addEventListener(
    "keyup",
    (event)=>{

        keys[event.code]=false;

    }
);


// 移动速度

const speed = 0.15;



function playerMove(){


    if(keys["KeyW"]){

        camera.position.z -= speed;

    }


    if(keys["KeyS"]){

        camera.position.z += speed;

    }


    if(keys["KeyA"]){

        camera.position.x -= speed;

    }


    if(keys["KeyD"]){

        camera.position.x += speed;

    }


}



// ====================
// 鼠标视角
// ====================


let mouseDown=false;


let rotationX=0;
let rotationY=0;


document.addEventListener(
"click",
()=>{

    document.body.requestPointerLock();

});



document.addEventListener(
"mousemove",
(event)=>{


    if(
    document.pointerLockElement
    ){

        rotationY -=
        event.movementX *
        0.002;


        rotationX -=
        event.movementY *
        0.002;


        rotationX =
        Math.max(
            -1.5,
            Math.min(
                1.5,
                rotationX
            )
        );

    }

});



function cameraLook(){

    camera.rotation.order="YXZ";


    camera.rotation.y =
    rotationY;


    camera.rotation.x =
    rotationX;

}



// ====================
// 游戏循环
// ====================

function animate(){


    requestAnimationFrame(
        animate
    );


    playerMove();


    cameraLook();


    renderer.render(
        scene,
        camera
    );


}


animate();



// ====================
// 屏幕适配
// ====================


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
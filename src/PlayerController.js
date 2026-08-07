import * as THREE from
"https://cdn.jsdelivr.net/npm/three@0.160.0/build/three.module.js";


import Character from
"./Character.js";


import CameraFollow from
"./CameraFollow.js";



export default class PlayerController {


constructor(
scene,
camera
){


this.scene = scene;

this.camera = camera;



// 玩家模型

this.character =
new Character(
scene
);



this.position =
new THREE.Vector3(

0,

0,

20

);



this.velocity =
new THREE.Vector3();





// 移动状态

this.keys={};



this.speed=0.15;


this.runSpeed=0.3;


this.jumpPower=0.35;


this.gravity=-0.02;



this.ground=true;




// 摄像机

this.cameraFollow =
new CameraFollow(

camera,

this.position

);




this.setup();



}





setup(){



window.addEventListener(

"keydown",

(e)=>{


this.keys[e.code]=true;


}
);



window.addEventListener(

"keyup",

(e)=>{


this.keys[e.code]=false;


}
);



}







update(){



// 移动速度

let speed =
this.speed;



if(
this.keys["ShiftLeft"]
){

speed =
this.runSpeed;

}





// 前后

if(
this.keys["KeyW"]
){

this.velocity.z =
-speed;


}


else if(
this.keys["KeyS"]
){

this.velocity.z =
speed;


}

else{

this.velocity.z=0;

}





// 左右

if(
this.keys["KeyA"]
){

this.velocity.x =
-speed;


}


else if(
this.keys["KeyD"]
){

this.velocity.x =
speed;


}

else{

this.velocity.x=0;

}







// 跳跃

if(

this.keys["Space"]

&&

this.ground

){


this.velocity.y =
this.jumpPower;


this.ground=false;


}






// 重力

this.velocity.y +=
this.gravity;





this.position.add(
this.velocity
);





// 地面

if(
this.position.y<=0

){


this.position.y=0;


this.velocity.y=0;


this.ground=true;


}






// 更新角色

this.character.update(

this.position

);





// 镜头跟随

this.cameraFollow.update();




}




}
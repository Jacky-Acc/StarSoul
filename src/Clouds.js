import * as THREE from
"https://cdn.jsdelivr.net/npm/three@0.160.0/build/three.module.js";


export default class Clouds {


constructor(scene){


this.scene = scene;


this.create();


}




create(){


for(
let i=0;
i<30;
i++
){


const cloud =
new THREE.Mesh(


new THREE.SphereGeometry(

8,

16,

16

),


new THREE.MeshStandardMaterial({

color:0xffffff,

transparent:true,

opacity:0.75

})


);



cloud.scale.set(

2,

0.5,

1

);



cloud.position.set(

(Math.random()-0.5)
*300,


80+

Math.random()*30,


(Math.random()-0.5)
*300


);



this.scene.add(
cloud
);



}



}



}
import * as THREE from
"https://cdn.jsdelivr.net/npm/three@0.160.0/build/three.module.js";


export default class Plant {


constructor(scene){


this.scene=scene;


this.plants=[];


this.create();


}



create(){


for(
let i=0;
i<80;
i++
){



const plant =
new THREE.Group();



const stem =
new THREE.Mesh(

new THREE.CylinderGeometry(

0.2,

0.6,

6,

12

),


new THREE.MeshStandardMaterial({

color:0x3b8f50

})

);



plant.add(stem);





for(
let j=0;
j<5;
j++
){


const leaf =
new THREE.Mesh(

new THREE.SphereGeometry(

1.2,

12,

12

),


new THREE.MeshStandardMaterial({

color:
j%2?
0x66ff99:
0x44cc77

})

);



leaf.position.set(

Math.sin(j)*1.5,

3+j*0.4,

Math.cos(j)*1.5

);



plant.add(
leaf
);



}



plant.position.set(

(Math.random()-0.5)*180,

3,

(Math.random()-0.5)*180

);



this.scene.add(
plant
);


this.plants.push(
plant
);



}



}




update(){


this.plants.forEach(

(p,i)=>{


p.rotation.z =

Math.sin(

Date.now()*0.001+i

)*0.05;



}

);



}



}
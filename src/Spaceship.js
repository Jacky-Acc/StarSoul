import * as THREE from
"https://cdn.jsdelivr.net/npm/three@0.160.0/build/three.module.js";


export default class Spaceship {


constructor(scene){


this.scene=scene;


this.create();


}



create(){



const ship =
new THREE.Mesh(


new THREE.CapsuleGeometry(

3,

10,

8,

16

),


new THREE.MeshStandardMaterial({

color:0x888888,

metalness:1

})


);



ship.rotation.z =
Math.PI/2;



ship.position.set(

-30,

5,

-40

);



this.scene.add(
ship
);




const fire =
new THREE.PointLight(

0xff5500,

3,

20

);



fire.position.set(

-35,

5,

-40

);



this.scene.add(
fire
);



}



}
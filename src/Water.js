import * as THREE from
"https://cdn.jsdelivr.net/npm/three@0.160.0/build/three.module.js";


export default class Water {


constructor(scene){


this.scene=scene;


this.create();


}





create(){



const geometry =
new THREE.CircleGeometry(

30,

64

);



const material =
new THREE.MeshStandardMaterial({

color:0x0088aa,

transparent:true,

opacity:0.75,

metalness:0.8,

roughness:0.2

});



const water =
new THREE.Mesh(

geometry,

material

);



water.rotation.x =
-Math.PI/2;



water.position.set(

-40,

0.5,

20

);



this.scene.add(
water
);



}



}
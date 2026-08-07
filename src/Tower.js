import * as THREE from
"https://cdn.jsdelivr.net/npm/three@0.160.0/build/three.module.js";


export default class Tower {


constructor(scene){

this.scene=scene;

this.create();

}



create(){



const tower =
new THREE.Mesh(

new THREE.CylinderGeometry(

1,

2,

20,

16

),


new THREE.MeshStandardMaterial({

color:0x777777,

metalness:0.8

})

);



tower.position.set(

0,

10,

-60

);



this.scene.add(
tower
);




const light =
new THREE.PointLight(

0x00ffff,

5,

30

);



light.position.set(

0,

20,

-60

);



this.scene.add(
light
);



}


}
import * as THREE from
"https://cdn.jsdelivr.net/npm/three@0.160.0/build/three.module.js";


export default class Player {


constructor(scene){


this.scene=scene;


this.group =
new THREE.Group();



this.velocity =
new THREE.Vector3();



this.speed=0.15;



this.create();



scene.add(
this.group
);



}





create(){


// 身体

const body =
new THREE.Mesh(

new THREE.CapsuleGeometry(

0.5,

1.3,

8,

16

),


new THREE.MeshStandardMaterial({

color:0xddeeff,

metalness:0.7,

roughness:0.3

})

);


body.position.y=1.3;


body.castShadow=true;


this.group.add(body);





// 头盔

const helmet =
new THREE.Mesh(

new THREE.SphereGeometry(

0.45,

20,

20

),


new THREE.MeshStandardMaterial({

color:0x66ccff,

metalness:0.8,

roughness:0.2,

emissive:0x003344

})

);



helmet.position.y=2.5;


this.group.add(helmet);





// 能源核心

const core =
new THREE.Mesh(

new THREE.SphereGeometry(

0.12,

16,

16

),


new THREE.MeshBasicMaterial({

color:0x00ffff

})

);



core.position.set(

0,

1.5,

0.55

);



this.group.add(core);



}





update(){




}

}
import * as THREE from
"https://cdn.jsdelivr.net/npm/three@0.160.0/build/three.module.js";


export default class Character {


constructor(scene){


this.scene=scene;


this.model =
new THREE.Group();


this.create();



scene.add(
this.model
);



}



create(){



// 身体

const body =
new THREE.Mesh(

new THREE.CapsuleGeometry(

0.5,

1.5,

8,

16

),


new THREE.MeshStandardMaterial({

color:0xdddddd,

metalness:0.6

})

);



body.position.y=1.5;


this.model.add(body);





// 头盔

const helmet =
new THREE.Mesh(

new THREE.SphereGeometry(

0.45,

16,

16

),


new THREE.MeshStandardMaterial({

color:0x55ddff,

emissive:0x0088ff

})

);



helmet.position.y=2.8;


this.model.add(
helmet
);





// 能源核心

const core =
new THREE.Mesh(

new THREE.SphereGeometry(

0.15,

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



this.model.add(
core
);



}




update(position){


this.model.position.copy(
position
);


}



}
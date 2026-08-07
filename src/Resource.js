import * as THREE from
"https://cdn.jsdelivr.net/npm/three@0.160.0/build/three.module.js";


export default class Resource {


constructor(scene){


this.scene = scene;


this.items = [];


this.create();


}





create(){



for(
let i=0;
i<20;
i++
){


const crystal =
new THREE.Mesh(


new THREE.OctahedronGeometry(

1.5

),


new THREE.MeshStandardMaterial({

color:0x00ffff,

emissive:0x0088ff,

emissiveIntensity:2

})


);



crystal.position.set(


(Math.random()-0.5)
*120,


1.5,


(Math.random()-0.5)
*120


);



this.scene.add(
crystal
);



this.items.push({

object:crystal,

type:"crystal",

active:true

});



}



}





collectNear(position){



for(
const item of this.items
){



if(
item.active
&&

item.object.position.distanceTo(position)
<5

){



item.active=false;


item.object.visible=false;


return item.type;



}


}



return null;



}



}
import * as THREE from
"https://cdn.jsdelivr.net/npm/three@0.160.0/build/three.module.js";


export default class Atmosphere {


constructor(scene){


this.scene=scene;


this.create();


}



create(){



this.scene.fog =
new THREE.FogExp2(

0x9bdcff,

0.002

);



this.scene.background =
new THREE.Color(

0x87d8ff

);



}



}
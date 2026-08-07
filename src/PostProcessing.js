import * as THREE from
"https://cdn.jsdelivr.net/npm/three@0.160.0/build/three.module.js";


import {
EffectComposer
}
from
"https://cdn.jsdelivr.net/npm/three@0.160.0/examples/jsm/postprocessing/EffectComposer.js";


import {
RenderPass
}
from
"https://cdn.jsdelivr.net/npm/three@0.160.0/examples/jsm/postprocessing/RenderPass.js";


import {
UnrealBloomPass
}
from
"https://cdn.jsdelivr.net/npm/three@0.160.0/examples/jsm/postprocessing/UnrealBloomPass.js";



export default class PostProcessing {


constructor(
renderer,
scene,
camera
){


this.composer =
new EffectComposer(
renderer
);



this.composer.addPass(

new RenderPass(

scene,

camera

)

);



const bloom =
new UnrealBloomPass(

new THREE.Vector2(

window.innerWidth,

window.innerHeight

),

0.8,

0.4,

0.85

);



this.composer.addPass(
bloom
);



}



render(){


this.composer.render();


}


}
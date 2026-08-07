import * as THREE from
"https://cdn.jsdelivr.net/npm/three@0.160.0/build/three.module.js";



const canvas =
document.getElementById(
"gameCanvas"
);



const scene =
new THREE.Scene();



scene.background =
new THREE.Color(
0x87ceeb
);



const camera =
new THREE.PerspectiveCamera(

75,

window.innerWidth /
window.innerHeight,

0.1,

1000

);



camera.position.set(

0,

5,

10

);



const renderer =
new THREE.WebGLRenderer({

canvas:canvas,

antialias:true

});



renderer.setSize(

window.innerWidth,

window.innerHeight

);





// 地面

const ground =
new THREE.Mesh(

new THREE.PlaneGeometry(

200,

200

),


new THREE.MeshStandardMaterial({

color:0x55aa55

})

);



ground.rotation.x =
-Math.PI/2;



scene.add(
ground
);





// 光照

const light =
new THREE.DirectionalLight(

0xffffff,

2

);



light.position.set(

10,

20,

10

);



scene.add(
light
);





const player =
new THREE.Mesh(

new THREE.CapsuleGeometry(

0.5,

1,

8,

16

),


new THREE.MeshStandardMaterial({

color:0xffffff

})

);



player.position.y=1;



scene.add(
player
);






function animate(){


requestAnimationFrame(
animate
);



renderer.render(

scene,

camera

);


}



animate();






window.addEventListener(

"resize",

()=>{


camera.aspect =

window.innerWidth /

window.innerHeight;



camera.updateProjectionMatrix();



renderer.setSize(

window.innerWidth,

window.innerHeight

);


});
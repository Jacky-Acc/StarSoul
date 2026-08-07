import * as THREE from
"https://cdn.jsdelivr.net/npm/three@0.160.0/build/three.module.js";


export default class Crystal {


    constructor(scene){


        this.scene = scene;


        this.create();

    }




    create(){


        for(
            let i=0;
            i<25;
            i++
        ){


            const crystal =
            new THREE.Mesh(

                new THREE.OctahedronGeometry(
                    1.5+
                    Math.random()*2
                ),


                new THREE.MeshStandardMaterial({

                    color:0x00ccff,

                    emissive:0x0066ff,

                    emissiveIntensity:1

                })

            );



            crystal.position.set(

                (Math.random()-0.5)
                *120,


                2,


                (Math.random()-0.5)
                *120

            );


            this.scene.add(
                crystal
            );


        }


    }


}
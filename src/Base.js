import * as THREE from
"https://cdn.jsdelivr.net/npm/three@0.160.0/build/three.module.js";


export default class Base {


    constructor(scene){


        this.scene = scene;


        this.createBase();


    }



    createBase(){



        const floor =
        new THREE.Mesh(

            new THREE.CylinderGeometry(
                8,
                8,
                0.5,
                32
            ),

            new THREE.MeshStandardMaterial({

                color:0x555b65,

                metalness:0.8

            })

        );



        floor.position.set(
            20,
            0.3,
            -20
        );



        this.scene.add(
            floor
        );




        const dome =
        new THREE.Mesh(

            new THREE.SphereGeometry(
                6,
                32,
                16
            ),

            new THREE.MeshStandardMaterial({

                color:0x9ee8ff,

                transparent:true,

                opacity:0.45,

                metalness:0.5

            })

        );


        dome.scale.y = 0.6;


        dome.position.set(

            20,

            3,

            -20

        );


        this.scene.add(
            dome
        );



    }


}
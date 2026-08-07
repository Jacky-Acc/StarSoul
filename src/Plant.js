import * as THREE from
"https://cdn.jsdelivr.net/npm/three@0.160.0/build/three.module.js";


export default class Plant {


    constructor(scene){


        this.scene = scene;


        this.createPlants();


    }



    createPlants(){


        for(
            let i=0;
            i<60;
            i++
        ){


            const group =
            new THREE.Group();



            const stem =
            new THREE.Mesh(

                new THREE.CylinderGeometry(
                    0.2,
                    0.5,
                    5,
                    12
                ),

                new THREE.MeshStandardMaterial({

                    color:0x3d8f4a

                })

            );


            group.add(stem);



            const leaf =
            new THREE.Mesh(

                new THREE.SphereGeometry(
                    1.5,
                    16,
                    16
                ),

                new THREE.MeshStandardMaterial({

                    color:0x76d66b

                })

            );


            leaf.position.y = 3;


            group.add(leaf);



            group.position.set(

                (Math.random()-0.5)
                *150,


                2.5,


                (Math.random()-0.5)
                *150

            );


            group.scale.set(

                0.5+
                Math.random(),

                0.5+
                Math.random(),

                0.5+
                Math.random()

            );


            this.scene.add(group);


        }


    }


}
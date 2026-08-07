import * as THREE from
"https://cdn.jsdelivr.net/npm/three@0.160.0/build/three.module.js";


export default class Terrain {


    constructor(scene){


        this.scene = scene;


        this.createGround();


        this.createHills();


    }



    createGround(){


        const geometry =
        new THREE.PlaneGeometry(
            200,
            200,
            100,
            100
        );



        const position =
        geometry.attributes.position;



        for(
            let i=0;
            i<position.count;
            i++
        ){

            const x =
            position.getX(i);


            const z =
            position.getZ(i);



            const height =
            Math.sin(x*0.05)
            *
            Math.cos(z*0.05)
            *
            3;


            position.setY(
                i,
                height
            );


        }



        geometry.computeVertexNormals();



        const material =
        new THREE.MeshStandardMaterial({

            color:0x4c9b52,

        });



        const ground =
        new THREE.Mesh(
            geometry,
            material
        );


        ground.rotation.x =
        -Math.PI/2;



        this.scene.add(
            ground
        );


    }



    createHills(){


        const material =
        new THREE.MeshStandardMaterial({

            color:0x597d35

        });



        for(
            let i=0;
            i<8;
            i++
        ){


            const mountain =
            new THREE.Mesh(

                new THREE.ConeGeometry(
                    15,
                    30,
                    32
                ),


                material

            );



            mountain.position.set(

                (Math.random()-0.5)
                *
                120,


                15,


                -80
                -
                Math.random()*80

            );



            this.scene.add(
                mountain
            );


        }


    }


}
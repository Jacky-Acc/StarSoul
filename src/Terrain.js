import * as THREE from
"https://cdn.jsdelivr.net/npm/three@0.160.0/build/three.module.js";


export default class Terrain {


    constructor(scene){

        this.scene = scene;

        this.createGround();

        this.createMountains();

    }



    createGround(){


        const geometry =
        new THREE.PlaneGeometry(
            300,
            300,
            150,
            150
        );


        const vertices =
        geometry.attributes.position;



        for(
            let i = 0;
            i < vertices.count;
            i++
        ){

            const x =
            vertices.getX(i);


            const z =
            vertices.getY(i);



            let height =

            Math.sin(x * 0.05) *

            Math.cos(z * 0.05) *

            3;



            height +=

            Math.sin(x * 0.12) *

            Math.cos(z * 0.1);



            vertices.setZ(
                i,
                height
            );

        }



        geometry.computeVertexNormals();



        const material =
        new THREE.MeshStandardMaterial({

            color:0x4f9b55,

            roughness:1

        });



        const ground =
        new THREE.Mesh(
            geometry,
            material
        );


        ground.rotation.x =
        -Math.PI / 2;


        this.scene.add(
            ground
        );


    }




    createMountains(){


        const mountainMaterial =
        new THREE.MeshStandardMaterial({

            color:0x596b52,

            roughness:1

        });



        const rockMaterial =
        new THREE.MeshStandardMaterial({

            color:0x77806d,

            roughness:1

        });



        // 远处大型山脉

        for(
            let i = 0;
            i < 15;
            i++
        ){


            const height =
            40 +
            Math.random()*50;



            const mountain =
            new THREE.Mesh(

                new THREE.ConeGeometry(

                    20 +
                    Math.random()*20,

                    height,

                    32

                ),

                mountainMaterial

            );



            mountain.position.set(

                (Math.random()-0.5)
                *260,


                height/2,


                -120 -
                Math.random()*120

            );



            mountain.rotation.y =
            Math.random()*Math.PI;



            this.scene.add(
                mountain
            );


        }




        // 前景岩石

        for(
            let i = 0;
            i < 30;
            i++
        ){


            const rock =
            new THREE.Mesh(

                new THREE.DodecahedronGeometry(

                    2 +
                    Math.random()*4

                ),

                rockMaterial

            );



            rock.position.set(

                (Math.random()-0.5)
                *120,


                2,


                (Math.random()-0.5)
                *120

            );



            this.scene.add(
                rock
            );


        }


    }



}
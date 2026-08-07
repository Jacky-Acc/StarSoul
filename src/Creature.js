import * as THREE from
"https://cdn.jsdelivr.net/npm/three@0.160.0/build/three.module.js";


export default class Creature {


    constructor(scene){


        this.scene = scene;


        this.creatures = [];


        this.createCreatures();


    }




    createCreatures(){



        for(
            let i=0;
            i<12;
            i++
        ){


            const creature =
            new THREE.Group();




            // 身体


            const body =
            new THREE.Mesh(

                new THREE.SphereGeometry(
                    1.5,
                    20,
                    20
                ),


                new THREE.MeshStandardMaterial({

                    color:0x66ddcc,

                    emissive:0x008877,

                    emissiveIntensity:0.8

                })

            );



            creature.add(body);





            // 头部


            const head =
            new THREE.Mesh(

                new THREE.SphereGeometry(
                    0.8,
                    16,
                    16
                ),


                new THREE.MeshStandardMaterial({

                    color:0xb0ffff,

                    emissive:0x00ffff,

                    emissiveIntensity:1

                })

            );



            head.position.y = 1.8;


            creature.add(head);






            // 眼睛


            const eye =
            new THREE.Mesh(

                new THREE.SphereGeometry(
                    0.15,
                    8,
                    8
                ),

                new THREE.MeshBasicMaterial({

                    color:0xffffff

                })

            );


            eye.position.set(
                0,
                2,
                -0.7
            );


            creature.add(eye);







            creature.position.set(


                (Math.random()-0.5)
                *100,


                3,


                (Math.random()-0.5)
                *100


            );



            this.scene.add(
                creature
            );



            this.creatures.push(
                creature
            );


        }



    }






    update(){



        this.creatures.forEach(

            (creature,index)=>{


                creature.rotation.y +=
                0.003;


                creature.position.y +=

                Math.sin(

                    Date.now()*0.001
                    +
                    index

                )
                *
                0.002;



            }

        );



    }



}
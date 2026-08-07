import * as THREE from
"https://cdn.jsdelivr.net/npm/three@0.160.0/build/three.module.js";


export default class Environment {


    constructor(scene){


        this.scene = scene;


        this.createSky();


        this.createLight();


    }




    createSky(){


        this.scene.background =
        new THREE.Color(
            0x8ed6ff
        );


        this.scene.fog =
        new THREE.Fog(

            0x8ed6ff,

            80,

            350

        );


    }





    createLight(){


        const sun =
        new THREE.DirectionalLight(

            0xffffff,

            3

        );


        sun.position.set(

            80,

            120,

            50

        );


        this.scene.add(
            sun
        );



        const ambient =
        new THREE.HemisphereLight(

            0x87ceeb,

            0x446644,

            1.5

        );


        this.scene.add(
            ambient
        );


    }


}
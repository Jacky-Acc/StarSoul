export default class PlayerController {


    constructor(camera){


        this.camera = camera;


        this.keys = {};


        this.speed = 0.15;


        this.rotation = {
            x:0,
            y:0
        };


        window.addEventListener(
            "keydown",
            (event)=>{

                this.keys[event.code]=true;

            }
        );


        window.addEventListener(
            "keyup",
            (event)=>{

                this.keys[event.code]=false;

            }
        );


        document.addEventListener(
            "click",
            ()=>{

                document.body.requestPointerLock();

            }
        );


        document.addEventListener(
            "mousemove",
            (event)=>{


                if(
                document.pointerLockElement
                ){


                    this.rotation.y -=
                    event.movementX * 0.002;


                    this.rotation.x -=
                    event.movementY * 0.002;


                    this.rotation.x =
                    Math.max(
                        -1.5,
                        Math.min(
                            1.5,
                            this.rotation.x
                        )
                    );

                }


            }
        );


    }



    update(){


        // 镜头旋转

        this.camera.rotation.order =
        "YXZ";


        this.camera.rotation.y =
        this.rotation.y;


        this.camera.rotation.x =
        this.rotation.x;



        // 移动

        if(this.keys["KeyW"]){

            this.camera.position.z -=
            this.speed;

        }


        if(this.keys["KeyS"]){

            this.camera.position.z +=
            this.speed;

        }


        if(this.keys["KeyA"]){

            this.camera.position.x -=
            this.speed;

        }


        if(this.keys["KeyD"]){

            this.camera.position.x +=
            this.speed;

        }


    }


}
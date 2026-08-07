import * as THREE from
"https://cdn.jsdelivr.net/npm/three@0.160.0/build/three.module.js";

export default class PlayerController {


    constructor(camera){


        this.camera = camera;



        // 键盘状态

        this.keys = {};



        // 移动速度

        this.speed = 0.18;



        // 鼠标旋转

        this.rotation = {

            x:0,

            y:0

        };



        // 重力

        this.velocityY = 0;


        this.gravity = -0.02;



        // 地面高度

        this.groundHeight = 3;



        // 是否在地面

        this.onGround = false;



        // 跳跃力量

        this.jumpPower = 0.45;



        this.setupKeyboard();


        this.setupMouse();


    }





    setupKeyboard(){



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



    }






    setupMouse(){



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

                    event.movementX *

                    0.002;




                    this.rotation.x -=

                    event.movementY *

                    0.002;



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



        this.updateCameraRotation();



        this.updateMovement();



        this.updateGravity();



    }






    updateCameraRotation(){



        this.camera.rotation.order =
        "YXZ";



        this.camera.rotation.y =

        this.rotation.y;




        this.camera.rotation.x =

        this.rotation.x;



    }








    updateMovement(){



        const direction = new THREE.Vector3();

        const forward = new THREE.Vector3();



        this.camera.getWorldDirection(

            forward

        );



        forward.y = 0;



        forward.normalize();





        if(
        this.keys["KeyW"]
        ){

            direction.add(
                forward
            );

        }



        if(
        this.keys["KeyS"]
        ){

            direction.sub(
                forward
            );

        }



        const right =
        new THREE.Vector3();



        right.crossVectors(

            forward,

            new THREE.Vector3(

                0,

                1,

                0

            )

        );




        if(
        this.keys["KeyD"]
        ){

            direction.add(
                right
            );

        }



        if(
        this.keys["KeyA"]
        ){

            direction.sub(
                right
            );

        }



        if(
        direction.length()>0
        ){



            direction.normalize();



            this.camera.position.x +=

            direction.x *

            this.speed;




            this.camera.position.z +=

            direction.z *

            this.speed;



        }






        // 跳跃


        if(

        this.keys["Space"]

        &&

        this.onGround

        ){


            this.velocityY =
            this.jumpPower;


            this.onGround=false;


        }



    }







    updateGravity(){



        this.velocityY +=

        this.gravity;



        this.camera.position.y +=

        this.velocityY;





        if(

        this.camera.position.y <=

        this.groundHeight

        ){



            this.camera.position.y =

            this.groundHeight;



            this.velocityY = 0;



            this.onGround=true;



        }



    }



}
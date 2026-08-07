export default class CameraFollow {


constructor(camera,target){


this.camera=camera;

this.target=target;


}



update(){



const offset={

x:0,

y:5,

z:8

};



this.camera.position.set(

this.target.position.x+

offset.x,


this.target.position.y+

offset.y,


this.target.position.z+

offset.z


);



this.camera.lookAt(

this.target.position

);



}



}
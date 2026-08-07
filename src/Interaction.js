export default class Interaction {


constructor(camera,playerData){


this.camera =
camera;


this.playerData =
playerData;


this.setup();


}



setup(){


window.addEventListener(

"keydown",

(event)=>{


if(
event.code==="KeyE"
){


this.scan();


}


}


);


}





scan(){


console.log(
"扫描附近区域..."
);



this.playerData.useEnergy(5);



}



}
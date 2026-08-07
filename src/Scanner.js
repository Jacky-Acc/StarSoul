export default class Scanner {


constructor(
camera,
resource,
playerData,
quest
){


this.camera=camera;

this.resource=resource;

this.playerData=playerData;

this.quest=quest;



this.setup();


}





setup(){


window.addEventListener(

"keydown",

(e)=>{


if(
e.code==="KeyE"
){


this.scan();


}


}


);


}





scan(){



const item =

this.resource.collectNear(

this.camera.position

);



if(item==="crystal"){


this.playerData.addItem(

"crystal",

1

);



this.quest.addProgress();



console.log(

"获得能量水晶"

);



}



}



}
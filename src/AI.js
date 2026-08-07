export default class AI {


constructor(){

this.create();

}




create(){



this.box =
document.createElement(
"div"
);



this.box.style.position =
"fixed";


this.box.style.bottom =
"50px";


this.box.style.left =
"50px";


this.box.style.color =
"white";


this.box.style.fontSize =
"20px";



document.body.appendChild(
this.box
);



this.say(

"AI系统上线。检测到未知星球环境。"

);



}




say(text){


this.box.innerHTML=

"🤖 AI："+text;


setTimeout(()=>{


this.box.innerHTML="";


},5000);



}



}
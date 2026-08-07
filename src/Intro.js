export default class Intro {


constructor(){

this.finished=false;

this.create();


}



create(){


this.box =
document.createElement(
"div"
);



this.box.style.position =
"fixed";


this.box.style.top =
"40%";


this.box.style.width =
"100%";


this.box.style.textAlign =
"center";


this.box.style.color =
"white";


this.box.style.fontSize =
"32px";


this.box.style.fontFamily =
"Arial";


this.box.innerHTML =

`
STARSOUL
<br><br>

未知星球 E-07
<br>

登陆系统启动...

`;



document.body.appendChild(
this.box
);



setTimeout(()=>{


this.box.innerHTML=

`
STARSOUL
<br><br>

生命支持系统恢复
<br>

欢迎回来，探索者

`;



},3000);




setTimeout(()=>{


this.box.remove();


this.finished=true;



},6000);



}



}
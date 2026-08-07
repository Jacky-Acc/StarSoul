export default class UI {


constructor(playerData){


this.playerData =
playerData;


this.create();


}



create(){



this.container =
document.createElement(
"div"
);



this.container.style.position =
"fixed";


this.container.style.top =
"20px";


this.container.style.left =
"20px";


this.container.style.color =
"white";


this.container.style.fontSize =
"20px";


this.container.style.fontFamily =
"Arial";



document.body.appendChild(
this.container
);



}





update(){


this.container.innerHTML =


`
❤️ HP:
${this.playerData.health}

<br>

⚡ Energy:
${this.playerData.energy}

<br>

💎 Crystal:
${this.playerData.inventory.crystal}

<br>

🌿 Plant:
${this.playerData.inventory.plant}

`;



}



}
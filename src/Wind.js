export default class Wind {


constructor(){


this.time=0;


}



update(){


this.time +=0.01;


return Math.sin(
this.time
);


}


}
export default class Animation {


constructor(){


this.time=0;


}



update(){


this.time+=0.1;


return Math.sin(
this.time
);



}



}
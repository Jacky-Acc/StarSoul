from
"https://cdn.jsdelivr.net/npm/three@0.160.0/build/three.module.js"
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
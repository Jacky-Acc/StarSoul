export default class Mission {


constructor(){


this.list=[


{

name:"启动通讯塔",

done:false

},


{

name:"收集能源晶体",

target:5,

progress:0,

done:false

}


];


}



complete(index){


this.list[index].done=true;


}




}
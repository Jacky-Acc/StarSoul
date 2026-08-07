export default class Story {


constructor(ai){


this.ai=ai;


this.start();


}




start(){


setTimeout(()=>{


this.ai.say(

"扫描完成。星球存在未知生命活动。"

);


},7000);




setTimeout(()=>{


this.ai.say(

"建议前往通讯塔恢复远征网络。"

);


},12000);



}



}
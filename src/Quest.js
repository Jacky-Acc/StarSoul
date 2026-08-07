export default class Quest {


constructor(){


this.current = {

title:
"探索未知星球",

target:
"crystal",

need:5,

progress:0

};



}




addProgress(){


this.current.progress++;


}





isComplete(){


return (

this.current.progress >=

this.current.need

);


}


}
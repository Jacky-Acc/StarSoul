export default class PostProcessing {


constructor(
renderer,
scene,
camera
){


this.renderer = renderer;


}



render(){


this.renderer.render(
    this.scene,
    this.camera
);


}



}
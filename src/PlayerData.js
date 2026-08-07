export default class PlayerData {


    constructor(){


        this.health = 100;


        this.energy = 100;



        this.inventory = {

            crystal:0,

            plant:0

        };


    }




    addItem(
        item,
        amount
    ){


        if(
        this.inventory[item]
        !== undefined
        ){

            this.inventory[item]
            += amount;

        }


    }



    useEnergy(amount){


        this.energy -= amount;


        if(this.energy < 0){

            this.energy = 0;

        }


    }



    restoreEnergy(amount){


        this.energy += amount;


        if(this.energy > 100){

            this.energy = 100;

        }


    }


}
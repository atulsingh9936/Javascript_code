const Person =require ('./Basics7.js')
class Pet extends Person
{

    get location(){
        return "bluecross"
    }

    constructor(firstName, lastName){
            super(firstName, lastName)
    
    }
}

    let pet = new Pet("sam","san")
    pet.fullName()
    console.log(pet.location)
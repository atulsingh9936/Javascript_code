module .exports = class Person{

    age =25

    //location ="canada"

    get location(){
        return "canada"
    }

    constructor(firstName,LastName){

        this.firstName = firstName
        this.LastName = LastName

    }
    // methods
    fullName(){
        console.log(this.firstName+ this.LastName)  
    }


}

// let person = new Person("Atul","Singh")
// let person1= new Person("chris","Jones")
// console.log(person.age)
// console.log(person.location)
// console.log(person.fullName())
// console.log(person1.fullName())
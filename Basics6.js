// object is the collection of properties

let person={
    firstName :"John",
    lastName :"Doe",
    age :30,

  fullName:function()
    {
        console.log(this.firstName +this.lastName);
    }
}

console.log(person.fullName())

console.log("----------")

console.log(person.firstName)
console.log(person['lastName'])

person.firstName='Atul singh'
console.log(person.firstName)

person.gender ='male'

console.log(person)
delete person.gender
console.log(person)
console.log('gender' in person) 

// false
console.log("---------")

for(let key in person){
    console.log(person[key])
}
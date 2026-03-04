// object is the collection of properties

let person={
    firstName :"John",
    lastName :"Doe",
    age :30,
}

console.log(person.firstName)
console.log(person['lastName'])

person.firstName='Atul singh'
console.log(person.firstName)

person.gender ='male'

console.log(person)
delete person.gender
console.log(person)
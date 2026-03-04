let studentNames  = new Array("Atul","Satyarth","Rohit","Satyarth")
studentNames.unshift("renuka")
console.log(studentNames) // [ 'renuka', 'Atul', 'Satyarth', 'Rohit', 'Satyarth' ]
studentNames.pop()
console.log(studentNames) // [ 'renuka', 'Atul', 'Satyarth', 'Rohit' ]
studentNames.sort()
console.log(studentNames) // [ 'Atul', 'Rohit', 'Satyarth', 'renuka' ]
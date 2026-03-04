// block of code is call as function
 var greet = "Evening"
if(1==1){
    var greet = "Aftrenoon"
}
function add(a,b){
    var greet = "Morning"
   return a+b
}

let sum =add(2,3)
console.log(sum)
console.log(greet)


// do not have name => anonymous function --function expression

let sumofintegers= function(c,d){

    return c+d
}

let sumofNumbers =(c,d)=>c+d
console.log(sumofNumbers(2,3))
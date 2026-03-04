var marks = Array(6)
var marks=new Array(20,40,35,12,37,100)

var marks =[20,40,35,12,37,100]
submarks=marks.slice(2,5)
console.log(submarks)

console.log("-------------")

console.log(marks[2]) //35
marks[3]=14
console.log(marks) // [20,40,35,14,37,100]
console.log(marks.length) //6

marks.push(65) // add at the last
console.log(marks)
marks.pop()  // remove from the last
console.log(marks)
marks.unshift(12)   // add at the beginnning

console.log(marks)  // [ 12, 20, 40, 35, 14, 37, 100]

console.log(marks.indexOf(100))

// 120 is the array
console.log(marks.includes(120))

console.log("------")

var sum=0
for(let i=0;i<marks.length;i++){

    console.log(marks[i])
    sum = sum+marks[i]
}

console.log("Sum of all marks is: " + sum)


let total=marks.reduce((sum,mark)=>sum+mark,0)
console.log(total)



var scores=[12,13,14,16]
var evenscores=[]
for(let i=0;i<scores.length;i++){
    if (scores[i]%2==0){
    evenscores.push(scores[i])
    }
}
 console.log(evenscores)

 let newFilterEvenscores = scores.filter(score=>score%2==0)
 console.log(newFilterEvenscores)




 // map

let mappedArray= newFilterEvenscores.map(score=>score*3)
console.log(mappedArray)
let totalval=mappedArray.reduce((sum,val)=>sum+val,0)
console.log(totalval)


var scores1=[12,13,14,16]
let SumValue = scores1.filter(score=>score%2==0).map(score=>score*3).reduce((sum,val)=>sum+val,0)
console.log(SumValue)



let fruits = ["banana","mango","pomegrante","apple"]
console.log(fruits.sort())
console.log(fruits.reverse())


var scores1=[12,0o3,13,19,16,14]
console.log(scores1.sort())

scores1.sort(function(a,b){

    return a-b
})

console.log(scores1.sort((a,b)=>a-b))
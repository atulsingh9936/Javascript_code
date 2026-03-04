let day = 'tuesday '
console.log(day.length) //8
let subday=day.slice(0,4)
console.log(subday)
console.log(day[1]) // u

// tue day

let splitDay = day.split("s")
console.log(splitDay[1].length)
console.log(splitDay[1].trim().length)



let date ='23'
let nextdate='27'

let diff = parseInt(nextdate)-parseInt(date)
console.log(diff)
diff.toString()

let newQuote = day+ "is Funday" 
console.log(newQuote)

let val =newQuote.indexOf("day",5)
console.log(val)


// count the occurence of string

let count =0;
let value =newQuote.indexOf("day")
while(value!==-1){
    count++
    value = newQuote.indexOf("day",value+1)
}
console.log(count)
const flag = true

if (!flag){
    console.log("condition satisfied")
}
else{
    console.log(flag)
    console.log("condition not satisfied")
}



// let i =0
// while(i<10){
//     i++
//     console.log(i)
// }



let i =0
while(i>10){
    i++
    console.log(i)
}


do
 {
    i++
}while(i>10);
console.log(i)



for(let k=0;k<=10;k++){
    console.log(k)
}


let required = true
while(required){
    console.log(required)
    required= false
}


// from 1 to 10 give me common mutiples of 2 and 5
for(k=1;k<=10;k++)
if(k%2==0 && k%5==0){
    console.log(k)
    }


    console.log("--------")
  let n =0
    for(j=1;j<=100;j++)
       if(j%2==0 && j%5==0){
        n++
        console.log(j)
         if(n==3){
            break
        }


       }
    

/***

Subtask-1:

Display sum of all the odd numbers from 91 to 129.

 */
/***

Subtask-2:

Display sum of all the even numbers from 51 to 85.

 */

// sum of Odd using for loop

let sum=0;
for (let i=91;i<=129;i++){
    if(i%2===1){
        sum+=i;

    }
}
console.log("Sum of Odd Number: ",sum);

// sum of even using for loop

let Sum=0;
for (let i=51;i<=85;i++){
    if(i%2===0){
        Sum+=i;

    }
}
console.log("Sum of Even Number: ",Sum);



// sum of Odd using while loop
let total=0;
let i=91;
while(i<=129){
    if(i%2===1){
        total+=i;
       
    }
   
   
    i++;
}
console.log("sum of Odd",total);

// sum of Odd using while loop
let Total=0;
let j=51;
while(j<=85){
    if(j%2===0){
        Total+=j;
       
    }
    
    j++;
}
console.log("sum of even",Total);

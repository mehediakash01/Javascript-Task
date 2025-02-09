/***

Subtask-1:

Find all the odd numbers from 61 to 100.

 */


/***

Subtask-2:

Find all the even numbers from 78 to 98.

 */
// Odd using for loop
for (let i=61;i<=100;i++){
    if(i%2===1){
        console.log(i,"is Odd");
    }
}
// even using for loop

for (let i=78;i<=98;i++){
    if(i%2===0){
        console.log(i,"is even");
    }
}


// using while loop Odd
let i =61;
while(i<=100){
    if(i%2===1){
        console.log(i,"Odd");
    }
    i++;
}

// using while loop even
let j =78;
while(j<=98){
    if(j%2===0){
        console.log(j,"even");
    }
    j++;
}

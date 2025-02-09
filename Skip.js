/* 
Write a loop to print even numbers from 1 to 40. Use continue to skip odd numbers.
*/

// using for loop
for(let i=1;i<=40;i++){
    if (i%2===1){
        continue;
    }
    console.log(i);
}

// using while loop

let i=1;
while(i<=40){
    i++;
    if (i%2===1){
        continue;

    }
    console.log(i);
  
}

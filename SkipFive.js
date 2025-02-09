/*
display odd number from 55 to 85 and skip the numbers divisible by 5.
*/

// using for loop
for (let i =55;i<=85;i++){
    if (i%2===1 ){
        
        
        if(i%5===0){
            continue;
        }
      
        console.log(i);
       
        
    }

}

// using while loop
let i = 55;
while (i<=85){
    i++;
    if(i%2===1){
       
        if(i%5===0){
            continue;
        }
        console.log(i);
    }
   
}
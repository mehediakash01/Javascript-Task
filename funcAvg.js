//! Write a function called make_avg() which will take an array of integers and the size of that array and return the average of those values.

function make_avg(number,size){
    let sum =0;
  

    console.log(`size of an array is : ${size}`);
    for (let num of number){
      
        sum+=num;
       
    }
   return sum/size;

}

const arr = [1,2,3,4,5];
const size = arr.length;
const average = make_avg(arr,size);

console.log(average);


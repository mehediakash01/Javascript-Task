//! Find the lowest number in the array below.
const heights2 = [167, 190, 120, 165, 137,22,45,10];

function lowest (number){
    let low = number[0];
    for(let num of number){
  if (num<low){
    low = num;
  }
    }
    return low;

}
console.log(lowest(heights2));
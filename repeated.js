/*  You are given an array of numbers. Count how many times the a number is repeated in the array.

 sample-input: numbers = [5,6,11,12,98, 5]

 find: 5

 output: 2


 sample-input:

numbers = [5,6,11,12,98, 5]

 find: 25
 output: 0

*/ 


function repeated (numbers) {
    let count = 0;
    for (let number of numbers)
    {
        if (number===7){
            count++;
        }
    }
    return count;

}

const array = [7,11,10,2,7,15,7];
const array2 = [8,11,10,2,5,15,5];
console.log( repeated(array));
console.log( repeated(array2));


// Use a for...of loop to concatenate all the elements of an array into a single string.

 var numbers = ['Tom', 'Tim', 'Tin', 'Tik']

// Output:

// 'TomTimTinTik'
let together = "" ;

for(const num of numbers){
together+=num;
}
console.log(together);
// Write a JavaScript code to reverse the array colors without using the reverse method.

 const colors = ['red', 'blue', 'green', 'yellow', 'orange']

// Output:

// ['orange', 'yellow', 'green', 'blue', 'red']

// for (let i = colors.length-1; i >= 0;i--){
//     console.log(colors[i]);
    
// }
let rev = [];

for (let i =0;i<colors.length;i++){
    rev.unshift(colors[i]);
    

}
console.log(rev);
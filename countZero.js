//  !Write a function called count_zero() which will take a binary string (Binary string is a string which is consist of only 0 and 1) as parameter and count how many 0’s are there in that string.

function count_zero (binary){
    let cnt = 0;
    for (let count of binary ){
        
        if (count === "0"){
            cnt++;
        }
       
        
    }
 return cnt;
}

const binary_string = "00000";
const total = count_zero(binary_string);
console.log (total);


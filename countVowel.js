//! Write a function to count the number of vowels in a string.

function count_vowel(letter){
    let count =0;
    let vowels = ['a','e','i','o','u'];
    for (let word of letter )
    {
       for (let vowel of vowels ){
        if (word===vowel) {
            count++;
        }
       }
    }
    return count;

}

let str = "akash";

console.log(count_vowel(str));
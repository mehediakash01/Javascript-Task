// Check whether a string contains all the vowels a, e, i, o, u


const vowels = "alone elephant is rolling over the umbrella ";
let isvowel = true;
const requiredVowels = "aeiou"; 

for (let vowel of requiredVowels) {
    if (!vowels.includes(vowel)) {
        isvowel = false; 
        break; 
    }
    
}

if (isvowel) {
    console.log("The string contains all the vowels!");
} else {
    console.log("The string does not contain all the vowels.");
}

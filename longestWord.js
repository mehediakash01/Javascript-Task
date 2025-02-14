// Write a function to find the longest word in a given string.

// sample-input: I am learning Programming to become a programmer

// sample-output: Programming


function longest_word (word){
    let seperate = word.split(' ')
    let longest = "";
    for (let seper of seperate ){
        if (seper.length>longest.length){
            longest = seper;
        }
    }
  return longest;


}

const str = "Deadlifting is not everyoneeeeee's cup of tea";
console.log(longest_word(str));
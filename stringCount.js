// Count how many times a string has the letter a
const goat = " Ronaldo is the greatest of all time";

let count =0;
for (let i =0;i<goat.length;i++){
    if (goat[i]==='a'){
        count++;
    }
}
console.log(count);
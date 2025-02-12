// Count how many times a string has the letter a or A


const goat = " Ronaldo is the greatest of All time";

let count =0;
for (let i =0;i<goat.length;i++){
    if (goat[i]==='a' || goat[i]==='A'){
        count++;
    }
}
console.log(count);


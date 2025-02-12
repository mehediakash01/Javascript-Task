// Reverse the words of a sentence. Only the position of the word will be reversed. check out the output
 const statement = 'I am a hard working person'

// Output:

// 'person working hard a am I'



    let seperate = statement.split(' ');
   


let rev =[];


for(let i =seperate.length-1;i>=0;i--){
    rev.push(seperate[i]); 

 
   
   
}
let together =rev.join(' ');
console.log(together);
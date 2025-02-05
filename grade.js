/***

Grade Calculator

Create a simple JavaScript program that takes a student's score as input and returns their corresponding grade based on the following grading scale:

    A: 90-100
    B: 80-89
    C: 70-79
    D: 60-69
    F: 0-59

***/
let score = 59;


if (score >= 90){
    console.log("you got A");
}
else if (score >= 80){
    console.log("you got B");
}
 else if (score >= 70){
    console.log("you got C");
} else if (score >= 60){
    console.log("you got D");
} else if (score <= 59){
    console.log("you got F");
}
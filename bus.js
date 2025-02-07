/***

Ticket fare Calculator
    - Children (age < 10): free
    - Students get a 50% discount
    - Senior citizens (age >= 60) gets a 15% Discount
    - Otherwise Regular ticket fare 800 tk
*/

const age = 25;
let ticket =800;
const Students = true;
if (age<10){
    console.log("Free");
} 
else if (Students && age<=25){
    let discount = ticket*50/100;

    console.log(ticket-discount);
}
else if (age>=60){
  let  discount = ticket*15/100;
    console.log(ticket-discount);
}
else{
    console.log(ticket); 
}
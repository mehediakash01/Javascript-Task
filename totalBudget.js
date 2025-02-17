//! our task is to calculate the total budget required to buy electronics: Write a JavaScript function named calculateElectronicsBudget that takes in the number of laptop, tablets, and mobile and returns the total money required.




    function calculateElectronicsBudget (money){

  let total = 0 ;
  for (let electronic of money){

    
    
 let quantiyOfAll = electronic.price*electronic.quantiy;
 total +=quantiyOfAll;
 
  }

 return total;


    }

   let electronics = [
{name:"laptop", price:35000 , quantiy : 3},
{name:"tablet", price:15000 , quantiy : 2},
{name:"mobile", price:20000 , quantiy : 7}

   ]
console.log (calculateElectronicsBudget(electronics));
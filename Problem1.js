
function calculateVAT( price ) {
   
    if(typeof(price)!=="number"){
        return "Invalid";
    }
   
    else if (price<0){
        return "Invalid";
    }
    let vat = price*7.5/100;
    return vat;
}


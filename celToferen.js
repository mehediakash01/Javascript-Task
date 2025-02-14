//! Write a function to convert temperature from Celsius to Fahrenheit.



     function convert (temperature){
        let c = (temperature-32)*5/9;
        return c;

     }


let result = convert(90);



function convert2 (temp){
    let F = (temp*9/5)+32;
    return Math.round(F);
}
console.log(result.toFixed(0));
console.log(convert2(result));
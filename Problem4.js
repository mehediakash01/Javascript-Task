function  validProposal( person1 , person2 ) {
   
    if (typeof person1 !== "object" || typeof person2 !== "object" || person1 === null || person2 === null) {
        return "Invalid";
    }
   else if (person1.gender===person2.gender){
    return false;
   }
   else if (Math.abs(person1.age-person2.age)>7){
    return false;
   }
   return true;
}




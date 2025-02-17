function  validContact( contact ) {
  

 if (typeof(contact)!=="string" || contact === true){
    return "Invalid";
}
   else if (contact.length!==11){
        return false;
    }
    else if (contact.slice(0,2)!=="01"){
        return false;
    }
    
  
    for (let search of contact){
        if (search=== " "){
            return false;
        }
    }
    return true;
}


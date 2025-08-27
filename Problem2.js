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
    else if (contact.includes(" ")){
        return false;
    }
  
   for (let search of contact){
    if (search <"0" || search> "9"){
        return false;
    }
}
   return true;
}


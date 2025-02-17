function  willSuccess( marks ) {
    let pass =0;
    let fail =0;
    if (!Array.isArray(marks)){
        return "Invalid";
    }
    for (let check of marks){
        if (check.length===0){
            return false;
        }
    }
    for (let mark of marks){
        if (mark>=50){
            pass++;
        }
        else{
            fail++;
        }
    }
    if (pass>fail){
        return true;
    }
    else{
        return false;
    }
    
}


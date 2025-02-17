//! Find the friend with the smallest name.
const heights2 = ['rahim', 'robin', 'rafi', 'ron', 'rashed','ra'];

function smallest (names){
    let store = names[0];
    for(let name of names){
        if (name.length<store.length){
            store = name;
        }
    }
    return store;

}

console.log(smallest(heights2));


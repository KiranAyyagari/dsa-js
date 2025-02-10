const prime_brute = (num) => {
    if(num<2)
        return false;
    if(num===2 || num===3)
        return true;
    for(let i=2;i<num;i++){
        if(num%i===0)
            return false;
    }
    return true;
    }

const isprime = (num) => {
    if(num<2)
        return false;
    if(num===2)
        return true;
    if(num%2==0)
        return false;

    for(let i=3;i*i<=num;i=i+2){
        if(num%i===0)
            return false;
    }
    return true;
    
}

const isprime_optimized = (num) => {
    if(num<2)
        return false;
    if(num===2 || num===3)
        return true;

    if(num%2===0 || num%3===0)
        return false;

    for(let i = 5;i*i<=num;i=i+6){
        if(num%i===0 || num%(i+2)===0)
            return false;
    }
    return true; 
}

console.log(prime_brute(21));
console.log(isprime(21));
console.log(isprime_optimized(21));
const {isprime_optimized} = require('./prime');

const sieve = (num) =>{
    const prime_array = new Array(num).fill(true);

    for(let i=2;i*i<=num;i++){
        if(isprime_optimized(i)){
            for(let j=2*i;j<=num;j=j+i){
                prime_array[j] = false;
            }
        }
    }

    for(let i=2;i<=num;i++){
        if(prime_array[i])
            console.log(i);
    }
}

const sieve_optimized = (num) => {
    const prime_array = Array.from({ length: num }, () => true);

    for(let i=2;i<=num;i++){
        if(prime_array[i]){
            console.log(i+" ");
            for(let j=i*i;j<=num;j+=i){
                prime_array[j] = false;
            }
        }
    }

}

sieve(10);
sieve_optimized(10);
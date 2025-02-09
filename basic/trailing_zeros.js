
const { factorial_iterative } = require('./factorial');

const trailing_zeros_brute = (num) => {

    let factorial = factorial_iterative(num);
    console.log(factorial);
    let result = 0;

    while(factorial%10===0){
        factorial=Math.floor(factorial/10);
        result++;
    }
    return result;
}

const trailing_zeros = (num) => {
    let result = 0;
    for(i=5;i<=num;i=i*5){
        result+=num/i;
    }
    return result;
}

console.log(trailing_zeros_brute(100));
console.log(trailing_zeros(100));
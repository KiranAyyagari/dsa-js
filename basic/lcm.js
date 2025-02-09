const {gcd_recursive2} = require('./gcd');

const lcm_brute = (num1, num2) => {
    const max = Math.max(num1, num2);

    for(let i=max; i < (num1*num2);i++){
        if(i%num1 === 0 && i%num2 === 0)
            return i;
    }
}

const lcm = (num1, num2) => {
    return (num1 * num2)/(gcd_recursive2(num1, num2));
}

console.log(lcm_brute(6, 9));
console.log(lcm(6, 9));
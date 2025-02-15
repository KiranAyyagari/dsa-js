const power_brute = (num1, num2) => {
    let result = 1;
    for(let i=1;i<=num2;i++){
        result*=num1;
    }
    return result;
}

const power_recursive = (num1, num2) => {
    if(num2===0)
        return 1;

    let temp = power_recursive(num1, Math.floor(num2/2));
    temp = temp * temp;
    if(num2%2===0)
        return temp;
    else
        return temp*num1;
}

const power_iterative = (num1, num2) => {
    let result =1;

    while(num2>0){
        if(num2%2!==0)
            result*=num1;
        num1 = num1*num1;
        num2 = Math.floor(num2/2);
    }
    return result;
}



console.log(power_brute(3,3));
console.log(power_recursive(3,3));
console.log(power_iterative(3,3));
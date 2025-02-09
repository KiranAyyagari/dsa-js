const gcd_brute = (num1, num2) => {
    const min = Math.min(num1, num2);

    for(let i=min;i>=0;i--){
        if(num1%i === 0 && num2%i===0)
            return i;
    }
}

const gcd_recursive1 = (num1, num2) => {
   if(num1===0)
        return num2;
    if(num2===0)
        return num1;
    if(num1 > num2)
        return  gcd_recursive1(num1-num2, num2);
    return gcd_recursive1(num1, num2-num1);
}

const gcd_recursive2 = (num1, num2) => {
     if(num2===0)
         return num1;
     return gcd_recursive2(num2, num1%num2);
 }

 module.exports = {
    gcd_recursive2
 }
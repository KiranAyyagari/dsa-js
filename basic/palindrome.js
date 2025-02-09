const plaindrome = (num) => {
    let result=0;
    let number = num;
    while(num!==0){
        result=result*10+(num%10);
        console.log(result);
        num=Math.floor(num/10);
    }

    return result===number;
}

console.log(plaindrome(7721));
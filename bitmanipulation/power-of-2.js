const powerOfTwo = (num) => {
    if(num===0)
        return false;
    while(num != 1){
        if((num&1)!==0)
            return false;
        num = num >>1;
    }

    return true;
}

const powerOfTwo_efficient = (num) => {
    return num && ((num & (num-1))===0);
}

console.log(powerOfTwo(8));
console.log(powerOfTwo_efficient(8));
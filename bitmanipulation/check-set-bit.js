const checkSetBit_brute = (num, k) => {
    let x = 1;
    for(let i =0;i<k-1;i++){
        x=x*2;
    }
    if((num & x) !==0)
        return "Yes"
    else 
        return "No"
}

const checkSetBit_brute_1 = (num, k) => {
    for(let i=0;i<k-1;i++){
        num=Math.floor(num/2);
    }
    if((num&1)!=0)
        return "Yes";
    else
        return "No";
}

const checkSetBit_efficient_1 = (num, k) => {
    let x = 1 << (k-1);

    if((num && x) != 0)
        return "Yes";
    else 
        return "No";
}

const checkSetBit_efficient_2 = (num, k) => {
    num = num>>(k-1);
    if((num && 1) != 0)
        return "Yes";
    else 
        return "No";
}

console.log(checkSetBit_brute(14, 2));
console.log(checkSetBit_brute(14, 2));
console.log(checkSetBit_efficient_1(14, 2));
console.log(checkSetBit_efficient_2(14, 2));
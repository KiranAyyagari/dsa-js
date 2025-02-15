
let tbl = [];

const countSetBits_brute = (num) => {
    let result = 0;

    while(num >0){
        if((num&1)===1)
            result+=1
        num=Math.floor(num/2);
    }

    return result;
}

const countSetBits_brute_2 = (num) => {
    let result = 0;

    while(num >0){
            result+=(num&1);
        num=Math.floor(num/2);
    }

    return result;
}

//Brian kerningam algo
const countSetBits_efficient = (num) => {
    let result = 0;

    while(num >0){
           num = num & (num-1);
           result+=1;
    }

    return result;
}

const initialize  = () => {
    tbl[0] = 0;
    for(let i=1;i<256;i++){
        tbl[i] = tbl[(i & (i-1))]+1;
    }
}

const countSetBits_Optimized = (num) =>{
    initialize();
    return tbl[(num & 255)]+tbl[(num >> 8) & 255]+tbl[(num>>16)&255]+tbl[(num>>24)];
}

console.log(countSetBits_brute(13));
console.log(countSetBits_brute_2(13));
console.log(countSetBits_efficient(13));
console.log(countSetBits_Optimized(13));
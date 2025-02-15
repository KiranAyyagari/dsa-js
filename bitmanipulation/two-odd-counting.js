const twoOddCounting_brute = (arr) => {
    for(let i=0;i<arr.length;i++){
        let count = 0;
        for(let j=0;j<arr.length;j++){
            if(arr[i]===arr[j])
                count++;
        }
        if(count%2!==0)
            console.log(arr[i]);
    }
}

const twoOddCounting_efficient = (arr) => {
    let x = arr[0];

    for(let i = 1; i<arr.length;i++){
        x=x^arr[i];
    }

    let k = (x & (~(x-1)));

    let result1,result2 = 0

    for(let i  =0;i<arr.length;i++){
        if((arr[i]&k)!==0)
            result1=result1^arr[i];
        else
            result2=result2^arr[i];
    }
    console.log(result1, result2);
}


twoOddCounting_brute([4,4,3,3,5,5,4,6]);
twoOddCounting_efficient([4,4,3,3,5,5,4,6]);
const oneOddOccuring_brute = (arr) => {
    let count = 0;

    for(let i =0;i<arr.length;i++){
        for(let j=0;j<arr.length;j++){
            if(arr[i]===arr[j])
                count++;
            
        }
        if(count%2!==0)
            return arr[i];
    }
}

const oneOddOccuring_efficient = (arr) => {
    let result = 0;

    for(let i=0;i<arr.length;i++){
        result=result^arr[i];
    }
    return result;
}

console.log(oneOddOccuring_brute([8,3,3,8,8,8,9]));
console.log(oneOddOccuring_efficient([8,3,3,8,8,8,9]));
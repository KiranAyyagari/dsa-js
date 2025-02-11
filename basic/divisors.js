const divisors_brute = (num) =>{
    for(let i =1;i<=num;i++){
        if(num%i===0)
            console.log(i+" ");
    }
}
// divisors_brute(100)

const divisors = (num) =>{
    for(let i=1;i*i<=num;i++){
        if(num%i===0){
            if(Math.floor(num/i)===i)
            console.log(""+i);
        else
            console.log(i+" "+Math.floor(num/i)+" ");
}
    }
}

const divisors_optimized = (num) =>{
    const numArray = [];
    for(let i=1;i*i<=num;i++){
        if(num%i===0){
            if(Math.floor(num/i)===i)
            console.log(""+i);
        else{
            console.log(i+" ");
            numArray.push(num/i);
        }
}
    }
    numArray.sort((a,b) => a-b);
    console.log(...numArray);
}
divisors_optimized(100)
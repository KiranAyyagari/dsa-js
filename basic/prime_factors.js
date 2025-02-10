const prime_factors = (num) => {
    while(num%2===0){
        console.log(2+ " ");
        num=Math.floor(num/2);
    }

    for(let i =3 ;i*i<=num;i=i+2){
        while(num%i===0){
            console.log(i+" ");
            num=Math.floor(num/i);
        }
    }
    if(num>2)
        console.log(num);
}

const prime_factors_optimized = (num) => {
    while(num%2===0){
        console.log(2+" ");
        num=Math.floor(num/2);
    }

    while(num%3===0){
        console.log(3+" ");
        num=Math.floor(num/3);
    }

    for(let i=5;i*i<=num;i=i+6){
        while(num%i===0){
            console.log(i+" ");
            num=Math.floor(num/i);
        }
        while(num%(i+2)===0){
            console.log((i+2)+" ");
            num=Math.floor(num/(i+2));
        }
    }
    if(num>3)
        console.log(num);
}

prime_factors(12)

prime_factors_optimized(12)
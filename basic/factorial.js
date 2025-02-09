const factorial_iterative = (num) => {
    let result = 1;

    for(let i=2;i<=num;i++){
        result*=i;
    }
    return result;
}

const factorial_recursive = (num) => {
    if(num===0 || num===1){
        return 1;
    }

    return num * factorial_recursive(num-1);
}


module.exports = {
    factorial_iterative
}
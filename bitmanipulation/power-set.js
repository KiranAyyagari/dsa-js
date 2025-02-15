const powerSet = (str) => {
    let n = str.length;
    let psize = (1<<n);
    for(let i=0;i<psize;i++){
        for(let j=0;j<n;j++){
            if((i & (1<<j))!=0)
                console.log(str[j]);
        }
        console.log('\n');
    }
}

powerSet('ab');
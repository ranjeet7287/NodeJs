const Pattern1=(n)=>{
    for(let i=0;i<n;i++){
        let star='';
        for(let j=0;j<n;j++){
            star+='*'
        }
        console.log(star);
    }
}
const Pattern2=(n)=>{
    for(let i=0;i<n;i++){
        let star='';
        for(let j=0;j<=i;j++){
            star+='*';
        }
        console.log(star);
    }
}

const Pattern3=(n)=>{
    for(let i=0;i<n;i++){
        let space='';
        let star='';
        for(let j=0;j<n-i;j++){
            space+=' ';
        }
        for(let k=0;k<=i;k++){
            star+='*';
        }
        console.log(space,star);
    }
}

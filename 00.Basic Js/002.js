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

const Pattern4=(n)=>{
    for(let i=0;i<=n;i++){
        let space='';
        for(let j=0;j<n-i;j++){
            space+=' ';
        }
        let star='';
        for(let k=0;k<2*i-1;k++){
            star+='*';
        }
        console.log(space,star)
    }
}

const Pattern5=(n)=>{
    for(let i=0;i<n;i++){
        let star='';
        for(let j=0;j<n-i;j++){
            star+='*';
        }
        console.log(star);
    }
}

const Pattern6=(n)=>{
    for(let i=1;i<=n;i++){
        let space="";
        for(let j=1;j<=(n-i);j++){
            space+=" ";
        }
        let star="";
        for(let x=1;x<=(2*(i)-1);x++){
            star+="*";
        }
        console.log(space,star);
    }
    for(let i=1;i<=n-1;i++){
        let space="";
        for(let j=1;j<=i;j++){
            space+=" ";
        }
        let star="";
        for(let x=1;x<=(2*(n-i)-1);x++){
            star+="*";
        }
        console.log(space,star);
    }
    
}
Pattern6(3);
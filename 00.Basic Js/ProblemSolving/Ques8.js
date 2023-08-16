// Pattern 7
/**
 *   n=5          
 *     *       *
 *     * *   * *
 *     * * * * *   
 *     * *   * *
 *     *       *
 */

function Upper(n){
    for(let i=1;i<=((n-1)/2);i++){
        let starleft="";
        for(let j=1;j<=i;j++){
            starleft+=" * ";
        }
        let space="";
        for(let j=1;j<=(n-(2)*i);j++){
            space+=" _ ";
        }
        let starRight="";
        for(let j=1;j<=i;j++){
            starRight+=" * ";
        }
        console.log(starleft,space,starRight);
    }
}
function Middle(n){
    let star="";
    for(let i=1;i<=n;i++){
        star+=" * ";
    }
    console.log(star);
}
function Lower(num){
    let n=(num-1)/2;
    for(let i=1;i<=n;i++){
        let leftstar="";
        for(let j=1;j<=((n+1)-(i));j++){
            leftstar+=" * ";
        }
        let space="";
        for(let x=1;x<=(2*i-1);x++){
            space+=" _ ";
        }
        let rightStar="";
        for(let y=1;y<=((n+1)-(i));y++){
            rightStar+=" * ";
        }
        console.log(leftstar,space,rightStar);
    }
}

function Pattern(n){
    Upper(n);
    Middle(n);
    Lower(n)
}
Pattern(9);
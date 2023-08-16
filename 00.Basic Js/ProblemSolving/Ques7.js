// Pattern 6
/**
 *   n=3          
 *        * 
 *      * * *
 *    * * * * *  
 *      * * *
 *        *   
 */

function Pattern(n){
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
Pattern(7);
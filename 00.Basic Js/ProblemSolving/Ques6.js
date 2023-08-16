// Pattern 5
/**
 *        n=4            
 *        * * * *
 *        * * *
 *        * *  
 *        *  
 */

function Pattern5(n){
    for(let i=0;i<=n;i++){
        let star="";
        for(let j=0;j<=n-i;j++){
            star+="*";
        }
        console.log(star);
    }
}
Pattern5(5);
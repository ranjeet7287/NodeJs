// Pattern 2
/**
 *   n=4            
 *   * 
 *   * * 
 *   * * * 
 *   * * * *
 */

function Pattern2(n){
    for(let row=1;row<=n;row++){
        let star="";
        for(let i=1;i<=row;i++){
            star+="*";
        }
        console.log(star);
    }
}
Pattern2(6);
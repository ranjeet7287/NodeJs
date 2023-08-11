// Pattern 1
/**
 *   n=4            
 *   * * * *
 *   * * * *
 *   * * * *
 *   * * * *
 */
function Pattern(n){
    for(let row=1;row<=n;row++){
        let stars="";
        for(let i=1;i<=n;i++){
            stars+="*";
        }
        console.log(stars);
    }
}
Pattern(4);
Pattern(2);
Pattern(6);
// Pattern 3
/**
 *   n=4            
 *         * 
 *       * * 
 *     * * * 
 *   * * * *
 */

function Pattern3(n){
    for(let row=1;row<=n;row++){
        let space="";
        let stars="";
        for(let i=1;i<=n-row;i++){
            space+=" ";
        }
        for(let j=1;j<=row;j++){
            stars+="*";
        }
        console.log(space,stars);
    }
}
Pattern3(4);
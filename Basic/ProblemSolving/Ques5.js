// Pattern 4
/**
 *   n=4            
 *         * 
 *       * * *
 *     * * * * *
 *   * * * * * * *
 */

function Pattern4(n){
    for(let row=0;row<n;row++){
        let space="";
        for(let i=0;i<n-row;i++){
            space+=" ";
        }
        let star="";
        // odd number of stars in row
        for(let j=0;j<(2*row-1);j++){
            star+="*";
        }
        console.log(space,star);
    }
}
Pattern4(7);
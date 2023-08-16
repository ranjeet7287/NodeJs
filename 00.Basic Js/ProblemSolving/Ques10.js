/**
 *  n=4
 *        1
 *      1 2 1
 *    1 2 3 2 1
 *  1 2 3 4 3 2 1
 * 
*/
// function Pattern(n){
//     for(let i=1;i<=n;i++){
//         let space="";
//         for(let j=1;j<=n-i;j++){
//             space+=" ";
//         }
//         let incNum="";
//         for(let x=1;x<=i;x++){
//             incNum=incNum+x;
//         }
//         let decNum="";
//         for(let y=i;y>1;y--){
//             decNum=decNum+(y-1);
//         }
//         console.log(space,incNum,decNum);
//     }
// }
function Pattern(n){
    for(let i=1;i<=n;i++){
        let str="";
        for(let j=1;j<=n-i;j++){
            str+=" ";
        }
        let incNum=1;
        for(let x=1;x<=i;x++){
            str+=incNum;
        }
        let decNum=i-1;
        for(let y=i;y>1;y--){
            str+=decNum;
            decNum--;
        }
        console.log(str);
    }
}
Pattern(4);
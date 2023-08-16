// GCD of two number
function GCD(a,b){
    let ans=1;
    for(let i=2;i<=Math.min(a,b);i++){
        if(a%i==0 && b%i==0){
            ans=i;
        }
    }
    return ans;
}
console.log(GCD(28,24))
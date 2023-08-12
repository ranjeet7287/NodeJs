// Fibonacci Series
function Fibonacci(n){
    if(n==0){
        console.log(0)
        return ;
    }
    if(n>=1){
        console.log(0);
        console.log(1);
    }
    let prev=0;
    let current=1;
    for(let i=2;i<=n;i++){
        let nextvalue=prev+current;
        prev=current;
        current=nextvalue;
        console.log(nextvalue);
    }
}
Fibonacci(6);
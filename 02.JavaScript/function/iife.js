// IIFE --> Imedeadtly Invoked Function Expression
(function x(y){
    console.log('Hello',y)
})("Ranjeet ☠️");


function f(){
    return 1;
}
function g(){
    return 0;
}
var res=(function evaluate(i){
    if(i%2==0) return f();
    else return g();
})(2);
console.log(res);
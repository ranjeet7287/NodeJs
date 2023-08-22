/** 
 * fun -> HOF
*/
function fun(x,fn){
    for(let i=0;i<10;i++){
        console.log(x);
        x++;
    }
    fn();
}

fun(1,function execution(){
    console.log("I am excecuted also");
})
// fun function is HOF which take function as a argument
// here execution function is callBack function
// when we are calling a function inside a function is Callback Function.



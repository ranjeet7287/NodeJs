function getRandomInt(max){
    return Math.floor(Math.random() * max);
}
function createPromisewithTimeOut(){
    return new Promise(function exec(resolve,reject){
        console.log("Entering the execution callback in the promise constructor");
        setTimeout(function (){
            let num=getRandomInt(10);
            if(num % 2 == 0){
                resolve(num);
            }else{
                reject(num);
            }
        },1000)
        console.log("Exiting the execution callback in the promise constructor");
    });
}

console.log("Starting....");
const p = createPromisewithTimeOut();
console.log("We are now waiting for the promise to complete");
console.log("Currently my promise object is like ...",p);
console.log("Going to register my 1st set of handlers");
p.
then(
    function fulfillHandler(value) {console.log("Inside fulfill 1 handler with value",value);},
    function rejectHandler(value)  {console.log("Inside rejection 1 handler with value",value);}
);
console.log("Going to register my 2nd set of handlers");
p.
then(
    function fulfillHandler(value) {console.log("Inside fulfill 2 handler with value",value);},
    function rejectHandler(value)  {console.log("Inside rejection 2 handler with value",value);}
);
console.log("Ending...");


for(let i = 1 ; i < 1000000000 ; i++){ };
console.log("Loop is also ended");
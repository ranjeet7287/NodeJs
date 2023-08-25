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
    function fulfillHandler1(value) {
        console.log("Inside fulfill 1 handler with value",value);
        console.log("Prommise after fulfillment",p);
        setTimeout(function t(){console.log("Ended 0s timer")},0);
        console.log("exiting the fulfillment handler 1");
    },
    function rejectHandler1(value){
        console.log("Inside rejection 1 handler with value",value);
        console.log("Prommise after rejection",p);
        setTimeout(function t(){console.log("Ended 0s timer")},0);
        console.log("exiting the rejection handler 1")
    }
);
console.log("Going to register my 2nd set of handlers");
p.
then(
    function fulfillHandler2(value) {console.log("Inside fulfill 2 handler with value",value);},
    function rejectHandler2(value)  {console.log("Inside rejection 2 handler with value",value);}
);
console.log("Ending...");
setTimeout(function (){console.log("Global Timer of 5 sec")},5000);

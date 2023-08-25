function createPromise(){
    return new Promise(function exec(resolve,reject){
        console.log("Resolving the promise");
        resolve("Done");
    });
};

setTimeout(function process(){
    console.log("Timer is Completed");
},0);

let p = createPromise();
p.then(
    function fulfillHandler(value){
        console.log("we fullfilled with a value",value)
    },
    function rejectHandler(value){
        console.log("we rejected with a valude",value);
    }
);

console.log("Ending......");

// when our Promises is resolve or rejected the handlers persent inside a fullfilmentHanler or
// rejectHadler they are not immdeately called
// these handler wait in MicroTask Queue and Event Loop continously check wheather callStack is empty
// and no more golbal code to execute then it will run

// Event Loop going give first priorty to Microtask Queue the to Event Queue


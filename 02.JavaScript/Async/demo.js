function timeConsumingByLoop(){
    console.log("Loop Starts");
    for(let i=0 ; i<10000000000 ; i++){
        // some task
    }
    console.log("Loop End");
}

function timeConsumingByRuntimeFea0(){
    console.log("Starting timer0");
    setTimeout(function exec(){
        console.log("Completed the timer0");
        for(let i=0;i<1000000000;i++){

        }
    },5000)
}

function timeConsumingByRuntimeFea1(){
    console.log("Starting timer1");
    setTimeout(function exec(){
        console.log("Completed the timer1");
    },0)
}

function timeConsumingByRuntimeFea2(){
    console.log("Starting timer2");
    setTimeout(function exec(){
        console.log("Completed the timer2");
    },200)
}
console.log("Hi");

timeConsumingByLoop();
timeConsumingByRuntimeFea0();
timeConsumingByRuntimeFea1();
timeConsumingByRuntimeFea2()
timeConsumingByLoop();

console.log("Bye") 
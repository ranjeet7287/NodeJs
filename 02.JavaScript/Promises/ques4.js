function blocking_loop(){
    for(let i=0;i<1000000000;i++){

    }
}
console.log("Start of the file");
setTimeout(function timer1(){
    console.log("Timer 1 done")
},0);
blocking_loop();
let x = Promise.resolve("Navneet's Promise 1");
x.then(function processPromises(value){
    console.log("Whose promise ? " ,value );
    blocking_loop();
});
let y = Promise.resolve("Navneet's Promise 2");
y.then(function processPromises(value){
    console.log("Whose promise ? " ,value );
    setTimeout(function(){ console.log("ok Done")},0)
});
let z = Promise.resolve("Navneet's Promise 3");
z.then(function processPromises(value){
    console.log("Whose promise ? " ,value );
});
setTimeout(function timer2(){
    console.log("Timer 2 done");
},0);
console.log("End of the file");
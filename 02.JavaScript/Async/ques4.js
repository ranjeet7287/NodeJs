console.log("Hello World");
setTimeout(function exec(){
    console.log("Timer done");
    setTimeout(function exec(){
        console.log("wow another one");
    },10)
},0)
for(let i=1;i<1000000000;i++){

}
console.log("end");
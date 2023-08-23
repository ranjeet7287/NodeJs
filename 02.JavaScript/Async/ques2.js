console.log("Hello World");
setTimeout(function exec(){
    console.log("Timer Done");
},0);
for(let i=0;i<1000000000;i++){

}
console.log("End");

/**
 * 
 * Output :
 *   Hello World
 *   End
 *   Timer Done
 * 
 */
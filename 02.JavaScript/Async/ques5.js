let count = 0;
console.log("Sart");
let y = setInterval(function exec(){
    count++;
    console.log(count);
    if(count==15){
        clearInterval(y);
    }
},1000);
console.log("Processing");
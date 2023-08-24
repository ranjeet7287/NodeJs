function getRandomInt(max){
    return Math.floor(Math.random() * max);
}
function createPromisewithLoop(){
    return new Promise(function exec(resolve,reject){
        for(let i=0;i<10000000000;i++){ }
        let num=getRandomInt(10);
        if(num % 2 == 0){
            resolve(num);
        }else{
            reject(num);
        }
    });
}
const y = createPromisewithLoop();
console.log(y);

// Promises is a native JavaScript Code 
// here first loop will over then then promises will return our state
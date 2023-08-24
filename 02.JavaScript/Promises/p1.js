function getRandomInt(max){
    return Math.floor(Math.random() * max);
}
function createPromisewithLoop(){
    return new Promise(function exec(resolve,reject){
        setTimeout(function (){
            let num=getRandomInt(10);
            if(num % 2 == 0){
                resolve(num);
            }else{
                reject(num);
            }
        },5000)
        
    });
}
const y = createPromisewithLoop();
console.log(y);

// here there is no blocking code like loop intially promises in pending state
// after timer of 5 sec finish then Promises will return our updated state
// in b/w timer state you can run any code of  
function fetchData(url){
    return new Promise(function (resolve,reject){
        console.log("Satred downloading from",url);
        setTimeout(function processDowloading(){
            let data="Dummy Data";
            console.log("Downloaded Completed");
            resolve(data);
        },5000);
    });
}
console.log("Start");
let promiseObj=fetchData("bhebfewqeq3t");
promiseObj
.then(
    function resolve(value){
        console.log("value is " ,value);
    }
)
console.log("end");
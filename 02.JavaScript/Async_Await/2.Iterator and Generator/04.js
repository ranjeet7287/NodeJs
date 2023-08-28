function Downloaded(url){
    return new Promise(function exec(reslove,reject){
        console.log("Start downloading the content from this url ", url);
        setTimeout(function(){
            console.log("Downloaded Completed");
            let content="Dummy Data";
            reslove(content);
        },5000);
    })
  
};

function Writefile(content){
    return new Promise(function exec(reslove,reject){
        console.log("Started writing a file with ",content);
        setTimeout(function (){
            console.log("Completed the writing the data in a file");
            const filename="File.txt";
            reslove(filename);
        },3000);
    });  
};

function Upload(url,filename){
    return new Promise(function exec(reslove,reject){
        console.log("Started uploading ",filename,"on",url);
        setTimeout(function (){
            console.log("Uploaded Sucessfully");
            const satus="SUCCESS";
            reslove(satus);
        },2000);
    });
};

function doAfterReceving(value){
    let future = iter.next(value);
    console.log("Future is ",future);
    if(future.done) return;
    future.value.then(doAfterReceving);
}
function* Setps(){
    const downloadedData = yield Downloaded("www.chorbazaar.com");
    console.log("Downloaded data is ",downloadedData);
    const fileWritten = yield Writefile(downloadedData);
    console.log("filewritten is ",fileWritten);
    const uploadResponse =yield Upload("www.navjeet.com",fileWritten);
    console.log("Uplaod Response is",uploadResponse); 
    return uploadResponse;   
}
const iter = Setps();
const future = iter.next();
future.value.then(doAfterReceving);
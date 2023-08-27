// Tasks : (don't use promises only use Promises)
// 1. Write a function to download data from a url
// 2. Write a function to save that downloaded data in a file and return the filename
// 3. Write a function to upload the file written in previous step to a new url

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

Downloaded("www.xyz.com")
.then(function fullfiled(content){    
    console.log("We are now going to process the download data");
    return Writefile(content);
})
.then(function fullfiled(filename){
    console.log("We have downloaded and written the file , now we will upload");        
    return Upload("www.abc.com",filename);
})
.then(function fullfiled(status){
    console.log("we have uploaded the file with response ",status);
})

function Downloaded(url){
    return new Promise(function exec(reslove,reject){
        console.log("Start downloading the content from this url ", url);
        setTimeout(function(){
            console.log("Downloaded Completed");
            let content="Dummy Data";
            reject(content);
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
.then(
    function fullfiled(content){    
        console.log("We are now going to process the download data");
        return Writefile(content);
    },
    function reject(value){
        console.log("download reject value is :",value);
        throw value;
    }
)

.then(
    function fullfiled(filename){
        console.log("We have downloaded and written the file , now we will upload");        
        return Upload("www.abc.com",filename);
    },
    function reject(value){
        console.log("Writefile reject value is :",value);
        throw value;

    }
)
.then(
    function fullfiled(status){
        console.log("we have uploaded the file with response ",status);
    },
    function reject(value){
        console.log("Upload reject value is :",value);
    }
)

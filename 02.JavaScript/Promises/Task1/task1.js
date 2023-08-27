// Tasks : (don't use promises only use callbacks)
// 1. Write a function to download data from a url
// 2. Write a function to save that downloaded data in a file and return the filename
// 3. Write a function to upload the file written in previous step to a new url


function download(url,fun){
    console.log("Start Downloading data from the url",url);
    setTimeout(function down(){
        console.log("Downloading Completed");
        let data="Dummy Data";
        fun(data);
    },5000)
}

function writefile(data,fun){
    /**
     * writes the given data into a new file
     */
    console.log("Started writing a file with",data);
    setTimeout(function write(){
        console.log("Completed writing the data in a file");
        const filename="file.txt";
        fun(filename);
    },3000);
};

function upload(url,file,fun){
    /**
     * uplaod the data from a file to a given url
     */
    console.log("Started uploading",file,"on",url);
    setTimeout(function up(){
        console.log("Uploaded Completed");
        const response="SUCCESS";
        fun(response);
    },2000);
}

download("www.xyz.com",function processDownload(content){
    console.log("We are now going to process the download data");
    writefile(content,function processWritfile(filename){
        console.log("We have downloaded and written the file , now we will upload");
        upload("www.acb.com",filename,function(response){
            console.log("we have uploaded the file with response ",response);
        })
    })
})
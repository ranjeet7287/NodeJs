function download(url,cb){
    console.log("Started downloading from url",url);
    setTimeout(function exec(){
        console.log("Completed downloading after 2sec");
        const content = "ABCDEF";
        cb(content);
    },2000)
}
download("www.xyz.com",function processDownload(data){
    console.log("download data is ",data);
})

// Inversion of Control CallBack function (processDownload)
// control by download function 
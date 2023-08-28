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
async function Setps(){
    try{
        console.log("Starting Steps");
        const downloadedData = await Downloaded("www.chorbazaar.com");
        console.log("Downloaded data is ",downloadedData);
        return downloadedData;  
    }catch(err){
        console.log("We have hanndle the error",err);
    }finally{
        console.log("ending");
    }
}
Setps();
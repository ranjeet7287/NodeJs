function Downloaded(url,time){
    return new Promise(function exec(reslove,reject){
        console.log("Start downloading the content from this url ", url);
        setTimeout(function(){
            console.log("Downloaded Completed");
            let content="Dummy Data";
            reslove(content);
        },time);
    })
};

const d1=Downloaded("www.web1.com",4000);
const d2=Downloaded("www.web2.com",3000);
const d3=Downloaded("www.web3.com",2000);
const d4=Downloaded("www.web4.com",1000);
const d5=Downloaded("www.web5.com",100);
Promise.all([d1,d2,d3,d4,d5]).then(function process(values){
    console.log(values);
});
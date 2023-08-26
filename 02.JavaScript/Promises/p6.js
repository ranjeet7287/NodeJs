function download(url){
    console.log("started downloading content from ",url);
    return new Promise(function exec(res,rej){
        setTimeout(function p(){
            console.log("Completed downloading data in 2 sec");
            const content = "ABCDEFGHIJK";
            res(content);
        },2000);
    });
};

let x = download("www.xyz.com");
x
.then(
    function resolvehandler1(value){
        console.log("Content download is ",value)
        return "New Promise string";
    },
    function rejectHandler1(value){
        console.log("Content unable to downloaded",value);
    }
)
.then(
    function newFullFilledHandler(value){
        console.log("value from chained then promise ",value);
    }
)

// PROMISES CHAINING 
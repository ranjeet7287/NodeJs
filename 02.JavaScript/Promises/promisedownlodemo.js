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
x.then(
    function resolve(value){
        console.log("Content download is ",value)
    }
);

// here we are not giving access of control to our
// function 
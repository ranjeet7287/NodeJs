// function
// function CheckNumber(n){
//     if(n%2==0){
//         console.log("Even Number");
//     }else{
//         console.log("Odd Number");
//     }
// }
// CheckNumber(2);


function isEven(num){
    if(num%2==0){
        return true;
    }else{
        return false;
    }
}
for(let i=1;i<=20;i++){
    let Even=isEven(i);
    if(Even==true){
        console.log("Even :",i)
    }else{
        console.log("Odd :",i)
    }
}


let x=console.log("Ranjeet");

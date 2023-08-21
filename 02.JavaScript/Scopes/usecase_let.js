function fun(){
    for(var i=1;i<10;i++){

    }
    console.log(i);
}
fun();

function gun(){
    for(let i=1;i<10;i++){

    }
    console.log(i); 
}
gun();


function swap(x,y){
    if(x > y){
        let temp=x;
        x=y;
        y=temp;
    }
    return y - x;
}
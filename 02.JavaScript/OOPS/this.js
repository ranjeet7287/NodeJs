let iphone={
    name:"Iphone 15 pro",
    price:100000,
    description:"The new apple iphone 15 pro",
    rating:4.2,

    display(){
        console.log("First display",this);
    }
}

let macbook={
    name:"Macbook M2",
    price:1200000,
    description:"The new apple macbook m2",
    rating:4.5,

    display(){
        console.log("Second display",this);
    }
}
iphone.display();
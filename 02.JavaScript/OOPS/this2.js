const Iphone={
    name:"Iphone",
    category:"electronics",
    price:100000,
    rating:4.4,
    display: function (){
        let iphoneRed={
            name:"Iphone red",
            price:12000,
            print:()=>{
                // but here this is printing the calling context 
                // it is doing lexical scoping
                console.log(this);
            }
        }
        iphoneRed.print();
    }
}
Iphone.display();

// let Products = {
//     arr :[
//         {
//             name:"Iphone",
//             price:100000,
//             description:"The new apple iphone 15 pro",
//             rating:4.2,
//             getCategories: function print(){console.log(this.Categories)}
//         },
//         {
//             name:"Macbook",
//             price:1200000,
//             description:"The new apple Macbook",
//             rating:4.2,
//             getCategories: function print(){console.log(this.Categories)}
//         }
//     ],
//     Categories:"Electronics"
// }



const Iphone={
    name:"Iphone",
    category:"electronics",
    price:100000,
    rating:4.4,
    display:()=>{
        console.log(this);
    }
}

const Macbook={
    name:"Macbook",
    category:"electronics",
    price:100000,
    rating:4.4,
    display:function (){
        console.log(this);
    }
}
Iphone.display();
Macbook.display();
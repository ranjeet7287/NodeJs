class Product{
    #name; // private not visibile in outside // Access Modifer
    // price;
    // description;
    
    constructor (a,b,c){
        this.#name=a;
        this.price=b;
        this.description=c;
        // return 10;  return Primitive --> it will avoid this
        // return {}; //  constructor ment to return a object
        // return this; // if you don't return anyting, it is equal to saying return this
    }

    set setName(n){
        if(typeof(n)!='string') return;
        this.#name=n;
    }

    get getName(){
        return this.#name;
    }

    display(){
        // print the product
        console.log(this.#name,this.price,this.description);
    }
}

const p = new Product("Iphone",120000,"Apple new iphone");  // it is calling constructor
p.setName="Navneet Kour";
console.log(p);
p.display();
function Product(a,b,c){
    this.name=a;
    this.price=b;
    this.description=c;
}
const p = new Product("bag",100,"cool new bag");
console.log(p);
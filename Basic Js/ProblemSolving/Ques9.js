// Find Root of quadractic equation
function Roots(a,b,c){
    let sqrt=Math.sqrt(b**2-4*a*c);
    let Firstroot=((-b)+sqrt)/(2*a);
    let Seconderoot=((-b)-sqrt)/(2*a);
    console.log(Firstroot,Seconderoot)
}
Roots(2,5,3);
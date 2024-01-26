const OddEven=(num)=>{
    if(num % 2 == 0){
        console.log("Even Number",num)
    }else{
        console.log("Odd Number",num)
    }
}

const LargestOne=(first,Sec,third)=>{
    if(first > Sec && first >third){
        console.log("first paprameter is largest :",first);
    }else if(Sec > first && Sec > third){
        console.log("seconde paprameter is largest :",Sec);
    }else{
        console.log("third paprameter is largest :",third);
    }
}

const IsVaildTriangle=(s1,s2,s3)=>{
    if((s1+s2 > s3) && (s1+s3 > s2) && (s2+s3 > s1)){
        console.log("Yes it's valid Triangle : ",true)
    }else{
        console.log("it's not a valid Triangle : ",false)
    }
}

const EqilTriangle=(s1,s2,s3)=>{
    if(s1==s2 && s1==s2 && s2==s3){
        console.log(true)
    }else{
        console.log(false);
    }
}

const SumofNum=()=>{
    let i=1;
    let sum=0;
    while(i<=10){
        sum+=i;
        i++;
    }
    console.log(sum)
}


const PrimeOrNot2=(num)=>{
    let prime=false;
    for(let i=2;i<num;i++){
        if(num%i==0){
            prime=true;
            break;
        }
    }
    if(!prime){
        return "Not Prime";
    }else{
        return "Prime";
    }
}

const PrimeOrNot=(num)=>{
    for(let i=2;i<num;i++){
        if(num % i == 0){
            return "Not Prime";
        }
    }
    return "Prime Number";
}


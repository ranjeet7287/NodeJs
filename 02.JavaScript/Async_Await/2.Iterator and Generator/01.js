function fetchNextElement(array){
    let idx = 0;
    function next (){
        if(idx == array.length){
            return undefined;
        }
        const nextElement = array[idx];
        idx++;
        return nextElement;
    }
    return {next};
}
// somewhere we consume it 

const automaticFetcher = fetchNextElement([1,2,3,4,5,6,7]);
// inside automatic fetcher variable we can store next function
console.log(automaticFetcher.next());
console.log(automaticFetcher.next());
console.log(automaticFetcher.next());
console.log(automaticFetcher.next());
console.log(automaticFetcher)
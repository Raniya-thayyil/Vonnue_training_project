

let count=0

function countNum(arr,searchNum){
    for(let i=0;i<arr.length;i++){
        if(arr[i]==searchNum){
            count+=1;
        }
    }
    return count

}
console.log(countNum([1,2,2,3,2,2,2,7,6,9],2))

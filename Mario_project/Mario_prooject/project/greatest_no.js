

function getGreatest(){
    
    var listOfNums=document.getElementsByName("array[]").value;
    //listOfNums=[23,13,1,2,89]
    //var listOfNums=[];
    var max=listOfNums[0];
    for(i=1;i<listOfNums.length;i++){
        if(listOfNums[i]>max){
            max=listOfNums[i];
        }
    }
    console.log(max);
    let indexOfMax=listOfNums.indexOf(max);
    console.log(indexOfMax);
    return max;
}






// array1=[3,4,249,42,2]
// function getGreatest(){
    
//     var greatest=0;
//     for(i=0;i<array1.length;i++){
//         if(array1[i]>greatest){
//             greatest=array1[i];
//         }
//     }
//     alert(greatest)
// }
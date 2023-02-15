// let lapc=0;
// function inc(){
//     lapc=lapc+1
// }
// inc()
// console.log(lapc)

// let name="raniya";
// let greeting="Hi,my name is " ;
// let myGreet=greeting+name
// console.log(myGreet)

// let myPoint=3
// function add3(){
//     myPoint+=3;
// }
// function remove1(){
//     myPoint-=1;
// }
// add3()
// add3()
// add3()
// remove1()
// console.log(myPoint)

let countEl= document.getElementById("count");

let count=0;
function countIncrement(){
    count+=1;
    countEl.textContent=count;
}
function save(){
    console.log(count)
    let saveEl=count + " - "
    document.getElementById("saved-entries").textContent+=saveEl;
    countEl.textContent=0;
    count=0;
} 



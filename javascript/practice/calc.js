let num1=8;
let num2=2;
document.getElementById("num1").innerText=num1;
document.getElementById("num2").innerText=num2;
function addNums(){
    let addNum=num1+num2;
    document.getElementById("sum").textContent=addNum;
}
function addNums(){
    let addNum=num1+num2;
    document.getElementById("sum").textContent="sum:" + addNum;
}
function subNums(){
    let subNum=num1-num2;
    
    document.getElementById("sum").textContent="Diffrence:" + subNum;

}
function divNums(){
    let divNum=num1/num2;
    document.getElementById("sum").textContent="Division:" + divNum;
}
function mulNums(){
    let mulNum=num1*num2;
    document.getElementById("sum").textContent="Multilication:" + mulNum;
}
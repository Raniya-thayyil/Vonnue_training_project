// let clickBox=document.getElementById("box");
// clickBox.addEventListener("click",function(){
//     console.log("i want to open the box")
// })
// const container=document.getElementById("container");
// container.innerHTML="<button onclick='buy()'>buy</button>"
// function buy() {
//     container.innerHTML+="<p>thanks</p>"    
// }
//template string
const names="raniya";
const email=`hey ${names} there is a mail for you`;
console.log(email)


let myLead=[];
let inputEl=document.getElementById("input-el");
const ulEl=document.getElementById("ul-el")
let inputBtn=document.getElementById("input-btn");
inputBtn.addEventListener("click",function(){
   myLead.push(inputEl.value);
   inputEl.value="";
   renderLeads();
   
})
function renderLeads(){
    let listItems="";
for(let i=0;i<myLead.length;i++){
    //here instead of textCntnt we use innerhtml.so that it will take the li tag
    //ulEl.innerHTML+= "<li>" + myLead[i] + "</li>";
    //instead of doing like this we can use the createelement method,it will create the html lement hre li
    //creating element
    //const li=document.createElement("li");
    //see text content
    //li.textContent=myLead[i];
    //append to ul
    //ulEl.append(li);
    //listItems+= "<li><a target='_blank' href='" + myLead[i] + "'>" + myLead[i] + "</a></li>";
    //template string
    listItems+= `
    <li>
        <a target='_blank' href='${myLead[i]}'>${myLead[i]}</a>
    </li>
    `
    
}
ulEl.innerHTML=listItems;
}



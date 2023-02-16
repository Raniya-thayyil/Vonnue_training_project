//exercise
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
// const names="raniya";
// const email=`hey ${names} there is a mail for you`;
// console.log(email)

//16
//local storage-for persisting data on each refresh
//localStorage.setItem("myLeads","www.google.com")
//onsole.log(localStorage.getItem("myLeads"));
//localStorage.setItem("name","raniya")
//console.log(localStorage.getItem("name"))
//localStorage.clear()

let arr=`["raniya"]`;
//turn mylead string into an array
arr=JSON.parse(arr)
//push new value to array
arr.push("jone")
//turn array to string again
arr=JSON.stringify(arr)
console.log(typeof arr) //it is a string now
//exercise


let myLead=[];
let inputEl=document.getElementById("input-el");
const ulEl=document.getElementById("ul-el")
let inputBtn=document.getElementById("input-btn");

deleteBtn=document.getElementById("delete-btn");
tabBtn=document.getElementById("tab-btn");
//parsing to get string back to array
const leadsFromLocal=JSON.parse(localStorage.getItem("myLead")) 

//check if leadsFromLocal is truthy
 if(leadsFromLocal){
    myLead=leadsFromLocal;
    render(myLead);
 }
 function render(leads){
    let listItems="";
for(let i=0;i<leads.length;i++){
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
        <a target='_blank' href='${leads[i]}'>${leads[i]}</a>
    </li>`    
}
ulEl.innerHTML=listItems;
}

deleteBtn.addEventListener("click",function(){
    localStorage.clear()
    myLead=[];
    render(myLead);
});
//this function is to save the tab url while clicking the save button
tabBtn.addEventListener("click",function(){
    //to get the current tab
    chrome.tabs.query({active:true,currentWindow:true},function(tabs){
        console.log(tabs)
         myLead.push(tabs[0].url)
    localStorage.setItem("myLead",JSON.stringify(myLead));
    render(myLead)
    })
})

inputBtn.addEventListener("click",function(){
   myLead.push(inputEl.value);
   inputEl.value="";
   //set the array  into localstorage as string
   localStorage.setItem("myLead",JSON.stringify(myLead))
   render(myLead);
   console.log(localStorage.getItem("myLead"))
  
   
})



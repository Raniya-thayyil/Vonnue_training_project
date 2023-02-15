//var can be used troughout the program
var myName="raniya";
//alert(myName);
//let can be used only in the scope where we are declared it
let carName="audi";
//const is a variable that never change
const pi = 3.14;

var a;
var b=2;
a=7;
b=a;
// console.log(b);
// console.log(a);
var a=5;
var b=12
var str="raniya"
a=+3;
console.log(a)
str=str+12
b=b+"12"
console.log(b)
console.log(str);
var rem=11%4;
console.log(rem)
//escape characters
var myStr="i am a \"double quote\"ok"
console.log(myStr)
var itsStr='it\'s a string';
let text = "The character \\ is called backslash.";
console.log(text)
var escapeChar="fisrt\n\t\\second\n\t\t\t\\third"
console.log(escapeChar)
//str concatnation
var addStr="i come first"+" i come second"
console.log(addStr)
//length of string
nameLen=carName.length;
console.log(nameLen)
//bracket noation
carNameLetter=carName[3];
console.log(carNameLetter);
function wordAdd(myNoun,myAdj,myVerb,myAdverb){
    var result="";
    result+="The " + myAdj +" "+ myNoun+" "+myVerb+" to road";
    return result;
}
console.log(wordAdd("dog","big","ran","quickly"));
//array,nested array
var myArray=["joe",23,0,98,68,"tania"];
var nestArray=[["the universe",89,90],["galaxy",6709]];
console.log(nestArray[0][2]);
myArray[5]="june";
console.log(myArray);
myArray.push(["hey",90],["there",60])
myArray.pop()
console.log(myArray);
//shift function removes the first element instead of final element and also it returns the element
myArray.shift()
console.log(myArray);
//unshift function
myArray.unshift("hey")
console.log(myArray);
function myFuction(a,b){   
    // result=a+b;
    // return result 
    console.log(a-b);   
}
// console.log(myFuction(2,8));
myFuction(12,99);
//global scope
var myGlobal=10;
function fun1(){
    //if there is no var then it will be global and can be accessed bu fun2
    oopsGlobal=20

    if(typeof myGlobal!="undefined"){
        // output=myGlobal; 
        console.log(myGlobal)        
    }  
}
function fun2(){
    if(typeof oopsGlobal!="undefined"){
        console.log(oopsGlobal)
    }
    else{
        console.log("oops")
    }
}
fun1();
fun2();
//
var outFit="shirt";
function myOutFit(){
    var outFit="pants";
    return outFit;
}
console.log(myOutFit());
//it outputs pants which is in locally declared outFit
console.log(outFit);
//it outputs shirt which is global
function anyFun(num){
    return num+90;
}
x=anyFun(20)
console.log(x) 
arr=[1,2,3,4,5]
console.log(arr.shift())

function nextLine(arr1,item){
    arr1.push(item)
    return arr1.shift();
}
var testArray=[1,2,3,4,5]
console.log("before:"+ JSON.stringify(testArray));
console.log(nextLine(testArray,6))
console.log("After:"+ JSON.stringify(testArray));

function  trueFalse(isTrueFalse){
    if (isTrueFalse==true){
        return "yes true"
    }
    return "false"
}
console.log(trueFalse("99"));

function ifCheck(val){
   if (val<5){
    return "less than 5"
   }
   else if(val<10){
    return "less  than 10"
   }
   else{
    return "oops"
   }
}
console.log(ifCheck(90))
var names=["hole","eagle","birdie","par","bogey","double bogey"]
function golfScore(par,strokes){
    if(strokes==1){
        return names[0];
    }
    else if(strokes<=par-2){
        return names[1];
    }
    else if(strokes==par-1){
        return names[2];
    }
    else if(strokes==par){
        return names[3];
    }
    else if(strokes==par+1){
        return names[4];
    }
    else if(strokes==par+2){
        return names[5];
    }
}
console.log(golfScore(5,4));
//switch case
function switchCase(val){
    var ans="";
    switch(val){
        case 1:
            ans="alpha";
            break;
        case 2:
            ans="beta";
            break;
        case 3:
            ans="gamma";
            break;      
        default:
            ans= "nothing"
            break;
    }
    return ans
}
console.log(switchCase(4));

function myReturn(){
    console.log("hello");
    return "world";
    //if the return statement is reached excecution of the current function stops and control returns to the  calling location.
    console.log("byebye")
}
console.log(myReturn());

//return early
function abTest(a,b){
    if (a<=0 || b<=0){
        return undefined;
        return a*b;
    }
}
console.log(abTest(-2,2));
//objects
var myDog ={
    "name":"puppy",
    "legs":4,
    "tails":1,
    "friends":["pug,cat"],
    "dog eyes":2,
    12:"weight is 12"

};
console.log(myDog);
//accessing properties-3 ways
var dogName=myDog.name;
var dogEye=myDog["dog eyes"];
var Weight=12;
var dogWeight=myDog[Weight];
console.log(dogWeight)
//update property
myDog.name="tony";
console.log(myDog.name);
//add new proerty
myDog.bark="bow bow";
//delete property
delete myDog.tails;

function phoneLookup(val){
    var result="";
    var lookup={
        "alpha":"adams",
        "brvo":"botson",
        "charle":"chicago",
        "delta":"denvere",
        "echo":"easy"
    };
    result=lookup[val]
    return result;
}
console.log(phoneLookup("charle"));

//check if an object has a property-hasOwnProperty
function checkProp(checkProperty){
    if(myDog.hasOwnProperty(checkProperty)){
        return myDog[checkProperty];
    }
    else{
        return "not found"
    }
}
console.log(checkProp("name"));

//objects inside array
var arrayObj=[
    {
        "name":"jone",
        "age":24,
        "location":"canada",
        "number":90998787869,
        "skills":["developing","testing"]
    },
    {
        "name":"Raj",
        "age":24,
        "location":"usa",
        "number":90987687869,
        "skills":["qa","ba"]
    }
]
var getObj=arrayObj[1].skills[1]
console.log(getObj)

//accessing nested objects
var myStorage={
    "car":{
        "inside":{
            "glove box":"maps",
            "passenger seat":"crumbs"
        },
        "outside":{
            "trunk":"jack"
        }

    }
};
var gloveContent=myStorage.car.inside["glove box"];
console.log(gloveContent)

//records
var collection={
    "2548":{
        "album":"slippery",
        "artist":"bon jovi",
        "tracks":[
            "let it rock",
            "you give love a bad name"
        ]
    },
    "6758":{
        "album":"999",
        "artist":"prince",
        "tracks":[
            "1999",
            "little red covrette"
        ]
    },
    "1234":{
        "album":"paslmn",
        
    },    
}
//keep copy of collection
var collectionCopy=JSON.parse(JSON.stringify(collection))
//if have emplty string for value it completely deletes the property
function updateCollection(id,prop,value){
    if(value===""){
        delete collection[id][prop];
    }
    else if(prop==="tracks"){
        //creates the property if it does not exists
        collection[id][prop]= collection[id][prop] || [];
        collection[id][prop].push(value);
    }
    else{
        collection[id][prop]=value;
    }
    return collection;

}
console.log(updateCollection(1234,"artist","uuy"));
//while loop
var myArray =[];
var i=0;
while(i<5){
    myArray.push(i);
    i++;
}
console.log(myArray);
//for loop
var myArray =[];
var i=0;
for(var i=2;i<10;i++){
    myArray.push(i);
}
console.log(myArray);
ourArray=[1,23,2,3,4,55];
total=0;
for (var i =0;i<ourArray.length;i++){
total+=ourArray[i]
}
console.log(total);
//nested for loop
function multiplyArray(arr){
    var product=1
    for(i=0;i<arr.length;i++){
        for(j=0;j<arr[i].length;j++){
            product*=arr[i][j];
        }
    }
    return product;
}
var product=multiplyArray([[1,2],[2,3],[8,1,2]])
console.log(product);

var itrationItem=[];
var i=12;
do{
    itrationItem.push(i);
    i++;
}
while (i<5)
console.log(i,itrationItem);

//contact profile
var contactInfo=[
    {
        "firstName":"akira",
        "lastName":"laine",
        "num":"9877887865",
        "likes":["piza","coding","magic"]
    },
    {
        "firstName":"hary",
        "lastName":"potter",
        "num":"9988767865",
        "likes":["burger","black","magic"]
    },
    {
        "firstName":"krish",
        "lastName":"jon",
        "num":"768837463793",
        "likes":["java","white","foxes","opio"]
    },    
]
function lookupProfile(conName,prop){
    for(i=0;i<contactInfo.length;i++){
        if(contactInfo[i].firstName === conName ){
            return contactInfo[i][prop] ||"no such property";
        }
    }
    return "no such contact";
}
var data=lookupProfile("krish","likes");
console.log(data);
//random fraction generation
function randomFun(){
    return Math.random();
}
console.log(randomFun());
//random whole number
function randomWhole(){
    return Math.floor(Math.random()*5);
}
console.log(randomWhole())
//random num in a range
function randomRange(ourMin,ourMax){
    return Math.floor(Math.random()*(ourMax-ourMin+1))+ourMin;
        
}
var myRand=randomRange(10,15)
console.log(myRand);

//convert to int
function convertToInt(str){
    return parseInt(str);
    
}
console.log(convertToInt("56"))
//ternary operator condition?statement-if-true:statement-if-false
function checkTernary(a,b){
    return a===b?"yes":"no"
}
console.log(checkTernary(2,"2"))

function checkSign(num){
    return num>0?"positive":num<0?"negetive":"zero";
}
console.log(checkSign(0));

//arrow function
//it is an anonymous function,whenever there is an anonymous functin we can convert it into arrrow function
// var magic= function(){
//     return new Date();
// }
const magic = () =>new Date();
const myConcat =  (arr1,arr2) =>
    arr1.concat(arr2);

console.log(myConcat([1,2],[3,5,90]));

//callback
function myCallFun(val){
    console.log("hello",val);
}
const values=[1,2,3,4,5,6];
values.forEach(myCallFun);

const numArray=[2,34,2,45,21,-0.9,-8,9.8];
const squareList=(arr)=>{
    const squareListInt=arr.filter(num=>Number.isInteger(num)&&num>0).map(x=>x*x);
    return  squareListInt; 
};
const squareListInt=squareList(numArray )

const increment=(function(){
    return function increment(number,value=1){
        return number*value;
    }
})();
console.log(increment(5,2));
console.log(increment(5));

//rest operator
const sum=(function(){
    // return function sum(x,y,z){
    //     const args =[x,y,z];
        return function sum(...args){         
        return args.reduce((a,b)=> a+b,0)
    };
})();

console.log(sum(1,2,3));
var objA={
    a:1,
    b:2,
    c:'hello'
}
var objB={
    a1:1,
    b1:2,
    c:'hello there'
}
var obj2={
    ...objA,
    ...objB,
    z:32
};
console.log(obj2);
const source =[1,2,3,4,5,6,7]
//template literal-string interpolation
const person={
    name:"zodiac",
    age:56
};
const greeting=`hello,my name is ${person.name}! i am ${person.age} years old`;
console.log(greeting)

const createPerson=(name,age,gender)=>{
    // return{
    //     name:name,
    //     age:age,
    //     gender:gender
    // };
};
console.log(createPerson("tommy",54,"male"));
class spaceShuttle{
    constructor(targrtPlanet){
        this.targrtPlanet=targrtPlanet;
    }
}
var zeus=new spaceShuttle('jupitor') 
console.log(zeus.targrtPlanet)

function makeClass(){
    class vegetable{
        constructor(name){
            this.name=name;
        }
    }
    return vegetable
}
const vegetable = makeClass();
const carrot=new vegetable('carrot');
console.log(carrot.name)

//object exercise
let personObj={
    name:"raniya",
    age:32,
    country:"india"
}
function logData(){
    let personData= personObj.name + " is " + personObj.age + " years old and live in " + personObj.country;
    console.log(personData)
}
logData();
 //random get
let hands=["rock","paper","pencil"];
function handsPlay(){
    let rand=Math.floor(Math.random()*3);
    console.log(hands[rand])
}
//sortgame
handsPlay();
let fruits=["a","o","a","a","o"]
let appleShelf=document.getElementById("apple-shelf")
let orangeShelf=document.getElementById("orange-shelf");
function sortFruit(){
    for(let i=0;i<fruits.length;i++){
        if( fruits[i]==="a"){
            appleShelf.textContent+=fruits[i] + ",";
        }
        else{
            orangeShelf.textContent+=fruits[i]+ ",";
        }
    }
}
sortFruit();
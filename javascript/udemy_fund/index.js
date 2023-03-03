// let js='raniya'
// if(js){
//     //alert(js)
// }
// let isIsland="india"
// //types
// console.log(typeof null)
// //let can be reassigned
// let age=20
// age=21
// //const require a initial value
// //operator precedence
// console.log(7-8 > 7-4)
// let x,y;
// //- has highest precedence
// x=y=25-10-4
// //bmi
// let markHeight=1.69
// let markWeight=78
// let markMass=markHeight * markWeight
// let markBmi=markMass/markHeight **2
// console.log(markBmi)

// let jonHeight=1.88
// let jonWeight=95
// let jonMass=jonHeight*jonWeight
// let jonBmi=jonMass/jonHeight**2
// console.log(jonBmi)
// //multiline string -use templateliteral
// //type conversion 
// const inputYear='1991';
// console.log(Number(inputYear)+12)
// console.log(typeof NaN)
// console.log(String(23),23)
// //type coercion
// console.log('i am'+32+'yeas old')
// console.log('23'-'12'-9) //converts string to num automatically
// console.log('23'*'8')
// console.log(Boolean(undefined))
// //const fav=Number(prompt("enter your age"))
// if (fav===23){
//     console.log(`your age is ${fav}`)
// }
// if (fav!= '23'){
//     console.log("no")
// }
// const hasLicence=true
// const hasKnowDrive=false
// console.log(hasKnowDrive && hasKnowDrive)

// const a=96
// const b=108
// const c=89
// const dolScore=(a+b+c)/3
// const koalaScore=(88+91+110)/3
// if (dolScore>koalaScore && dolScore>=100){
//     console.log("dolphins wins")
// }
// else if(dolScore<koalaScore && koalaScore>=100){
//     console.log("koala wins")
// }
// else if(dolScore===koalaScore && (dolScore>=100 && koalaScore>=100)){
//     console.log("draw")
// }
// else{
//     console.log('no trophy')
//}

// const day='monday'
// switch(day){
//     case 'monday':
//         console.log('plan')
//         break
//     case 'tuesday':
//         console.log('video')
//         break    
//     default:
//         console.loh("not a day")    
// }

// const drink= 1>0?'wine':'water'
// console.log(drink)

// let bill=40
// let tip= bill<=300 && bill>=50? bill*(15/100):bill*(20/100)
// console.log(`the bill was ${bill} , the tip was ${tip} and the total value ${bill+tip}`)

'use strict';
// let hasLicence=false;
// const passTest=true;
// if(passTest) hasLicences=true;
// if(hasLicence) console.log('i can drive')
//reserved words canot use for vaiables
//const inteface='audi'

//function expression
// const calAge=function(b){
//     return 20-b
// }
// const a=calAge(4)
// console.log(a)

//arrow function
// const calAge=b=>20-b
// const age=calAge(3)
// console.log(age)
// const yearRet=year=>{
//     const age=2037-year
//     const ret=65-age
//     return ret;
// }
// const retAge=yearRet(1999)
// console.log(retAge)

//function calling anither function
// const cutFruit=function(fruit){
//     return fruit*4;
// }
// const fruitsProcessor=function(app,org){
//     const applePiece=cutFruit(app)
//     const orangePiece=cutFruit(org)
//     const juice=`juice with ${applePiece} apple and ${orangePiece} oranges`
//     return juice
// }
// console.log(fruitsProcessor(2,4))


// const calcAge=function(birthYr){
//     return 2037-birthYr
// }
// const yearsRetire= function (birthYr,firstName){
//     const age=calcAge(birthYr)
//     const retire=65-age
//     if(retire>0){
//         console.log(`${firstName} retires in ${retire} years`)
//         return retire
// }else{
//     console.log(`${firstName} already retired`)
//     return -1
    
// }
   
//     //return `${firstName} retires in ${retire} years`
// }
// console.log(yearsRetire(1991,'jonas'))
// console.log(yearsRetire('1970','mike'))

// const calcAverage=(a,b,c)=>(a+b+c)/3

// const scoreDOlphins=calcAverage(44,23,71)
// const scoreKoalas=calcAverage(65,54,49)

// const checkWinner=function(avgDolphin,avgKoalas){
//     if(avgDolphin>=2*avgKoalas){
//         console.log(`dolphins win (${avgDolphin} vs. ${avgKoalas})`)
//     }else if(avgKoalas>=2*avgDolphin){
//         console.log(`koala win (${avgKoalas} vs. ${avgKoalas})`)
//     }else{

//         console.log(`no one wins`)
//     }
// }
// checkWinner(scoreDolphins,scoreKoalas)

// const friend=['micheal','bob','marley']
// console.log(friend.includes('mike'))



// function calcTip(bills){
//  return bills>=50 && bills <= 300 ? bills * 0.15:bills * 0.2    

// }

// const bills=[125,555,44]
// const tips=[calcTip(bills[0]),calcTip(bills[0]),calcTip(bills[1])]
// const total=[bills[0]+tips[1],bills[1]+tips[1],bills[2]+tips[2]]
// console.log(bills,tips,total)
// console.log("hello")

// const jonArray=[
//     'jonas',
//     'manu',
//     23,
//     ['micheal','peter']
// ];

// const jon={
//     firstName:'jon',
//     lastNmae:'peter',
//     age:9,
//     job:'teacher',
//     friends:['micheal','peter']
// }
// const getBtn=document.getElementById('btn')
// getBtn.addEventListener('click',()=>{
// console.log('my name is jon')
// })
// console.log(jon.firstName)
// const interestJob=prompt('enter the job')
// console.log(jon[interestJob])

// console.log(`${jon.firstName} has ${jon.friends.length},and his best friend is called  ${jon.friends[0]}`)

// const jon={
//     firstName:'jon',
//     lastNmae:'peter',
//     age:9,
//     birthYr:1980,
//     job:'teacher',
//     friends:['micheal','peter'],
//     hasDriversLicence:true,
//     calcAge:function(){
//         return 2037-this.birthYr;
//     }
// };
// console.log(jon.calcAge())



// const mark={
//     fullName:'mark miller',
//     mass:78,
//     height:1.69,
//     calcBMI:function(){
//         this.BmiValue=this.mass/this.height**2
//         return this.BmiValue
//     }

// }
// const john={
//     fullName:'john smith',
//     mass:92,
//     height:1.95,
//     calcBMI:function(){
//         this.BmiValue=this.mass/this.height**2
//         return this.BmiValue
//     }

    
// }
// mark.calcBMI()
// john.calcBMI()
// console.log(mark.BmiValue,john.BmiValue)

// if(mark.BmiValue>john.BmiValue){
//     console.log(`${mark.fullName}'s bmi ${mark.BmiValue} is higher than ${john.fullName}'s ${john.mark}`)
// }
// else {
//     console.log(`${john.fullName}'s bmi ${john.BmiValue} is higher than ${mark.fullName}'s ${mark.mark}`)
// }

// const jonasArray=['jonas','smith','teacher',67,['hey','world'],32]
// for (let i=0;i<jonasArray.length;i++){
//     console.log(jonasArray[i])
// }

// const years=[2001,2002,2003,1999,2009]
// const age=[]
// for (let i=0;i<years.length;i++){
//     age.push(2050-years[i])

// }
// console.log(age)
// for(let i=0;i<jonasArray.length;i++){
//     if( typeof jonasArray[i]!== 'string'){
//         continue
//     }
//     console.log(jonasArray[i],typeof[i])

    
// }
// //break
// for(let i=0;i<jonasArray.length;i++){
//     if( typeof jonasArray[i]=== 'number'){
//         break
//     }
//     console.log(jonasArray[i],typeof[i])   
// }
// //looping backward
// for(let i=jonasArray.length-1;1>=0;i--){
//     console.log(i,jonasArray[i])
// }

let classObj = {
    "name" : "class A" ,
    "teacherName" : "Mary" ,
    "students" : [ 
        {
            "name" : "Ravi" ,
            "id" : "101" ,
            "marks" : [
                {"subject" : "English" , "mark" : 25}, 
                {"subject" : "Maths", "mark" : 48}, 
                {"subject" : "Physics", "mark" : 40}, 
                {"subject" : "Chemistry", "mark" : 30},
                {"subject" : "Computer", "mark" : 20}
            ]
        },
        {
            "name" : "Aju" ,
            "id" :  "102",
            "marks" : [
                {"subject" : "English" , "mark" : 35}, 
                {"subject" : "Maths", "mark" : 38}, 
                {"subject" : "Physics", "mark" : 33}, 
                {"subject" : "Chemistry", "mark" : 34},
                {"subject" : "Computer", "mark" : 30}
            ]
        },
        {
            "name" : "Mini SS" ,
            "id" : "103" ,
            "marks" : [
                {"subject" : "English" , "mark" : 12}, 
                {"subject" : "Maths", "mark" : 49}, 
                {"subject" : "Physics", "mark" : 18}, 
                {"subject" : "Chemistry", "mark" : 30},
                {"subject" : "Computer", "mark" : 40}
            ]
        },
        {
            "name" : "Binu" ,
            "id" : "104" ,
            "marks" : [
                {"subject" : "English" , "mark" : 49}, 
                {"subject" : "Maths", "mark" : 49}, 
                {"subject" : "Physics", "mark" : 47}, 
                {"subject" : "Chemistry", "mark" : 46},
                {"subject" : "Computer", "mark" : 50}
            ]
        }
    ]
}
// const marks= classObj.students[0].marks

// const john={
//     fullName:'john smith',
//     mass:92,
//     height:1.95,
//     student:[12,23,45]
   
// }
// john.weight=67
// john.student.push(67)
// console.log(john)

// function addData(a,b){
//     const marks={}
//     marks.subject=a
//     marks.mark=b
//     console.log(marks)
// }
// console.log(addData('english',54))


const std={
    "name" : "Rai" ,
    "id" : "101" ,
    "marks" : [
        {"subject" : "English" , "mark" : 25}, 
        {"subject" : "Maths", "mark" : 48}, 
        {"subject" : "Physics", "mark" : 40}, 
        {"subject" : "Chemistry", "mark" : 30},
        {"subject" : "Computer", "mark" : 20}
    ]
}

// classObj.students.push(std)
// console.log(classObj)



// function addObj(a,b,c){
//     std.name=a
//     std.id=b
//     std.marks=c
//     console.log(std)
// }
// const marks=[]
// addObj('roy','id',marks)


// //adding small objetc to array
// const smallObj={}
// function crObj(a,b){
    
//     smallObj.subject=a
//     smallObj.mark=b
//     console.log(smallObj)
//     return smallObj
// }
// crObj('english',90)
// std.marks.push(smallObj)
// console.log(std)


//1.adding student subject and mark in object to the marks array
// const fifthStudent={}
// const marks=[]
// const smallObj={}
// function addSubMarkObjToArray(sub,markObtained){
//     smallObj.subject=sub
//     smallObj.mark=markObtained
//     // console.log(smallObj)
//     return smallObj

// }
// addSubMarkObjToArray('english',90)
// addSubMarkObjToArray('Maths',60)
// // addSubMarkObjToArray('Physics',54)


// marks.push(smallObj)




//  //1.function to add object in students array

//  function addObjectInArray(stdName,stdId,markArr){
//     fifthStudent.name=stdName
//     fifthStudent.id=stdId
//     fifthStudent.marks=markArr
//     // console.log(fifthStudent)
//     return fifthStudent

// }   
// addObjectInArray('Raniya',105,marks)
// classObj.students.push(fifthStudent)
// console.log(classObj)

//sixthStudent



// const marks=[]
// function createMarkObj(subject1,mark1){
//     const newMarkObj={}
//     newMarkObj.subject=subject1
//     newMarkObj.mark=mark1
//     return newMarkObj
// }

// let markObj = createMarkObj('English',89)
// let markObj1 = createMarkObj('Maths',79)
// let markObj3 = createMarkObj('CS', 100)

// // marks.push(markObj,markObj1)




// function createStudentDetail(id, name1,emailid,age1,phn,mark2){
//     const studentDetail={}
//     studentDetail.id = id
//     studentDetail.name = name1
//     studentDetail.email = emailid
//     studentDetail.age = age1
//     studentDetail.phoneNumber = phn
//     studentDetail.marks = mark2
//     return studentDetail
// }

// function createMarks(...markObj){
//     let newMarks = []
//     newMarks.push(...markObj)
//     return newMarks
// }

// let std1marks = createMarks(markObj, markObj1, markObj3)
// let std1 = createStudentDetail(105, 'marry','mary@gmail.com',24,'7689809809',std1marks)
// classObj.students.push(std1)

// //let markChange = prompt('enter marks')
// console.log(classObj)
// // console.log(markChange)



//destructing

// const obj1={
//     name:'raniya',
//     place:'london',
//     pin:12,
//     friends:{
//         name:'jon',
//         location:'us'
//     }
// }

// const name=obj1.name
// const place=obj1.place
// const pin=obj1.pin

// const{
//     name,status=false,...others
// }=obj1

// console.log(name,status,others)

// const arr=[1,2,3,4,5,6,7]
// const [a,b,c,...other] = arr
// console.log(a,b,c,other)

// function test(...total){
//     // const arr=['raniya',23,'kerala']
//     // const [a,b,...others]=arr
//     // console.log(a,b,others)
    

//     console.log(total)

// }
// test(11,35,87,34)


const obj1 = {
    name:'raniya',
    place:'london',
    pin:12,
    friends:{
        name:'jon',
        location:'us'
    }
}
delete obj1.friends
console.log(obj1)

for (let key in obj1) {
    console.log(key)
}
 //forEach

 const arr = [
    {
        name:'raniya',
        mark:56,
        place:'london'
    },
    {
        name:'ram',
        mark:50,
        place:'us'
    },
    {
        name:'mary',
        mark:36,
        place:'uk'
    }
 ]
 let sum = 0
 arr.forEach((item) => {
    sum += item.mark
 })
 console.log(sum)

 const found = arr.find((item) => {
    return item.mark = 56
 })
 console.log(found)

let nums = [1,2,3,4]
// let product = 1
// //(item,index,array)
// nums.forEach((item,i,nums) => {
//      product *= item
     
   
// })
//console.log(product)
let result = nums.filter( n => n%2 === 0)
.map( n => n*2)
.reduce((a,b) => a+b);
console.log(result) 
const arr1 = [12,3,13,1,45]
console.log(arr1.map( n => n * 2)) 


const tripleValues = (x) => {
    return x * 3
}
const binaryValue = (x) => {
     return x.toString(2)
}

const output = arr1.map(binaryValue)
console.log(output)

console.log(arr1.filter( x => x % 2 === 0))



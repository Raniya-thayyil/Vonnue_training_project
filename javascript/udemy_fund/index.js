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
const cutFruit=function(fruit){
    return fruit*4;
}
const fruitsProcessor=function(app,org){
    const applePiece=cutFruit(app)
    const orangePiece=cutFruit(org)
    const juice=`juice with ${applePiece} apple and ${orangePiece} oranges`
    return juice
}
console.log(fruitsProcessor(2,4))

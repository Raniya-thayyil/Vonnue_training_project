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






//1.adding student subject and mark in object to the marks array
const fifthStudent={}
const marks=[]
const smallObj={}
function addSubMarkObjToArray(sub,markObtained){
    smallObj.subject=sub
    smallObj.mark=markObtained
    // console.log(smallObj)
    return smallObj

}
addSubMarkObjToArray('english',90)
addSubMarkObjToArray('Maths',60)
// addSubMarkObjToArray('Physics',54)


marks.push(smallObj)




 //1.function to add object in students array

 function addObjectInArray(stdName,stdId,markArr){
    fifthStudent.name=stdName
    fifthStudent.id=stdId
    fifthStudent.marks=markArr
    // console.log(fifthStudent)
    return fifthStudent

 }   
addObjectInArray('Raniya',105,marks)
classObj.students.push(fifthStudent)
console.log(classObj)
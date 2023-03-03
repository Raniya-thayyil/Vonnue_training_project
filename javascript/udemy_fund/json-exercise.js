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
                {"subject" : "Maths", "mark" : 988}, 
                {"subject" : "Physics", "mark" : 33}, 
                {"subject" : "Chemistry", "mark" : 34},
                {"subject" : "Computer", "mark" : 80}
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











// const deleteStudent = (id) => {
    
//     for (key in classObj) {
//         if (classObj[key] === students) {
//             // for(let i = 0;i < students.length;i++) {
//             //     if(id === students[i].id) {
//             //         delete students[i]   
//             //         console.log(classObj)                
//             //     }
//             // }
//             students.forEach((item) => {
//                 if (id === item.id) {
//                     delete item
//                     console.log(classObj)
//                 }
//             })
//         }
       
//     }
// }
// deleteStudent('103')



// const editMarkOfStudent = (id,subject1) => {
//     for (let key in classObj) {
//         students = classObj.students
//         if (classObj[key] === students) {
//             for (let i = 0; i < students.length; i++) {
//                 if (id === students[i].id) {
//                     //students[i].marks[0].mark = 90
//                     //console.log(students[i])
//                     students[i].marks.forEach( item => {
//                         if (item.subject === subject1) {
//                             item.mark = 70
//                             console.log(classObj)
//                         }
//                     })
//                 }
//             }
//         }
//     }
// }



//add a subject and  field in  marks array

// const addSub = (subject,mark) => {
//     const subMark = {
//       subject : subject,
//       mark : mark
//     }
    
    
//  }
 
//  const addStudentId = () => {
//      students = classObj.students
//      students.forEach( (item) => {
//          item.marks.map()
        
//      })
     
//  }
//  addStudentId()


const totalMarks = () => {
    let students = classObj.students
    let arr = []
    let topMark

    for (let i = 0; i < students.length; i++) {
        let totalMarks = 0;

        for (let j = 0; j < students[i].marks.length; j++) {
            totalMarks += students[i].marks[j].mark
            // let topper =  students[i]
            // let topperMark = totalMark         


        }

        arr.push(totalMarks)

         topMark = arr[0]
       
        for (i = 0; i < arr.length; i++) {
            if (arr[i] > topMark) {
                topMark = arr[i]
                

            }
        }

    }
    console.log(topMark)
    

}
totalMarks()
















// //1.adding student subject and mark in object to the marks array
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

//  }   
// addObjectInArray('Raniya',105,marks)
// classObj.students.push(fifthStudent)
// console.log(classObj)
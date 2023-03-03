
let classObj = {
    "name": "class A",
    "teacherName": "Mary",
    "students": [
        {
            "name": "Ravi",
            "id": "101",
            "marks": [
                { "subject": "English", "mark": 25 },
                { "subject": "Maths", "mark": 48 },
                { "subject": "Physics", "mark": 40 },
                { "subject": "Chemistry", "mark": 30 },
                { "subject": "Computer", "mark": 20 }
            ]
        },
        {
            "name": "Aju",
            "id": "102",
            "marks": [
                { "subject": "English", "mark": 35 },
                { "subject": "Maths", "mark": 38 },
                { "subject": "Physics", "mark": 33 },
                { "subject": "Chemistry", "mark": 34 },
                { "subject": "Computer", "mark": 30 }
            ]
        },
        {
            "name": "Mini SS",
            "id": "103",
            "marks": [
                { "subject": "English", "mark": 1120 },
                { "subject": "Maths", "mark": 49 },
                { "subject": "Physics", "mark": 18 },
                { "subject": "Chemistry", "mark": 30 },
                { "subject": "Computer", "mark": 40 }
            ]
        },
        {
            "name": "Binu",
            "id": "104",
            "marks": [
                { "subject": "English", "mark": 49 },
                { "subject": "Maths", "mark": 49 },
                { "subject": "Physics", "mark": 47 },
                { "subject": "Chemistry", "mark": 46 },
                { "subject": "Computer", "mark": 50 }
            ]
        }
    ]
}


//Write a function to create a user object from the arguments given.
//Take the following details as an argument: name, email, age and phone number

//creating Objects with subjct and marks
// const createSubMarkobj = (subject, mark) => {
//     const subMarkObject={}
//     subMarkObject.subject=subject
//     subMarkObject.mark=mark
//     //console.log(subMarkObject)
//     return subMarkObject
// }

// // let stdMark=prompt('enter mark')
// let getSubjectMarkObj = createSubMarkobj('English',stdMark)
// let getSubjectMarkObj1 = createSubMarkobj('Maths',90)
// let getSubjectMarkObj2 = createSubMarkobj('Physics',50)

// //let getSubjectMarkObj2 = createSubMarkobj('Maths',70)


// //creating array with that object
// function createMarksArray(...getObj){
//     const marks=[]
//     marks.push(...getObj)
//     return marks
// }
// let getMarksArrayStd1= createMarksArray(getSubjectMarkObj,getSubjectMarkObj1,getSubjectMarkObj2)
// //let getMarksArrayStd2=createMarksArray(getSubjectMarkObj2)


// //create studentsdata object

// function student(name,id,email,age,phone,markArray){
//     const student = {}
//     student.name = name
//     student.id = id
//     student.mail = email
//     student.age = age
//     student.phone = phone
//     student.marks = markArray
//     return student

// }
// let student1 = student('jordy', 105, 'jo@gmail.com', 21, '8909876758', getMarksArrayStd1)
// //let student2=student('alan','alan@gmail.com',23,'7898767856',getMarksArrayStd2)
// classObj.students.push(student1)
// // console.log(classObj)

// // let size=Object.keys(classObj).length
// // let sizeOfStudentsArray=classObj.students.length
// // console.log(sizeOfStudentsArray)

// console.log(classObj.students[4].marks[1].mark)
// classObj.students[4].marks[1].mark=100
// console.log(classObj.students[4].marks[1].mark)


// //change class teacher

// classObj.teacherName='Ajay'
// console.log(classObj)



const createStudent = (id, name) => {
    const student = {
        id: id,
        name: name,
        marks: []
    }
    classObj.students.push(student)
}

createStudent("100", "Raniya")
//console.log(classObj)



const studentDetail = (id, students) => {
    const studentDetailsOfId = students.find((item) => {
        return item.id === id
    })
    let getDetails = studentDetailsOfId.marks
    const subjectMark = {
        subject: 'CS',
        Mark: 80
    }
    getDetails.push(subjectMark)
    return getDetails

}
//console.log(studentDetail("103", classObj.students)); 

//student details with a specific id

const findStudentById = (id) => {
    let students = classObj.students
    for (let i = 0; i < students.length; i++) {        
        if (id === students[i].id) {
            //console.log(students[i])

        }
    }
}
findStudentById('102')

//total marks of a student with particular id

const totalMarksById = (id) => {
    let students = classObj.students
    for (let i = 0; i < students.length; i++) {
        if (id === students[i].id) {
            let totalMarks = 0;
            for (let j = 0; j < students[i].marks.length; j++) {
                totalMarks += students[i].marks[j].mark
            }
            return totalMarks
        }
    }

}
let totalMarks = totalMarksById('102')
let totalMark1 = totalMarksById('103')
//console.log(totalMarks,totalMark1)

//edit mark of a student for a subject

const editMarkOfStudent = (id, subject, newMark) => {
    let students = classObj.students
    for (let i = 0; i < students.length; i++) {
        if (id === students[i].id) {
            students[i].marks.forEach(item => {
                if (item.subject === subject) {
                    item.mark = newMark
                    //console.log(classObj)
                }
            })
        }
    }
}
 //editMarkOfStudent('102', 'English',68)

//remove a student from a class

const deleteStudent = (id) => {
    let students = classObj.students
    for (let i = 0; i < students.length; i++) {
        if (id === students[i].id) {
            //delete students[i]   
            students.splice(students.indexOf(students[i]), 1)
            //console.log(classObj)
        }
    }

}
// deleteStudent('103')

//delete a subject entry from every students

const deleteSujectEntry = (subjectTodelete) => {
    let students = classObj.students
    for (let i = 0;i < students.length;i++) {
        for (let j = 0;j < students[i].marks.length;j++) {
            if (students[i].marks[j].subject === subjectTodelete ) {
                //delete students[i].marks[j]
                students[i].marks.splice(students[i].marks.indexOf(students[i].marks[j]),1)
                //console.log(classObj)                
            }
        }
    }
}
// deleteSujectEntry('Physics')

//top student 

const totalMarksTopStudent = () => {
    let students = classObj.students    
    let topMark = 0
    let topStudent
    for (let i = 0; i < students.length; i++) {
        let totalMarks = 0;
        for (let j = 0; j < students[i].marks.length; j++) {
            totalMarks += students[i].marks[j].mark
        }

        if (topMark < totalMarks) {
            topMark = totalMarks
            topStudent = students[i]
        }
           
    }
    console.log(topMark)
    console.log(topStudent)
}
totalMarksTopStudent()

//average mark of given subject

const averageMarkOfSubject = (subject) => {
        let students = classObj.students
        let numberOfMarks = 4
            let sum = 0
            let average 
        for (let i = 0;i < students.length;i++) {            
            for (let j = 0;j < students[i].marks.length;j++) {
                if (students[i].marks[j].subject === subject)  {
                    sum += students[i].marks[j].mark                    
                }               
            }
        } 
        console.log(sum)
        average = sum / numberOfMarks
        console.log(average)
}
averageMarkOfSubject('Maths')

//sort list of students according to name
const sortStudents = () => {
    let students  = classObj.students
    let studentsArray = []
    for (let i = 0;i < students.length;i++) {
        studentsArray.push(students[i].name)
    }
   
    studentsArray.sort() 
    console.log(studentsArray)
}
sortStudents()
























// for(i=0;i<size;i++){
//     for(j=0;j<sizeOfStudentsArray;j++){
//        console.log(classObj.students[i])
//     } 
// }
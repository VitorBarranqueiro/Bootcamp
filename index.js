const ClassA = [
    {
        name: "Vitor",
        grade: 9.8
    },
    {
        name: "Mayk",
        grade: 10
    }
    ,

    {
        name: "Diego",
        grade: 2
    },

]

const ClassB = [

    {
        name: "Fabio",
        grade: 8
    },
    {
        name: "Cleiton",
        grade: 3
    },

    {
        name: "Felipe",
        grade: 2
    },
    {
        name: "Zé",
        grade: 8
    }

]

function averageCalc(students) {
    
    let sum = 0

    for (let i = 0; i < students.length; i++) {
        sum = sum + students[i].grade
    }
    const average = sum / students.length
    return average
}


const average1 = averageCalc(ClassA)
const average2 = averageCalc(ClassB)


function sendMsg(average, Class) {

    if (average >= 5) {
        console.log(`The ${Class} average was ${average}. congratulations`)
    }

    else {
        console.log(`The ${Class} average was less than 5. Need more study`)
    }
}


sendMsg(average1, 'Class A')
sendMsg(average2, 'Class B')

function failedStudents(student) {

    student.failedStudent = false;

    if (student.grade < 5) {
        student.failedStudent = true;

    }
}

function failAlert(student) {

    if (student.failedStudent) {
        console.log(`student ${student.name} is failing `)
    }

}

function studentrep(students) {

    for (let student of students) {
        failedStudents(student)
        failAlert(student)
    }
}

studentrep(ClassA)
studentrep(ClassB)
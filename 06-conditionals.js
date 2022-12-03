function attendanceCheck(attendance)
{
    if(attendance>=15)
        console.log("Attendance is full !!");
    else if(attendance==0)
        console.log("This session is cancelled since no one is available!!");
    else
        console.log("We still have space...");
    return this;
}

function checkStudentResult(attendancePercentage, grade)
{
    if(attendancePercentage > 90 && grade === 'A')
        console.log("Pass!!");
    else
        console.log("Fail!!");    
}

let attendance;
attendanceCheck(14);
attendanceCheck(16);
attendanceCheck(0);

checkStudentResult(98,'B');
checkStudentResult(80,'A');
checkStudentResult(95,'A');


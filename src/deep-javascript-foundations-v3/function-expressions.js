function printRecords(recordIds) {
  let students = findStudentRecords(recordIds);
  print(students)
}

function paidStudentsToEnroll() {
  return paidButNotEnrolled().concat(currentEnrollment);
}

function remindUnpaid(recordIds) {
  let students = findStudentRecords(unpaidStudents(recordIds))
  print(students)
}

function print(students){
  sortRecordsByName(students).forEach(function print(student){
    console.log(`${student.name} (${student.id}):  ${paid(student)}`)
  });
}

function unpaidStudents(recordIds){
 return studentRecords.map(function findStudents(student){
    if(recordIds.includes(student.id) && !student.paid) return student.id
  }).filter(item => !!item);
}

function paidButNotEnrolled(){
  return studentRecords.map(function findStudents(student){
    if(!currentEnrollment.includes(student.id) && student.paid) return student.id
  }).filter(item => !!item);
}

function paid(student){
  return student.paid ? "Paid" : "Not Paid"
}

function findStudentRecords(students){
  return students.map(function findStudents(id){
    return matchStudentById(id, studentRecords);
  }).filter(item => !!item)
}

function sortRecordsByName(records){
  return records.sort(function alphabeticalOrder(a, b) {
    //ignore case
    var nameA = a.name.toUpperCase();
    var nameB = b.name.toUpperCase();
    if (nameA < nameB) {
      return -1;
    }
    if (nameA > nameB) {
      return 1;
    }

    // names must be equal
    return 0;
  });
}

function matchStudentById(id, students) {
  function match(student) {
    return id == student.id
  }
  return students.find(match);
}

// ********************************

var currentEnrollment = [ 410, 105, 664, 375 ];

var studentRecords = [
  { id: 313, name: "Frank", paid: true, },
  { id: 410, name: "Suzy", paid: true, },
  { id: 709, name: "Brian", paid: false, },
  { id: 105, name: "Henry", paid: false, },
  { id: 502, name: "Mary", paid: true, },
  { id: 664, name: "Bob", paid: false, },
  { id: 250, name: "Peter", paid: true, },
  { id: 375, name: "Sarah", paid: true, },
  { id: 867, name: "Greg", paid: false, },
];

printRecords(currentEnrollment);
console.log("----");
currentEnrollment = paidStudentsToEnroll();
printRecords(currentEnrollment);
console.log("----");
remindUnpaid(currentEnrollment);

/*
	Bob (664): Not Paid
	Henry (105): Not Paid
	Sarah (375): Paid
	Suzy (410): Paid
	----
	Bob (664): Not Paid
	Frank (313): Paid
	Henry (105): Not Paid
	Mary (502): Paid
	Peter (250): Paid
	Sarah (375): Paid
	Suzy (410): Paid
	----
	Bob (664): Not Paid
	Henry (105): Not Paid
*/
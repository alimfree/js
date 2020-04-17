function printRecords(recordIds) {
  records = sortRecordsByName();
  if(recordIds){
    for(i=0; i < recordIds.length; i++){
      student = getRecord(recordIds[i], records);
      console.log(student);
    }
  }
}

function paidStudentsToEnroll() {
  // TODO
}

function remindUnpaid(recordIds) {
  // TODO
}

function sortRecordsByName(){
  return studentRecords.sort(function(a, b) {
    var nameA = a.name.toUpperCase(); // ignore upper and lowercase
    var nameB = b.name.toUpperCase(); // ignore upper and lowercase
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

function getRecord(id, students) {
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
//printRecords(currentEnrollment);
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
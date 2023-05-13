/** @format */

let arr = [
  { id: 1, name: "john", age: "18", marks: 80 },
  { id: 2, name: "jack", age: "20", marks: 85 },
  { id: 3, name: "karen", age: "19", marks: 35 },
];

function PrintStudentswithMap() {
  //Write your code here , just console.log
  arr.map(students => {
    if(students.marks > 50){
      console.log(students);
    }
  });
}

function PrintStudentsbyForEach() {
  //Write your code here , just console.log
  arr.forEach(students => {
    if(students.marks > 50){
      console.log(students);
    }
  });
}

function addData() {
  //Write your code here, just console.log
  let newStudent = {
    id: 4,
    name: "Susan",
    age: "20",
    marks: 57
  }
  arr.push(newStudent);
  console.log(arr);
}

function removeFailedStudent() {
  //Write your code here, just console.log
  let failedStudentIndex = arr.findIndex(students => students.marks < 50);

  arr.splice(failedStudentIndex, 1);

  console.log(arr);
}

function concatenateArray() {
  //Write your code here, just console.log
  let newArray = [
    { id: 5, name: "Rajinikanth", age: "21", marks: 100 },
    { id: 6, name: "Amitabh", age: "25", marks: 89 },
    { id: 7, name: "kiran", age: "27", marks: 49 },
  ]

  let concatenatedArr = arr.concat(newArray);

  console.log(concatenatedArr);
}

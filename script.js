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
    name: "susan",
    age: "20",
    marks: 45
  };
  arr.push(newStudent);
  console.log(arr);
}

function removeFailedStudent() {
  //Write your code here, just console.log
  arr = arr.filter(students => students.marks > 50);

  console.log(arr);
}

function concatenateArray() {
  //Write your code here, just console.log
  let newArray = [
    { id: 5, name: "Rajinikanth", age: "21", marks: 100 },
    { id: 6, name: "Amitabh", age: "25", marks: 89 },
    { id: 7, name: "kiran", age: "27", marks: 49 },
  ]

  arr = arr.concat(newArray);

  console.log(arr);
}

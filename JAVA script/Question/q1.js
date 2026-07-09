// The Magical Sorting Hat: Imagine you are creating a magical sorting hat for a wizard school. Implement a JavaScript function that takes an array of student names and assigns them to one of the four houses (Gryffindor (length less than 6), Hufflepuff(length less than 8), Ravenclaw(length less than 12), or Slytherin(length greater than or equal to 12)) based on the length of their names.

let students = ["Harry", "Hermione", "Ron", "Draco", "Luna", "Neville", "Ginny", "Fred", "George", "Albus", "Severus", "Sirius"];

function sortStudents(studentsArray) {
  let gryffindor = [];
  let hufflepuff = [];
  let ravenclaw = [];
  let slytherin = [];

  studentsArray.forEach(student => {
    if (student.length < 6) {
      gryffindor.push(student);
    } else if (student.length < 8) {
      hufflepuff.push(student);
    } else if (student.length < 12) {
      ravenclaw.push(student);
    } else {
      slytherin.push(student);
    }
  });

  return { gryffindor, hufflepuff, ravenclaw, slytherin };
}

console.log(sortStudents(students));
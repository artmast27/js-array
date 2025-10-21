const students = [
  { name: "John", age: 20, score: 85 },
  { name: "Jane", age: 22, score: 92 },
  { name: "Jim", age: 19, score: 50 },
  { name: "Jill", age: 21, score: 65 },
  { name: "Jack", age: 23, score: 95 },
];

// 1. getTopScoringStudents
// Повертає масив імен студентів, які мають оцінку > 80
function getTopScoringStudents(students) {
  const result = [];
  for (let i = 0; i < students.length; i++) {
    if (students[i].score > 80) {
      result.push(students[i].name);
    }
  }
  return result;
}

// 2. getAverageAge
// Повертає середній вік студентів
function getAverageAge(students) {
  let sum = 0;
  for (let i = 0; i < students.length; i++) {
    sum += students[i].age;
  }
  return students.length > 0 ? sum / students.length : 0;
}

// 3. addStudent
// Додає нового студента (НЕ модифікує оригінальний масив)
function addStudent(students, student) {
  const newArr = [];
  for (let i = 0; i < students.length; i++) {
    newArr.push(students[i]);
  }
  newArr.push(student);
  return newArr;
}

// 4. removeStudentByName
// Видаляє студента за ім’ям та повертає новий масив
function removeStudentByName(students, name) {
  const newArr = [];
  for (let i = 0; i < students.length; i++) {
    if (students[i].name !== name) {
      newArr.push(students[i]);
    }
  }
  return newArr;
}

module.exports = { getTopScoringStudents, getAverageAge, addStudent, removeStudentByName };

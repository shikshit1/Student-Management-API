// This file acts as our in-memory database.
// It initializes an array with some sample student data.

let students = [
  {
    id: 1,
    name: "John Doe",
    email: "john.doe@example.com",
    course: "Computer Science",
    age: 20
  },
  {
    id: 2,
    name: "Jane Smith",
    email: "jane.smith@example.com",
    course: "Information Technology",
    age: 21
  }
];

// We export the array so other files can read and modify it.
module.exports = students;

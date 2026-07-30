// Controller handles the business logic for each route
let students = require('../data/students');

// Helper function to generate new IDs
const generateId = () => {
  return students.length > 0 ? Math.max(...students.map(s => s.id)) + 1 : 1;
};

// GET /students
const getAllStudents = (req, res) => {
  res.status(200).json({
    success: true,
    message: "Students retrieved successfully",
    data: students
  });
};

// GET /students/:id
const getStudentById = (req, res) => {
  const id = parseInt(req.params.id);
  const student = students.find(s => s.id === id);

  if (!student) {
    return res.status(404).json({
      success: false,
      message: `Student with ID ${id} not found`,
      data: null
    });
  }

  res.status(200).json({
    success: true,
    message: "Student retrieved successfully",
    data: student
  });
};

// POST /students
const createStudent = (req, res) => {
  // Input has already been validated by our middleware!
  const { name, email, course, age } = req.body;

  const newStudent = {
    id: generateId(),
    name,
    email,
    course: course || "Not specified",
    age: age || null
  };

  students.push(newStudent);

  // 201 status code means "Created"
  res.status(201).json({
    success: true,
    message: "Student created successfully",
    data: newStudent
  });
};

// PUT /students/:id
const updateStudent = (req, res) => {
  const id = parseInt(req.params.id);
  const studentIndex = students.findIndex(s => s.id === id);

  if (studentIndex === -1) {
    return res.status(404).json({
      success: false,
      message: `Student with ID ${id} not found`,
      data: null
    });
  }

  // Update properties (validation ensures invalid data doesn't get here)
  const { name, email, course, age } = req.body;
  
  students[studentIndex] = {
    ...students[studentIndex], // Keep existing data
    name: name !== undefined ? name : students[studentIndex].name,
    email: email !== undefined ? email : students[studentIndex].email,
    course: course !== undefined ? course : students[studentIndex].course,
    age: age !== undefined ? age : students[studentIndex].age
  };

  res.status(200).json({
    success: true,
    message: "Student updated successfully",
    data: students[studentIndex]
  });
};

// DELETE /students/:id
const deleteStudent = (req, res) => {
  const id = parseInt(req.params.id);
  const studentIndex = students.findIndex(s => s.id === id);

  if (studentIndex === -1) {
    return res.status(404).json({
      success: false,
      message: `Student with ID ${id} not found`,
      data: null
    });
  }

  // Remove the student from the array
  const deletedStudent = students.splice(studentIndex, 1)[0];

  res.status(200).json({
    success: true,
    message: "Student deleted successfully",
    data: deletedStudent
  });
};

module.exports = {
  getAllStudents,
  getStudentById,
  createStudent,
  updateStudent,
  deleteStudent
};

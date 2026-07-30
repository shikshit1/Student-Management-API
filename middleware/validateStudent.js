// Validation middleware for creating and updating students
const students = require('../data/students');

const validateStudent = (req, res, next) => {
  const { name, email, course, age } = req.body;

  // 1. Name is required
  if (!name || name.trim() === '') {
    return res.status(400).json({
      success: false,
      message: "Name is required",
      data: null
    });
  }

  // 2. Email is required and must be valid
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!email || !emailRegex.test(email)) {
    return res.status(400).json({
      success: false,
      message: "A valid email is required",
      data: null
    });
  }

  // 3. Age must be greater than 0
  if (age !== undefined && (typeof age !== 'number' || age <= 0)) {
    return res.status(400).json({
      success: false,
      message: "Age must be a number greater than 0",
      data: null
    });
  }

  // 4. Duplicate emails should not be allowed (for POST or if changing email in PUT)
  // If req.params.id exists, it's a PUT request, so we ignore the current student's email
  const studentId = req.params.id ? parseInt(req.params.id) : null;
  const existingStudent = students.find(s => s.email === email && s.id !== studentId);
  
  if (existingStudent) {
    return res.status(400).json({
      success: false,
      message: "Email is already in use by another student",
      data: null
    });
  }

  // If all validations pass, proceed to the next function (the controller)
  next();
};

module.exports = validateStudent;

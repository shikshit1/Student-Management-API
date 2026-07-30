// Main Application Entry Point

// 1. Import Dependencies
require('dotenv').config(); // Loads environment variables from .env file
const express = require('express');
const studentRoutes = require('./routes/studentRoutes');
const requestLogger = require('./middleware/logger');
const errorHandler = require('./middleware/errorHandler');

// 2. Initialize Express App
const app = express();

// 3. Global Middleware
// Parses incoming JSON payloads from requests
app.use(express.json()); 
// Custom logging middleware
app.use(requestLogger); 

// 4. Routes
// Mount student routes under the '/students' path
app.use('/students', studentRoutes);

// 5. 404 Route Handler for undefined endpoints
app.get("/", (req, res) => {
    res.json({
        success: true,
        message: "Welcome to Student Management API",
        endpoints: {
            getAll: "/students",
            getOne: "/students/:id",
            create: "POST /students",
            update: "PUT /students/:id",
            delete: "DELETE /students/:id"
        }
    });
});

// 6. Global Error Handling Middleware
// This should always be the last middleware registered
app.use(errorHandler);

// 7. Start the Server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});

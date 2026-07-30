# Student Management API

This is a RESTful API built with Node.js and Express.js for managing student records. This project was developed as a Full Stack Development internship assignment.

## Features

- **CRUD Operations**: Create, Read, Update, and Delete students.
- **In-Memory Database**: Uses a JavaScript array to store data.
- **Input Validation**: Ensures required fields and correct formats.
- **Consistent Responses**: Standardized JSON format for all endpoints.
- **Middleware**: Custom request logging and global error handling.

## Installation

1. **Open Terminal/Command Prompt** in the project directory.
2. **Install Dependencies**:
   ```bash
   npm install
   ```

## Configuration

A `.env` file is included in this repository template for convenience. Ensure it contains the port configuration:
```
PORT=3000
```

## Running the Server

Start the server using the following command:
```bash
npm start
```
*(For development with auto-restart, you can run `npm run dev`)*

The server will start on `http://localhost:3000`.

## API Documentation

### Consistent Response Format
All API responses follow this format:
```json
{
  "success": true,
  "message": "Description of the result",
  "data": { ... } // or null
}
```

### Endpoints

| Method | Endpoint | Description |
|---|---|---|
| GET | `/students` | Get a list of all students |
| GET | `/students/:id` | Get details of a specific student by ID |
| POST | `/students` | Add a new student |
| PUT | `/students/:id` | Update an existing student |
| DELETE | `/students/:id` | Remove a student |

### Sample POST/PUT Request Body
```json
{
  "name": "Alex Johnson",
  "email": "alex.j@example.com",
  "course": "Data Science",
  "age": 22
}
```

## Testing with Postman

1. Open Postman.
2. Click **Import** (top left).
3. Select the `StudentAPI.postman_collection.json` file provided in this repository.
4. The collection will appear in your workspace, containing pre-configured requests for all endpoints!

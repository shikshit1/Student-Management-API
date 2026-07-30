// Global error handling middleware
// Catches any unexpected errors that occur in our application

const errorHandler = (err, req, res, next) => {
  console.error(err.stack); // Log the error for debugging

  // Return a consistent JSON format even for server errors
  res.status(500).json({
    success: false,
    message: "Internal Server Error! Something went wrong.",
    data: null
  });
};

module.exports = errorHandler;

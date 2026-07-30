// Request logging middleware
// This function runs on every incoming request to log its details.

const requestLogger = (req, res, next) => {
  const method = req.method;
  const url = req.url;
  const time = new Date().toISOString();
  
  console.log(`[${time}] ${method} request to ${url}`);
  
  // Call next() to pass control to the next middleware or route handler.
  next();
};

module.exports = requestLogger;

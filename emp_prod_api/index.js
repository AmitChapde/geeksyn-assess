const express = require('express');
const dotenv = require('dotenv');
const { connectEmployeeDb, connectProductDb } = require('./config/db');
const routes = require('./routes/main');

// Load environment variables early
dotenv.config();

const app = express();

// Middleware to parse JSON request bodies
app.use(express.json());

// Mount routes
app.use('/', routes);

// Define port
const PORT = process.env.PORT || 3000;

// Connect to both databases and start the server
const startServer = async () => {
  try {
    await connectEmployeeDb();
    await connectProductDb();

    app.listen(PORT, () => {
      console.log(`Server is running on http://localhost:${PORT}`);
    });
  } catch (err) {
    console.error('Failed to connect to one or more databases:', err.message);
    process.exit(1);
  }
};

startServer();

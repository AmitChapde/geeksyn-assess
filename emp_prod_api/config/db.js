const mongoose = require("mongoose");
const dotenv = require("dotenv");


dotenv.config();

const employeeDbUri = process.env.MONGO_EMPLOYEE_URI;
const productDbUri = process.env.MONGO_PRODUCT_URI;

let employeeConnection = null;
let productConnection = null;

const connectEmployeeDb = async () => {
  if (employeeConnection) return employeeConnection;

  try {
    employeeConnection = await mongoose.createConnection(employeeDbUri, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("Connected to employees_db");
    return employeeConnection;
  } catch (error) {
    console.error("Error connecting to employees_db:", error.message);
    process.exit(1);
  }
};

const connectProductDb = async () => {
  if (productConnection) return productConnection;

  try {
    productConnection = await mongoose.createConnection(productDbUri, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("Connected to products_db");
    return productConnection;
  } catch (error) {
    console.error("Error connecting to products_db:", error.message);
    process.exit(1);
  }
};

module.exports = {
  connectEmployeeDb,
  connectProductDb,
};

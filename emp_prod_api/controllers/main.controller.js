const employeeService = require("../services/employee.service");
const productService = require("../services/products.service");

const getAllData = async (req, res) => {
  try {
    const [employees, products] = await Promise.all([
      employeeService.getAllEmployees(),
      productService.getAllProducts(),
    ]);

    res.json({
      employees,
      products,
    });
  } catch (err) {
    res.status(500).json({ error: "Failed to fetch data." });
  }
};

module.exports = { getAllData };

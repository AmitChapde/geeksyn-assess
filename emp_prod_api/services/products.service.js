const Product = require('../model/product.model');

const getAllProducts = async () => {
  return await Product.find();
};

module.exports = { getAllProducts };

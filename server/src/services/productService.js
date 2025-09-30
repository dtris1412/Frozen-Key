import db from "../models/index.js";
const getAllProducts = async () => {
  return await db.Product.findAll();
};

//count product's quantity
const getProductQuantity = async (product_id) => {
  const quantity = await db.License_Key.count({ where: { product_id } });
  return quantity;
};

export { getAllProducts, getProductQuantity };

import {
  getAllProducts as getAllProductsService,
  getProductQuantity as getProductQuantityService,
} from "../services/productService.js";

const getAllProducts = async (req, res) => {
  try {
    const products = await getAllProductsService();
    res.status(200).json(products);
  } catch (err) {
    console.log("Error in getAllProducts controller: ", err);
    res.status(500).json({ mess: "Internal server error" });
  }
};

const getProductQuantity = async (req, res) => {
  try {
    const { product_id } = req.params;
    const quantity = await getProductQuantityService(product_id);
    res.status(200).json(quantity);
  } catch (err) {
    console.error("Error in getProductQuantitys controller: ", err);
    res.status(500).json({ mess: "Internal server error" });
  }
};

export { getAllProducts, getProductQuantity };

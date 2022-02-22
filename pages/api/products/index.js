import dbConnect from "../../../util/mongo";
import ProductModel from "../../../models/ProductModel";

export default async function ProxyHandler(req, res) {
  const { method } = req;

  dbConnect();

  if (method === "GET") {
    try {
      const products = await ProductModel.find();
      res.json({
        message: "get products",
        count: products.length,
        data: products,
      });
    } catch (err) {
      res.status(500).json(err);
    }
  }
  if (method === "POST") {
    try {
      const product = await ProductModel.create(req.body);

      res.status(201).json({
        message: "a product got created",
        data: product,
      });
    } catch (err) {
      res.status(500).json(err);
    }
  }
}

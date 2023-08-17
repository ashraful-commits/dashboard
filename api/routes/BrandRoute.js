import express from "express";
import {
  GetAllBrandProducts,
  createBrandProducts,
  deleteSingleBrandProducts,
  getSinglBrandeProducts,
  statusSingleBrandProducts,
  updateSingleBrandProducts,
} from "../controllers/BrandController.js";
import { singlePhotoUpload } from "../middlewares/multer.js";

const BrandRoute = express.Router();

BrandRoute.get("/brand", GetAllBrandProducts).post(
  "/brand",
  singlePhotoUpload,
  createBrandProducts
);
BrandRoute.get("/brand/:id", getSinglBrandeProducts)
  .put("/brand/:id", singlePhotoUpload, updateSingleBrandProducts)
  .patch("/brand/:id", statusSingleBrandProducts)
  .delete("/brand/:id", deleteSingleBrandProducts);
export default BrandRoute;

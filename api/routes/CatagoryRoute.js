import express from "express";
import {
  GetAllCatagoryProducts,
  createCatagoryProducts,
  deleteSingleCatagoryProducts,
  getSinglCatagoryeProducts,
  statusSingleCatagoryProducts,
  updateSingleCatagoryProducts,
} from "../controllers/CatagoryController.js";
import { singlePhotoUpload } from "../middlewares/multer.js";

const catagoryRoute = express.Router();

catagoryRoute
  .get("/catagory", GetAllCatagoryProducts)
  .post("/catagory", singlePhotoUpload, createCatagoryProducts);
catagoryRoute
  .get("/catagory/:id", getSinglCatagoryeProducts)
  .put("/catagory/:id", singlePhotoUpload, updateSingleCatagoryProducts)
  .delete("/catagory/:id", deleteSingleCatagoryProducts)
  .patch("/catagory/:id", statusSingleCatagoryProducts);
export default catagoryRoute;

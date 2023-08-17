import express from "express";
import {
  GetAllTagProducts,
  createTagProducts,
  deleteSingleTagProducts,
  getSinglTageProducts,
  updateSingleTagProducts,
  statusUpdateTagProducts,
} from "../controllers/TagController.js";

const TagRoute = express.Router();

TagRoute.get("/tag", GetAllTagProducts).post("/tag", createTagProducts);
TagRoute.get("/tag/:id", getSinglTageProducts)
  .put("/tag/:id", updateSingleTagProducts)
  .delete("/tag/:id", deleteSingleTagProducts)
  .patch("/tag/:id", statusUpdateTagProducts);
export default TagRoute;

import { CatagoryModel } from "../model/CatagoryModel.js";

import { createSlug } from "../utility/CreateSlug.js";

//================get all product
export const GetAllCatagoryProducts = async (req, res, next) => {
  try {
    const data = await CatagoryModel.find();
    res.status(200).json({
      catagory: data,
      message: "get All product",
    });
  } catch (error) {
    next(error);
  }
};

//================create product
export const createCatagoryProducts = async (req, res, next) => {
  try {
    const { name } = req.body;
    const data = await CatagoryModel.create({
      name,
      slug: createSlug(name),
      photo: req.file.filename,
    });

    res.status(200).json({
      catagory: data,
      message: "create product",
    });
  } catch (error) {
    next(error);
  }
};
//================create product
export const getSinglCatagoryeProducts = async (req, res, next) => {
  try {
    const { id } = req.params;
    const data = await CatagoryModel.findById({ _id: id });
    res.status(200).json({
      catagory: data,
      message: "get Single catagory product",
    });
  } catch (error) {
    next(error);
  }
};
//================create product
export const updateSingleCatagoryProducts = async (req, res, next) => {
  try {
    const { id } = req.params;
    const { name, photo } = req.body;
    const data = await CatagoryModel.findByIdAndUpdate(
      id,
      {
        name,
        slug: createSlug(name),
        photo: req.file?.filename ? req.file.filename : photo,
      },
      { new: true }
    );
    res.status(200).json({
      catagory: data,
      message: "Update Single catagory product",
    });
  } catch (error) {
    next(error);
  }
};
//================delete product
export const deleteSingleCatagoryProducts = async (req, res, next) => {
  try {
    const { id } = req.params;
    const data = await CatagoryModel.findByIdAndDelete(id);
    res.status(200).json({
      catagory: data,
      message: "Delete Single catagory product",
    });
  } catch (error) {
    next(error);
  }
};

//================status update catagory product
export const statusSingleCatagoryProducts = async (req, res, next) => {
  try {
    const { id } = req.params;
    const { status } = req.body;
    const data = await CatagoryModel.findByIdAndUpdate(
      { _id: id },
      { status },
      { new: true }
    );
    res.status(200).json({
      catagory: data,
      message: "Status Single catagory product",
    });
  } catch (error) {
    next(error);
  }
};

import { BrandModel } from "../model/BrandModel.js";
import { createSlug } from "../utility/CreateSlug.js";

//================get all product
export const GetAllBrandProducts = async (req, res, next) => {
  try {
    const data = await BrandModel.find();
    res.status(200).json({
      brand: data,
      message: "get All Brand product",
    });
  } catch (error) {
    next(error);
  }
};

//================create product
export const createBrandProducts = async (req, res, next) => {
  try {
    const { name } = req.body;
    const data = await BrandModel.create({
      name,
      slug: createSlug(name),
      photo: req.file.filename,
      status: false,
    });

    res.status(200).json({
      brand: data,
      message: "create Brand product",
    });
  } catch (error) {
    next(error);
  }
};
//================create product
export const getSinglBrandeProducts = async (req, res, next) => {
  try {
    const { id } = req.params;
    const data = await BrandModel.findById(id);
    res.status(200).json({
      brand: data,
      message: "get Single Brand product",
    });
  } catch (error) {
    next(error);
  }
};
//================create product
export const updateSingleBrandProducts = async (req, res, next) => {
  try {
    const { id } = req.params;
    const { name, photo } = req.body;
    const data = await BrandModel.findByIdAndUpdate(
      id,
      {
        name,
        slug: createSlug(name),
        photo: req.file?.filename ? req.file.filename : photo,
      },
      { new: true }
    );
    res.status(200).json({
      brand: data,
      message: "Update Single Brand product",
    });
  } catch (error) {
    next(error);
  }
};
//================delete product
export const deleteSingleBrandProducts = async (req, res, next) => {
  try {
    const { id } = req.params;
    const data = await BrandModel.findByIdAndDelete({ _id: id });
    res.status(200).json({
      brand: data,
      message: "Delete Single Brand product",
    });
  } catch (error) {
    next(error);
  }
};
//================status update brand product
export const statusSingleBrandProducts = async (req, res, next) => {
  try {
    const { id } = req.params;
    const { status } = req.body;
    const data = await BrandModel.findByIdAndUpdate(
      { _id: id },
      { status },
      { new: true }
    );
    res.status(200).json({
      brand: data,
      message: "Status Single Brand product",
    });
  } catch (error) {
    next(error);
  }
};

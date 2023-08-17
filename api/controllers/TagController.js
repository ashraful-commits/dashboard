import { tagModel } from "../model/tagModel.js";
import { createSlug } from "../utility/CreateSlug.js";

//================get all product
export const GetAllTagProducts = async (req, res, next) => {
  try {
    const data = await tagModel.find();
    res.status(200).json({
      tag: data,
      message: "get All tag product",
    });
  } catch (error) {
    next(error);
  }
};

//================create product
export const createTagProducts = async (req, res, next) => {
  try {
    const { name } = req.body;
    const data = await tagModel.create({
      name,
      slug: createSlug(name),
    });
    res.status(200).json({
      tag: data,
      message: "create tag product",
    });
  } catch (error) {
    next(error);
  }
};
//==============================================================single tag  product
export const getSinglTageProducts = async (req, res, next) => {
  try {
    const { id } = req.params;
    const data = await tagModel.findById({ _id: id });
    res.status(200).json({
      tag: data,
      message: "get Single tag product",
    });
  } catch (error) {
    next(error);
  }
};
//======================================================update single tag product
export const updateSingleTagProducts = async (req, res, next) => {
  try {
    const { id } = req.params;
    const { name } = req.body;
    console.log(name);
    console.log(id);
    const data = await tagModel.findByIdAndUpdate(
      id,
      {
        name,
        slug: createSlug(name),
      },
      { new: true }
    );
    res.status(200).json({
      tag: data,
      message: "Update Single tag product",
    });
  } catch (error) {
    next(error);
  }
};
//================delete product
export const deleteSingleTagProducts = async (req, res, next) => {
  try {
    const { id } = req.params;
    const data = await tagModel.findByIdAndDelete(id);
    res.status(200).json({
      tag: data,
      message: "Delete Single tag product",
    });
  } catch (error) {
    next(error);
  }
};

export const statusUpdateTagProducts = async (req, res, next) => {
  try {
    const { id } = req.params;
    const { status } = req.body;
    const data = await tagModel.findByIdAndUpdate(
      { _id: id },
      { status },
      { new: true }
    );
    res.status(200).json({
      tag: data,
      message: "Status Single tag product",
    });
  } catch (error) {
    next(error);
  }
};

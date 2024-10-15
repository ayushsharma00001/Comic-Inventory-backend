import Comic from "../models/Comic.js";
import cloudinary from "../utils/cloudinary.js";
import getDataUri from "../utils/datauri.js";

// Create a new comic book
export const createComic = async (req, res) => {
  try {
    const {
      name,
      author,
      yearOfPublication,
      price,
      discount,
      pages,
      condition,
      description,
    } = req.body;
    if (!name || !author || !yearOfPublication || !price || !pages) {
      return res
        .status(400)
        .json({ success: false, message: "Something is missing..." });
    }
    const file = req.file;
    let coverPhoto;
    if (typeof req.file !== "undefined") {
      const fileUri = getDataUri(file);
      const response = await cloudinary.uploader.upload(fileUri, {
        format: "jpg",
      });
      coverPhoto = response.secure_url;
    }else{
        return res
        .status(400)
        .json({ success: false, message: "Cover Photo is required..." });
    }
    const comic = new Comic({
      name,
      author,
      yearOfPublication,
      price,
      discount,
      pages,
      condition,
      description,
      coverPhoto
    });
    await comic.save();
    res.status(201).json({success:true,comic});
  } catch (error) {
    res.status(400).json({ error: error.message || "Something went wrong..." });
  }
};

// Edit a comic book
export const updateComic = async (req, res) => {
  try {
    const comic = await Comic.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    if (!comic) return res.status(404).json({ message: "Comic not found..." });
    res.json({success:true,comic});
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Delete a comic book
export const deleteComic = async (req, res) => {
  try {
    const comic = await Comic.findByIdAndDelete(req.params.id);
    if (!comic) return res.status(404).json({success:false, message: "Comic not found..." });
    res.json({success:true, message: "Comic deleted successfully..." });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Get all comics
export const getComics = async (req, res) => {
  try {
    const comics = await Comic.find({}).sort({ createdAt: -1 });
    res.json({success:true,comics});
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Get a comic by ID
export const getComicById = async (req, res) => {
  try {
    const comic = await Comic.findById(req.params.id);
    if (!comic) return res.status(404).json({success:false, message: "Comic not found..." });
    res.json({success:true,comic});
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

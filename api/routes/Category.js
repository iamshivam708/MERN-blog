const express = require("express");
const router = express.Router();
const Category = require("../models/categories");
const Blog = require("../models/blog");

//get all category
router.get("/", async (req, res) => {
  await Category.find()
    .then((cat) => {
      res.status(200).send(cat);
    })
    .catch((err) => {
      res.send(err);
    });
});

//create new category
router.post("/", async (req, res) => {
  const category = new Category({
    title: req.body.title,
  });

  await category
    .save()
    .then((result) => {
      res.status(200).send(result);
    })
    .catch((err) => {
      res.send(err);
    });
});

//getting blogs according to category
router.get("/:name/:page", async (req, res) => {
  const PAGE_SIZE = 3;
  const page = parseInt(req.params.page || "0");
  const total = await Blog.countDocuments({});
  const posts = await Blog.find({
    category: { $regex: req.params.name, $options: "i" },
  }).limit(PAGE_SIZE)
  .skip(PAGE_SIZE * page);
  res.json({ totalPages: Math.ceil(total / PAGE_SIZE), posts });
});

module.exports = router;

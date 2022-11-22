"use strict";
// catRoute
const express = require("express");
const multer = require("multer");
const upload = multer({ dest: "uploads/", fileFilter });
const {
  cat_list_get,
  cat_get,
  cat_post,
  cat_update_put,
  cat_delete,
} = require("../controllers/catController");
const { body } = require("express-validator");
const { httpError } = require("../utils/errors");
const router = express.Router();

const fileFilter = (req, file, cb) => {
  if (file.mimetype.includes("image")) {
    cb(null, true);
  } else {
    cb(httpError("Invalid file", 400));
  }
};

router
  .route("/")
  .get(cat_list_get)
  .post(
    upload.single("cat"),
    body("name").isLength({ min: 1 }).escape(),
    body("birthdate").isDate(),
    body("weight").isNumeric(),
    cat_post
  )
  .put(
    body("name").isLength({ min: 1 }).escape(),
    body("birthdate").isDate(),
    body("weight").isNumeric(),
    body("owner").isNumeric(),
    body("id").isNumeric(),
    cat_update_put
  );

router
  .route("/:id")
  .get(cat_get)
  .delete(cat_delete)
  .put(
    body("name").isLength({ min: 1 }).escape(),
    body(birthdate).isDate(),
    body("weight").isNumeric(),
    catput
  );

module.exports = router;

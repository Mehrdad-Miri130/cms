const controller = require("../controller/page");
const auth = require("../controller/auth");
const express = require("express");
const { check } = require("express-validator");
const router = express.Router();

router
  .route("/by-admin")
  .post(
    auth.isLoggedIn,
    auth.restrictToAdmin,
    [
      check("image").notEmpty().isString(),
      check("orders").notEmpty().isString(),
      check("title").notEmpty().isString(),
      check("author").notEmpty().isNumeric(),
      check("content").notEmpty().isString(),
      check("publishedAt").isDate({ format: "YYYY-MM-DD", strictMode: true }),
    ],
    controller.addPageByAdmin
  );

router
  .route("/by-admin/:id")

  .patch(
    auth.isLoggedIn,
    auth.restrictToAdmin,
    [
      check("image").notEmpty().isString(),
      check("orders").notEmpty().isString(),
      check("title").notEmpty().isString(),
      check("author").notEmpty().isNumeric(),
      check("content").notEmpty().isString(),
      check("publishedAt").isDate({ format: "YYYY-MM-DD", strictMode: true }),
    ],
    controller.updatePageByAdmin
  )
  .delete(auth.isLoggedIn, auth.restrictToAdmin, controller.deleteOneByAdmin);

router
  .route("/")
  .get(controller.getAllPages)
  .post(
    auth.isLoggedIn,
    [
      check("image").notEmpty().isString(),
      check("orders").notEmpty().isString(),
      check("title").notEmpty().isString(),
      check("content").notEmpty().isString(),
      check("publishedAt").isDate({ format: "YYYY-MM-DD", strictMode: true }),
    ],
    controller.addPage
  );

router
  .route("/:id")
  .get(controller.getOne)
  .patch(
    auth.isLoggedIn,
    [
      check("image").notEmpty().isString(),
      check("orders").notEmpty().isString(),
      check("title").notEmpty().isString(),
      check("content").notEmpty().isString(),
      check("publishedAt").isDate({ format: "YYYY-MM-DD", strictMode: true }),
    ],
    controller.updatePageByUser
  )
  .delete(auth.isLoggedIn, controller.deleteOne);

module.exports = router;

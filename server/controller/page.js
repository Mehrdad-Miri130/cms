const pageDao = require("../services/page-dao");
const { validationResult } = require("express-validator");

exports.getAllPages = async (req, res, next) => {
  try {
    const docs = await pageDao.pageList();
    res.json({ status: true, data: docs });
  } catch (error) {
    console.log("error in geAllPages", error);
    res
      .status(500)
      .json({ status: false, error: "server error, please try later" });
  }
};

exports.deleteOne = async (req, res, next) => {
  try {
    const deleted = await pageDao.deleteOne(req.user.id, req.params.id);
    if (!deleted)
      return res.status(404).json({
        status: false,
        error: "page not found or deleted before",
      });
    res.json({ status: true });
  } catch (error) {}
};
exports.deleteOneByAdmin = async (req, res, next) => {
  try {
    const deleted = await pageDao.deleteOneByAdmin(req.params.id);
    if (!deleted)
      return res.status(404).json({
        status: false,
        error: "page not found or deleted before",
      });
    res.json({ status: true });
  } catch (error) {}
};

exports.getOne = async (req, res, next) => {
  try {
    const doc = await pageDao.getOne(req.params.id);
    if (!doc)
      return res.status(404).json({
        status: false,
        error: "page not found",
      });
    res.json({ status: true, data: doc });
  } catch (error) {}
};
exports.addPage = async (req, res, next) => {
  try {
    const errors = validationResult(req);
    if (!errors.isEmpty())
      return res.status(422).json({ errors: errors.array() });
    const newPageObject = {
      title: req.body.title,
      publishedAt: req.body.publishedAt,
      author: req.user.id,
      content: req.body.content,
    };

    const doc = await pageDao.addPage(newPageObject);
    res.json({ status: true, data: doc });
  } catch (error) {
    res.status(500).json({ status: false, error: error });
  }
};
exports.addPageByAdmin = async (req, res, next) => {
  try {
    const errors = validationResult(req);
    if (!errors.isEmpty())
      return res.status(422).json({ errors: errors.array() });
    const newPageObject = {
      title: req.body.title,
      publishedAt: req.body.publishedAt,
      author: req.body.author,
      content: req.body.content,
    };

    const doc = await pageDao.addPage(newPageObject);
    res.json({ status: true, data: doc });
  } catch (error) {
    res.status(500).json({ status: false, error: error });
  }
};
exports.updatePageByUser = async (req, res, next) => {
  try {
    const errors = validationResult(req);
    if (!errors.isEmpty())
      return res.status(422).json({ errors: errors.array() });
    await pageDao.updatePageByUser(req.user.id, req.params.id, req.body);
    res.json({ status: true });
  } catch (error) {
    console.log(error);
    res.status(500).json({ status: false, error: error });
  }
};
exports.updatePageByAdmin = async (req, res, next) => {
  try {
    const errors = validationResult(req);
    if (!errors.isEmpty())
      return res.status(422).json({ errors: errors.array() });
    await pageDao.updatePageByAdmin(req.params.id, req.body);
    res.json({ status: true });
  } catch (error) {
    console.log(error);
    res.status(500).json({ status: false, error: error });
  }
};

/* Data Access Object (DAO) module for accessing Pages */
"use strict";

const { db } = require("../db");
const { Page } = require("../model/PageModel");

exports.pageList = () => {
  return new Promise((resolve, reject) => {
    const sql =
      "SELECT * FROM pages WHERE publishedAt != 'null' ORDER BY publishedAt ASC";
    db.all(sql, [], (err, rows) => {
      if (err) {
        console.log(err);
        reject(err);
      }
      const pages = rows.map(
        (q) =>
          new Page(
            q.id,
            q.title,
            q.author,
            q.createdAt,
            q.content,
            q.publishedAt
          )
      );
      resolve(pages);
    });
  });
};

exports.deleteOne = (author, id) => {
  return new Promise((resolve, reject) => {
    const sql = "DELETE FROM pages WHERE id=? AND author=?";
    db.run(sql, [id, author], (err, rows) => {
      if (err) reject(false);
      resolve(true);
    });
  });
};
exports.deleteOneByAdmin = (id) => {
  return new Promise((resolve, reject) => {
    const sql = "DELETE FROM pages WHERE id=?";
    db.run(sql, [id], (err, rows) => {
      if (err) reject(false);
      resolve(true);
    });
  });
};

exports.getOne = (id) => {
  return new Promise((resolve, reject) => {
    const sql = "SELECT * FROM pages WHERE id=?";
    db.query(sql, [id], (err, row) => {
      if (err) {
        console.log(err);
        reject(false);
      }
      resolve(
        new Page(row.id, row.title, row.author, row.createdAt, row.publishedAt)
      );
    });
  });
};

// add a new page
exports.addPage = (info) => {
  return new Promise((resolve, reject) => {
    const sql =
      "INSERT INTO pages(title,content, author, publishedAt) VALUES (?,?, ?, ?)";
    db.run(
      sql,
      [info.title, info.content, info.author, info.publishedAt],
      function (err) {
        console.log("error in insert", err);
        if (err) reject(err);
        else resolve(this.lastID);
      }
    );
  });
};
// update an existing page
exports.updatePageByUser = (author, id, page) => {
  return new Promise((resolve, reject) => {
    const sql =
      "UPDATE pages SET title=?, content=?, publishedAt=? WHERE id=? AND author=?";
    db.run(
      sql,
      [page.title, page.content, page.publishedAt, id, author],
      function (err) {
        if (err) {
          console.log(err);
          reject(err);
        } else resolve(this.lastID);
      }
    );
  });
};
exports.updatePageByAdmin = (id, page) => {
  return new Promise((resolve, reject) => {
    const sql =
      "UPDATE pages SET title=?, content=?, author=?, publishedAt=? WHERE id=?";
    db.run(
      sql,
      [page.title, page.content, page.author, page.publishedAt, id],
      function (err) {
        if (err) {
          console.log(err);
          reject(err);
        } else resolve(this.lastID);
      }
    );
  });
};

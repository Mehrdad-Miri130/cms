"use strict";

const dayjs = require("dayjs");

function Page(id, title, author, createdAt, content, publishedAt = null) {
  this.id = id;
  this.title = title;
  this.author = author;
  this.content = content;
  this.publishedAt = publishedAt ? dayjs(publishedAt) : null;
  this.createdAt = dayjs(createdAt);
}

module.exports = { Page };

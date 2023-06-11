"use strict";

const sqlite = require("sqlite3");

exports.db = new sqlite.Database("cms2.sqlite", (error) => {
  if (error) throw error;
  else console.log("DB Connected");
});

"use strict";

var dbm;
var type;
var seed;

/**
 * We receive the dbmigrate dependency from dbmigrate initially.
 * This enables us to not have to rely on NODE_PATH.
 */
exports.up = function (db, callback) {
  db.createTable(
    "calories",
    {
      id: { type: "int", primaryKey: true, autoIncrement: true },
      calorie_intake: { type: "int", notNull: true },
      date: { type: "date", notNull: true },
    },
    callback
  );
};

exports.down = function (db, callback) {
  db.dropTable("calories", callback);
};

exports.down = function (db) {
  return null;
};

exports._meta = {
  version: 1,
};

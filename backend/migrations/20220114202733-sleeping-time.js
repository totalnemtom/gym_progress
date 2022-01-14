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
    "sleepingtime",
    {
      id: { type: "int", primaryKey: true, autoIncrement: true },
      date: { type: "date", notNull: true },
      sleep_time: { type: "int", notNull: true },
    },
    callback
  );
};

exports.down = function (db, callback) {
  db.dropTable("sleepingtime", callback);
};

exports._meta = {
  version: 1,
};

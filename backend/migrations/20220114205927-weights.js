"use strict";

var dbm;
var type;
var seed;

/**
 * We receive the dbmigrate dependency from dbmigrate initially.
 * This enables us to not have to rely on NODE_PATH.
 */
exports.setup = function (options, seedLink) {
  dbm = options.dbmigrate;
  type = dbm.dataType;
  seed = seedLink;
};

exports.up = function (db, callback) {
  db.createTable(
    "weights",
    {
      id: { type: "int", primaryKey: true, autoIncrement: true },
      weight: { type: "int", notNull: true },
      machineid: {
        type: "int",
        notNull: true,
        foreignKey: {
          name: "machine_id_machine_fk",
          table: "machines",
          mapping: "id",
          rules: {
            onDelete: "CASCADE",
          },
        },
      },
    },
    callback
  );
};

exports.down = function (db) {
  db.dropTable("weights", callback);
};

exports._meta = {
  version: 1,
};

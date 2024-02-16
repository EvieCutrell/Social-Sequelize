const { db, Model, DataTypes } = require("../db/connection.js");

let Like = db.define("Like", {
    reactionType: DataTypes.STRING,
    CreatedAt: DataTypes.STRING
});

module.exports = Like;
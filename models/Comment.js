const { db, DataTypes, Model } = require("../db/connection.js");

let Comment = db.define("Comment", {
    body: DataTypes.STRING,
    createdAt: DataTypes.STRING
});


module.exports = Comment;
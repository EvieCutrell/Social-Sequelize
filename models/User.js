const { db, DataTypes, Model } = require("../db/connection.js");

let User = db.define("User", {
    username: DataTypes.STRING,
    email: DataTypes.STRING
});


module.exports = User;
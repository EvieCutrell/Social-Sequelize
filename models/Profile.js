const { db, DataTypes, Model } = require("../db/connection.js");

let Profile = db.define("Profile", {
    bio: DataTypes.STRING,
    profilePicture: DataTypes.STRING,
    birthday: DataTypes.STRING
});


module.exports = Profile;
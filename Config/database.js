const mongoose = require("mongoose");

const set07DB = "mongodb://0.0.0.0:27017/set07DataBase";

const DataBase = async () => {
  try {
    const dbconnect = await mongoose.connect(set07DB);
    console.log("");
    console.log(`DataBase connected to ${dbconnect.connection.host}`);
  } catch (error) {
    console.log("An error occurred while collecting to database", error);
  }
};

module.exports = DataBase();

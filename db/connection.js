require("dotenv").config();
const mongoose = require("mongoose");
const db = mongoose.connection;
const { MONGODBURI } = process.env;
// mongoose.Promise = Promise
const config = {
    useUnifiedTopology: true,
    useNewUrlParser: true,
    useFindAndModify: false,
};

mongoose.connect(MONGODBURI, config);

db.on("error", (err) => console.log(err.message + " is mongod not running?"));
db.on("connected", () => console.log("mongod connected: ", MONGODBURI));
db.on("disconnected", () => console.log("mongo disconnected"));

module.exports = mongoose
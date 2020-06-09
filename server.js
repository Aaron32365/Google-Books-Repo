const express = require("express");
const app = express();
const path = require("path");
const mongoose = require("mongoose");
// const db = require("./model");
const routes = require("./routes/api-routes.js")

// connect mongoose db (options to remove depracation warnings)
mongoose.connect(/*process.env.MONGODB_URI || */"mongodb://localhost/googlebooks", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
  useFindAndModify: false
})

const mongoose_db = mongoose.connection;


// static assets
app.use(express.static(path.join(__dirname, "public")));

// middleware for parsing req.body
app.use(express.json());
app.use(express.urlencoded({extended: true}));


// api routes
app.use(routes);


const PORT = process.env.PORT || 3001;


mongoose_db.once("open", function() {
  app.listen(PORT, () => {console.log("Server Listening on Port", PORT)});
})


mongoose_db.on("error", function() {
  console.error("database failed to open");
})


console.log("serverjs running")
const express = require("express");
const app = express();
const path = require("path");
const mongoose = require("mongoose");
const routes = require("./routes/api-routes.js")

// connect mongoose db (options to remove depracation warnings)

var MONGODB_URI = process.env.MONGODB_URI || "mongodb://localhost/googlebooks"

// mongoose.connect(/*process.env.MONGODB_URI || */"mongodb://localhost/googlebooks", {
//   useNewUrlParser: true,
//   useUnifiedTopology: true,
//   useCreateIndex: true,
//   useFindAndModify: false
// })


mongoose.connect(MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
  useFindAndModify: false
})

const mongoose_db = mongoose.connection;


// static assets
// app.use(express.static(path.join(__dirname, "public")));

// middleware for parsing req.body
app.use(express.json());
app.use(express.urlencoded({extended: true}));



// app.use(express.static(path.join(__dirname, './public')))
app.use(express.static(path.join(__dirname,'google-books-app/build')))

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

app.get('*', function(_, res) {
  res.sendFile(path.join(__dirname, './google-books-app/build/index.html'), function(err) {
    if (err) {
      res.status(500).send(err)
    }
  })
})
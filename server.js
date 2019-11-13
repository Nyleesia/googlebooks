const express = require("express");
const mongoose = require ("mongoose");
const path = require ("path");
const routes= require ("./routes");

const PORT = process.env.PORT || 3001;
const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(require('body-parser').urlencoded({ extended: true }));

if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

const url = process.env.MONGODB_URI || "mongodb://localhost:27017/Book";

mongoose.connect( url, {
    useCreateIndex: true, 
    useNewUrlParser: true, 
    useUnifiedTopology: true 
}, function(err, db) {
    if (err) throw err;
    console.log(`Database connected.`);  
});

app.use(routes);

if(process.env.NODE_ENV === "production"){
    app.use(function(req, res) {
      res.sendFile(path.join(__dirname, "./client/build/index.html"));
    });
}

app.listen(PORT, () => {
  console.log(`Server connected on port: ${PORT}.`);
});
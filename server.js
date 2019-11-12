const express = require("express");
const mongoose = require ("mongoose");
// const routes= require ("./routes");

const PORT = process.env.PORT || 3001;
const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

// app.use(routes);
const url = process.env.MONGODB_URI || "mongodb://localhost/googlebooks";

mongoose.connect( url, {
    useCreateIndex: true, 
    useNewUrlParser: true, 
    useUnifiedTopology: true 
}, function(err, db) {
    if (err) throw err;
    console.log(`Database created.`);
});

app.listen(PORT, () => {
  console.log(`Server connected on port: ${PORT}.`);
});
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const bookSchema = new Schema({
    title: { 
      type: String, 
      required: true 
    },

    authoredBy: [
        {
          type: String, 
          required: true
        }
    ],

    description: {
      type: String
    }, 
  
    image: {
      type: String, 
      trim: true
    },

    link: {
      type: String, 
      trim: true
    },

    published: { 
      type: Date, 
      default: Date.now 
    }
});

const Book = mongoose.model("Book", bookSchema);

module.exports = Book;
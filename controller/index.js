  
const mongoose = require('mongoose');
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

const BookModel = mongoose.model('Book', bookSchema);

module.exports = {
  findAllBooks: function(req, res) {
    console.log(req.query);
    return BookModel
      .find(req.query)
      .sort({ published: -1 })
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  findBookById: function(req, res) {
    console.log(req.params.id);
    return BookModel
      .findById( req.params.id)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  saveBook: function(req, res) {
    console.log(req.body);
    return BookModel
      .create(req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  updateBook: function(req, res) {
    console.log(req.params.id);
    console.log(req.body);
    return BookModel
      .findOneAndUpdate({ _id: req.params.id }, req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  deleteBook: function(req, res) {
    console.log(req.params.id);
    return BookModel
      .findById({ _id: req.params.id })
      .then(dbModel => dbModel.remove())
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  }
};
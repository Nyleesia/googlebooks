  
const db = require("../models");

module.exports = {
  findAllBooks: function(req, res) {
    console.log(req.query);
    return db.Book
      .find(req.query)
      .sort({ published: -1 })
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  findBookById: function(req, res) {
    console.log(req.params.id);
    return db.Book
      .findById( req.params.id)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  saveBook: function(req, res) {
    console.log(req.body);
    return db.Book
      .create(req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  updateBook: function(req, res) {
    console.log(req.params.id);
    console.log(req.body);
    return db.Book
      .findOneAndUpdate({ _id: req.params.id }, req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  deleteBook: function(req, res) {
    console.log(req.params.id);
    return db.Book
      .findById({ _id: req.params.id })
      .then(dbModel => dbModel.remove())
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  }
};
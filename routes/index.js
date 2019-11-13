const express = require('express');
const router = require("express").Router();
const controller = require("../controller");

router.get(
  "/", (req, res) => {
    controller.findAllBooks (req, res)
}
); 

router.get(
  "/api/book/:id", (req, res) => {
    controller.findBookById (req, res)
}
); 

router.get(
  "/api/books", (req, res) => {
    controller.findAllBooks (req, res)
}
); 

router.post(
  "/api/save", (req, res) => {
    controller.saveBook (req, res)
}
); 

router.put(
  "/api/update/:id", (req, res) => {
    controller.updateBook (req, res)
}
); 

router.delete(
  "/api/delete/:id", (req, res) => {
    controller.deleteBook (req, res)
}
); 

module.exports = router;
const express = require('express');
const router = require("express").Router();
const controller = require("../controller");

router.get(
  "/", (req, res) => {
    controller.findAllBooks (req, res)
}
); 

router.get(
  "/:id", (req, res) => {
    controller.findBookById (req, res)
}
); 

router.post(
  "/", (req, res) => {
    controller.saveBook (req, res)
}
); 

router.put(
  "/:id", (req, res) => {
    controller.updateBook (req, res)
}
); 

router.delete(
  "/:id", (req, res) => {
    controller.deleteBook (req, res)
}
); 

module.exports = router;
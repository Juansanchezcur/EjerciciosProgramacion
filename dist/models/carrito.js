"use strict";

var mongoose = require("mongoose");
var carritosCollection = "carritos";
var CarritoSchema = new mongoose.Schema({
  productos: {
    type: Array,
    "default": []
  }
}, {
  timestamps: true
});
var carritoModel = mongoose.model(carritosCollection, CarritoSchema);
module.exports = carritoModel;
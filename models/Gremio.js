const mongoose = require('mongoose');

const GremioSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    unique: true,
  },
  house: {
    type: String,
    required: true,
  },
  cantidadMiembros: {
    type: Number,
    required: true,
  },
  status: {
    type: Number,
    required: true,
  },
});

module.exports = mongoose.model('Gremio', GremioSchema);
const mongoose = require('mongoose');
const { Schema } = mongoose

const pesanLesSchema = new Schema({
  
})

const PesanLes = mongoose.model("PesanLes", pesanLesSchema)

module.exports = PesanLes
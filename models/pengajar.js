const mongoose = require('mongoose');
const { Schema } = mongoose

const pengajarSchema = new Schema({
  
})

const Pengajar = mongoose.model("Pengajar", pengajarSchema)

module.exports = Pengajar
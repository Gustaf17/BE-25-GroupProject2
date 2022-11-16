const mongoose = require('mongoose');
const { Schema } = mongoose

const pesanLesSchema = new Schema({
  pesertaLes : String,
  jenjangPendidikan : String,
  topik : String,
  detilTopik : String,
  tanggal : String,
  mulai : String,
  selesai : String,
  infotTambahan : String,
  pengajarID : String,
  userId : String,
})

const PesanLes = mongoose.model("PesanLes", pesanLesSchema)

module.exports = PesanLes
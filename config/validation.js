const Joi = require("joi");

const registerValidation = (data) => {
  const schema = Joi.object({
    name: Joi.string().required(),
    email: Joi.string().email().required(),
    password: Joi.string().min(6).required(),
  });

  return schema.validate(data);
};

const loginValidation = (data) => {
  const schema = Joi.object({
    email: Joi.string().email().required(),
    password: Joi.string().min(6).required(),
  });

  return schema.validate(data);
};
const pesanLesValidation = (data) => {
  const schema = Joi.object({
    pesertaLes: Joi.string().required(),
    jenjangPendidikan: Joi.string().required(),
    topik: Joi.string().required(),
    detilTopik: Joi.string(),
    tanggal: Joi.string().required(),
    mulai: Joi.string().required(),
    selesai: Joi.string().required(),
    infotTambahan: Joi.string(),
    pengajarID: Joi.string().required(),
    userId: Joi.string().required(),
  });
  return schema.validate(data);
};
const pengajarValidation = (data) => {
  const schema = Joi.object({
    nama: Joi.string().required(),
    pendidikan: Joi.string().required(),
    deskripsi: Joi.string().required(),
    edukasi: Joi.string().required(),
    bidangAjar: Joi.string().required(),
  });
};

module.exports.pesanLesValidation = pesanLesValidation;
module.exports.registerValidation = registerValidation;
module.exports.loginValidation = loginValidation;
module.exports.pengajarValidation = pengajarValidation;

const jwt = require("jsonwebtoken");
const bcrypt = require('bcrypt')
const User = require("../models/user")

const { loginValidation } = require('../config/validation')
const loginKEY = "yessir"

module.exports = {
    author: (req,res) =>{
      try {
        const auth = req.headers.authorization
        const token= auth.split(' ')[1]
       
       const isTOkenValid = jwt.verify(token, "yessir")
       
       
         res.json({
           message: "Authentication",
         });
      } catch (error) {
        res.status(500).json({
          message : "Internal Server Error"
        })
      }  
        
      },
      
      login: async (req,res) =>{
        const data = req.body
        const user = await User.findOne({email : data.email})
        const cekPass = bcrypt.compareSync(data.password, user.password)
    
        const token = jwt.sign(
          {
            id: user.id,
          },
          loginKEY ,{expiresIn : '10m'}
        );
    
        if(cekPass){
          res.json({
            message: "Login Succesful",
            token
          })
        } else {
          res.json({
            message: "Something wrong with your brain"
          })
        }
      },
}

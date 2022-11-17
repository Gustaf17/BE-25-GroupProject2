const jwt = require("jsonwebtoken");
    const verifyUser = (req,res) =>{
      const loginKEY = "anotherone"
      try {
        const auth = req.headers.authorization
        const token= auth.split(' ')[1]
       
       const isTOkenValid = jwt.verify(token, loginKEY)
       
       
         res.json({
           message: "Authentication",
         });
      } catch (error) {
        res.status(500).json({
          message : "Internal Server Error"
        })
      }     
      }
      
      const verifyAdmin = (req,res,next) =>{
        const adminKEY = "yessir"

        const token = req.header('authAdmin')
        if(!token) return res.status(400).json({
            status: res.statusCode,
            message: 'Access Denied !'
        })
        
        try {
          const verified = jwt.verify(token, adminKEY)        
          req.user = verified
          next() 
         
        } catch (error) {
          res.status(400).json({
            status: res.statusCode,
            message: 'Invalid Token !'
        })
        }
      }

      module.exports.verifyUser = verifyUser
      module.exports.verifyAdmin = verifyAdmin

      


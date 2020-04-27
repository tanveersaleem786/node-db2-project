const db = require("../data/config")

module.exports = {

    validateCarID: () => { 
    
       return async (req, res, next) => {
          try {
             const car = await db("cars").where("id",req.params.id).first()
             if(!car) { 
                res.status(404).json({message: "Invalid Car ID"})
             } else {
                req.car = car            
                next()
             }
    
          } catch(err) {
             next(err)
          }
       }
    },

    validateCarData: () => {

      return async (req, res, next) => {
   
          if(req.body.constructor === Object && Object.keys(req.body).length ===0) {
   
                  res.status(404).json({message: "missing car data"})
   
          } else if(!req.body.vin || !req.body.make || !req.body.model || !req.body.mileage) {
   
                  res.status(404).json({message: "missing vin, make, model or mileage field"})
   
          } else {
                 next()
          }        
   
      }
   },

   isVinNumUnique: () =>  {

      return async (req, res, next) => {
          try {  
                const carID = req.params.id
                const carQry = db("cars").where("vin", req.body.vin)
                if(carID) {
                  carQry.whereNot("id",carID)  // in case of update   
                } 
                
                if(await carQry.first()) {
                    res.status(404).json({message: "VIN number alreday exist"})           
                } else {
                    next()          
                }
   
          } catch (err) {
                next(err)
          }
          
   
      }
   }
   

}
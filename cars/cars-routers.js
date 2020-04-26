const express = require("express")
const db = require("../data/config")
const {validateCarID, validateCarData, isVinNumUnique} = require("../middleware/car")

const router = express.Router()

// Get All Cars
router.get("/", async (req, res, next) => {
  
   try {
      const cars = await db("cars")
      res.json(cars)
   } catch(err) {
      next(err)
   }

})

// Get Car by ID
router.get("/:id", validateCarID(), (req, res) => {

   res.status(200).json(req.car)
     
})

// Create Car
router.post("/", validateCarData(), isVinNumUnique(), async (req, res, next) => {
    
   try {
         const payload = {
            vin: req.body.vin,
            make: req.body.make,
            model: req.body.model,
            mileage: req.body.mileage,
            transmission_type: req.body.transmission_type,
            title: req.body.title
         } 
         const [carID] = await db("cars").insert(payload)
         const car = await db("cars").where("id",carID)
         res.status(201).json(car)
    } catch(err) {
         next(err)
    }
})










module.exports =  router
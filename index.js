const express = require("express")
const carsRouter = require("./cars/cars-routers")
const server = express()

server.use(express.json())
server.use("/api/cars",carsRouter)
const port = process.env.PORT || 9090


server.use((req, res) => {
   res.status(404).json({
       message: "Router not found"
   })
})

server.use((err ,req, res, next) => {
   console.log(err) 
   res.status(500).json({       
       error: "Something went wrong"
   })
})

server.listen(port, () => {
    console.log(`Server running at ${port}`)
})
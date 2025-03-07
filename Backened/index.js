const express = require("express")
const cors = require("cors")
require("./db/mongoose")
const user = require("./user")
const app = express()
app.use(express.json())
app.use(cors())

app.post("/register",async (req,res)=>{
    let data = new user(req.body)
    let result =  await data.save()
   res.send(result)
})
app.listen(4000)

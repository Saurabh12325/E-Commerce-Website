const express = require("express")
const cors = require("cors")
require("./db/mongoose")
const user = require("./user")
const product = require("./product")
const app = express()
app.use(express.json())
app.use(cors())

app.post("/register",async (req,res)=>{
    let data = new user(req.body)
    let result =  await data.save()
    result = result.toObject()
    delete result.password
   res.send(result)
})
//login ki api
app.post("/login", async (req,res)=>{
    console.log(req.body)
  if(req.body.password && req.body.email){
    let users = await user.findOne(req.body).select('-password ')
    if(users){
        res.send(users)
    }
  }
  else{
    res.send({message:"Invalid Credentials"})
}
})

//product ki api
app.post("/add-product", async(req,res)=>{
  let Product = new product(req.body)
  let result = await Product.save()
  res.send(result)
})
app.listen(4000)

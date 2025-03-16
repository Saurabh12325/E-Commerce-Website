const express = require("express")
const cors = require("cors")
require("./db/mongoose")
const user = require("./user")
const product = require("./product")
const app = express()
app.use(express.json())
app.use(cors())


//register ki api
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

//get all the products
app.get("/products",async(req,res)=>{
  let products =  await product.find()
  if(products.length>0){
    res.send(products)
  }
  else{
    res.send({message:"No products found"})
  }
})
//delete product api
app.delete("/product/:id",async(req,res)=>{

  let result = await product.deleteOne({_id:req.params.id})
  if(result.deletedCount>0){
    res.send({message:"Product Deleted"})
  }
  else{
    res.send({message:"Product not found"})
  }
})

//single product ki api using id 
app.get("/product/:id",async(req,res)=>{
  let result = await product.findOne({_id:req.params.id})
  if(result){
    res.send(result)
  }
  else{
    res.send({message:"Product not found"})
  }
})
//update product ki api
app.put('/product/:id',async(req,res)=>{
  let result = await product.updateOne({_id:req.params.id},{$set:req.body})
res.send(result)
})
//search ki api
app.get('/search/:key',async(req,res)=>{
  let result = await product.find(
    {"$or":[
      {name:{$regex: req.params.key}},
      {company:{$regex: req.params.key}},
      {category:{$regex: req.params.key}}
    ]}
   )
   res.send(result)
  })
  



app.listen(4000)

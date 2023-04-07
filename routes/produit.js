const express= require('express')
const product=require('../models/produit')

const productRouter=express.Router()
// new product  
productRouter.post('/add',async(req,res)=>{
    try {
       const newproduct =new product(req.body) 
       const result = await newproduct.save()
       res.send({product:result,msg:"new product is added"})
    } catch (error) {
       console.log(error) 
    }
})

    //get all product
    
    productRouter.get('/all',async(req,res)=>{
        try {
           const result = await product.find()
           res.send({product:result,msg:"all product is finded "})
        } catch (error) {
           console.log(error) 
        }
    })
    // get product by id
        productRouter.get('/:id',async(req,res)=>{
            try {
               const result = await product.findById({_id:req.params.id})
               res.send({product:result,msg:" product  by id is finded "})
            } catch (error) {
               console.log(error) 
            }
})
//delete by id
productRouter.delete('/:id',async(req,res)=>{
    try {
       const result = await product.findByIdAndDelete({_id:req.params.id})
       res.send({msg:"product  by id is deleted"})
    } catch (error) {
       console.log(error) 
    }
})
//update by id
productRouter.put('/:id',async(req,res)=>{
    try {
       const result = await product.findByIdAndUpdate(
         {_id:req.params.id},
         {$set:{...req.body}}
         )
       res.send({product:result,msg:"product  by id is updated"})
    } catch (error) {
       console.log(error) 
    }
})
module.exports= productRouter
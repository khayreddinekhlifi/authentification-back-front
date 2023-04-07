const mongoose =require('mongoose')
const schema =mongoose.Schema
const produitschema= new schema({

    name:{
        type:String,
        required:true
    },
    cathegorie:{
        type:String,
        required:true
    },
    price:{
        type:Number,
        required:true
    },
    description:{
        type:String,
    },
    image:{
        type:String,
        default:"https://cdn.tmobile.com/content/dam/t-mobile/en-p/cell-phones/Google/Google-Pixel-7/Obsidia/Google-Pixel-7-Obsidian-thumbnail.png"
    }
})
const product =mongoose.model('produit',produitschema)
module.exports=product
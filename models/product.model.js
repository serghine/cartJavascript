const mongoose=require('mongoose');
const Schema=mongoose.Schema;

const productSchema=new Schema({
    name:{
        type:String,
        trim:true,
        required:true
    },
    description:{
        type:String,
        trim:true,
        required:true
    },
    image:{
        type:String
    },
    prix:{
        type:Number,
        required:true
    }
})
module.exports=mongoose.model('Product',productSchema);
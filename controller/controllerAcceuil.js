const Product=require('../models/product.model');


exports.getAcceuil=async function(req,res,next){
    const products=await Product.find()
    res.render('test',{products:products});
}
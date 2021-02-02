const Product=require('../models/product.model');

exports.getAJOUTProduct=function(req,res,next){
res.render('ajoutProduct');
}

exports.postProduct=function(req,res,next){
    const product=new Product({
        name:req.body.name,
        prix:req.body.prix,
        image:req.body.image,
        description:req.body.description
    })
    product.save()
    .then(function(err,result){
       res.redirect('product');
    }).catch(function(error){console.log('erreur de chargement',error)})
}
const express=require('express');
const controllerProduct=require('../controller/controllerProduct');

const router=express.Router();
router.get('/product',controllerProduct.getAJOUTProduct);
router.post('/addProduct',controllerProduct.postProduct);




module.exports=router;
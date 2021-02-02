const express           =require('express');
const controllerAcceuil =require('../controller/controllerAcceuil');

const router=express.Router();
router.get('/',controllerAcceuil.getAcceuil);





module.exports=router;
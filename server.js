const express       =require('express');
const hbs           =require('hbs');
const bodyParser    =require("body-parser");
const mongoose      =require('mongoose');
const path          =require('path')


//importation
const routerProduct=require('./router/routerProduct');
const routerAcceuil=require('./router/routerAcceuil');



const app=express();
app.set('view engine',"hbs");
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname,"./public")));


app.use(routerAcceuil);
app.use(routerProduct);


const port=2000;
mongoose.connect('mongodb://localhost:27017/testLocalStorage',{useCreateIndex:true,useFindAndModify:true,useNewUrlParser:true,useUnifiedTopology:true})
.then(function(){
    app.listen(port,function(){
        console.log(`le server est lancé a cette url http://localhost:${port}`);
    })
}).catch(function(error){
    console.log('erreur connexion mongoose',error)
})



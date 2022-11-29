var express = require('express');
var app = express();
const {getProducts} =require('./productshandle')
const {getOrders} =require('./ordershandle')

const { products } = require('./handlers/products') 
const { db } = require("./util/admin");

const {  postproduct } = require('./handlers/post_products')
db.settings({ ignoreUndefinedProperties: true })

const bp = require('body-parser') 
app.use(bp.json())
app.use(bp.urlencoded({ extended: true }))
const PORT = process.env.PORT || 5050
app.get('/', (req, res) => {
res.send('This is my demo project') 
})  
app.get('/products', getProducts);
app.post('/postproducts',  async(req, res) => {
    (async ()=>{
     try{   
 await db.collection('products').doc(`/${req.body.id}/`).create({
    id:req.body.id,
     description: req.body.description,
     imageurl:  req.body.imageurl,
     isfavorite:  req.body.isfavorite,
     price:  req.body.price,
     title: req.body.title
 
 });
 return res.status(200).send({status:"sucsess",msg:"Data saved"})
     }catch(e){
         console.log(e);
         return res.status(500).send({status:"failed",msg:e})
     }
    })()
 });
 app.post('/postorders',  async(req, res) => {
    (async ()=>{
        a=[];
        i=0
    req.body.products.map((e)=>{a[i]={'id':e[0],'price':e[1],'qt':e[2],'nom':e[3]};i++});
        console.log(a)
     try{   
 await db.collection('orders').doc(`/${req.body.id}/`).create({
    id:req.body.id,

    prods: a,
    total:req.body.total
    
 });
 console.log(req.body)
 return res.status(200).send({status:"sucsess",msg:"Data saved"})
     }catch(e){
         console.log(e);
         return res.status(500).send({status:"failed",msg:e})
     }
    })()
 });
 app.put('/updateproduct',  async(req, res) => {
    (async (    )=>{
     try{   
 const reqDoc = db.collection('products').doc(`/${req.body.id}/`) ;
 await reqDoc.update({
    id:req.body.id,
     description: req.body.description,
     imageurl:  req.body.imageurl,
     isfavorite:  req.body.isfavorite,
     price:  req.body.price,
     title: req.body.title
 
 });
 

 console.log(req.body.id)
 return res.status(200).send({status:"sucsess",msg:"Data saved"})
     }catch(e){
         console.log(e);
         return res.status(500).send({status:"failed",msg:e})
     }
    })()
 });
 app.put('/tooglefav',  async(req, res) => {
    (async (    )=>{
        console.log((req.body.id))
     try{   
 const reqDoc = db.collection('products').doc(`/${(req.body.id).getTime()}/`) ;
 await reqDoc.update({
 
     isfavorite:  req.body.isfavorite,
 
 
 });
 

 console.log(req.body.id)
 return res.status(200).send({status:"sucsess",msg:"Data saved"})
     }catch(e){
         console.log(e);
         return res.status(500).send({status:"failed",msg:e})
     }
    })()
 });
 app.delete('/deleteproduct',  async(req, res) => {
    (async (    )=>{
     try{   
 const reqDoc = db.collection('products').doc(`/${req.body.id}/`) ;
 await reqDoc.delete();

 console.log(req.body.id)
 return res.status(200).send({status:"sucsess",msg:"Data saved"})
     }catch(e){
         console.log(e);
         return res.status(500).send({status:"failed",msg:e})
     }
    })()
 });
 app.get('/orders', getOrders)

app.listen(PORT, function () {
console.log(`Demo project at: ${PORT}!`); });
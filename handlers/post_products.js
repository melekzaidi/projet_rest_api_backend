const { db } = require("../util/admin");

exports.postproduct = async (req, res) => {
   (async ()=>{
    try{
await db.collection('products').doc(`/${Date.now()}/`).create({
    id:Date.now(),
    description:req.body.description,
    imageurl:req.body.imageurl,
    isfavorite:req.body.isfavorite,
    price:req.body.price,
    title:req.body.title,


});
console.log(req.body)
return res.status(200).send({status:"sucsess",msg:"Data saved"})
    }catch(e){
        console.log(e);
        return res.status(500).send({status:"failed",msg:e})
    }
   })()
};
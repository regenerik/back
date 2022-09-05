const { Router } = require('express');
const router = Router();
const {Quotes} = require("../db")
const { CORS_URL } = process.env;

router.get("/",async(req,res)=>{

    res.send(await Quotes.findAll())
    
});





module.exports = router;
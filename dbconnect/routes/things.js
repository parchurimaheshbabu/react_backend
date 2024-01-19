"use strict";
const express=require('express');
let router=express.Router();

// router.use(function(req,res,next){

//     console.log(req.url ,'@', Date.now());
//     next();
// })


router
.route("/cars")
.get((req,res)=>{
    console.log("hi get /things/cars")
    res.send("hi get /things/cars")

    })

.post((req,res)=>{
    console.log("hi post /things/cars")
    res.send("hi post /things/cars")

     });


router
.route("/cars:carid")
.get((req,res)=>{
    console.log("hi  get /things/cars:carid")
    res.send("hi  get /things/cars:carid")

      })
.put((req,res)=>{
      console.log("hi put /things/cars:carid")
      res.send("hi put /things/cars:carid")

})


module.exports=router;
const express=require('express');
const app=express();
const PORT=4040;
const things=require("./routes/things");
// D:\backend\routing\index.js
// const mongoose=require('mongoose');
// mongoose.connect('mongodb://localhost:27017/abc',{useNewUrlParser:true,useUnifiedTopology:true},(err)=>{
// if (err){
//     console.log(err);
// }
// else{
//     console.log('succesfully connected')

// });



app.use(express.json())
app.use("/things",things)
//use the things.js file to handle 
//end points start with /things
app.get("/",(req,res)=>{

    console.log(' hi get  home page(/)');
    res.send(' hi get  home page(/)');

});




app.listen(PORT,err=>{
    if (err){
        return console.log('erroe ',err);

    }
    console.log(`Listening on port : ${PORT}`);

});
const express=require('express');
const dotEnv=require('dotenv');
console.log(process.env.k);
const{MongoClient}=require('mongodb');
const app=express();
const PORT=5000;
dotEnv.config()
MongoClient.connect(process.env.MONGO_URI)
.then(()=>{
console.log('Mongodb successfully connected');

})
.catch((error)=>{
    console.log(error);
})
const things=require("./routes/things");



app.use(express.json())
app.use("/things",things)
//use the things.js file to handle 
//end points start with /things
app.get("/",(req,res)=>{

    console.log(' hi get  home page(/)');
    res.send(' hi get  home page(/)');

});




app.listen(PORT,(err)=>{
    if (err){
        return console.log('erroe ',err);

    }
    console.log(`Listening on port : ${PORT}`);

});
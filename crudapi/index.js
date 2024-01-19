const express=require('express');
const dotEnv=require('dotenv');
const mongoose=require('mongoose');
const bodyparer=require('body-parser');
const employeeRoutes=require('./routes/employeeRoutes');
const app=express();
const PORT=process.env.PORT || 5000;

dotEnv.config();
app.use(bodyparer.json());
mongoose.connect(process.env.MONGO_URI)
.then(()=>{
    console.log("Mongodb Connected");
})
.catch((error)=>{
    console.log(`${error}`);
})

app.use('/employees',employeeRoutes)




app.listen(PORT,()=>{

    console.log(`server Running At ${PORT}`);
})
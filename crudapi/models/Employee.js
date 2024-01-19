const mongoose=require('mongoose');

const employeescheme = new mongoose.Schema({

    //name, email,phone,city
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    phone:{
        type:Number,
        default:false //i.e not a required field ,no need to write this statement
    },
    city:{
        type:String,
    }
})
module.exports=mongoose.model('Employee',employeescheme);

// way of export a model to use globally
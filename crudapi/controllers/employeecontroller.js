const { default: mongoose } = require('mongoose');
const Employee=require('../models/Employee');

// post
const createEmployee=async(req,res)=>{

    try{
        const{name,email,phone,city}=req.body
        // Destructure the properties in mse
        const employee =new Employee({
                   name,
                   email,
                   phone,
                    city
                                    })
     await employee.save()
    //  saving properties coming from Employee model
    // save method from mongoose

    res.status(201).json(employee)
     // 201 means created successfully
    // 200 series codes denote success
    // 300 denote redirection
    // 400 reques erroe
    //500 server errors
    }
    catch(error){
        console.log("There Is An Error",error);
        res.status(500).json({message:'server error'})
    }
}

// Get Data

const  getEmployees=async(req,res)=>{

try{
    const employees=await Employee.find()
    if(!employees){
        return res.status(404).json({message:"Employee not found"})
    }
    res.status(200).json(employees)
}
catch (error){
console.log('There is an Error',error);
res.status(500).json({message:"server error"})

}

}
//single record

const singleEmployee=async(req,res)=>{

    try{
        const employee=await Employee.findById(req.params.id)
        if(!employee){
            return res.status(404).json({message:"Employee not found"})
        }
        res.status(200).json(employee)
   }
   catch(error){

    console.error("There is An error",error)
    res.status(500).json({message:'server error'})
}
}

//update
const updateEmployee= async(req,res)=>{

    try{
        const {name,email,phone,city}=req.body
        const myEmployee =await Employee .findByIdAndUpdate(req.params.id,{name,email,phone,city})
        if(!myEmployee){
            return  res.status(404).json({message:"emoloyee not found"})
        }
    }
    catch(error){
        console.error("There Is An Error",error);
        
        res.status(500).json({message:"Server Error"})
    }
    
}


//Delete 
const deleteEmployee=async(req,res)=>{

    try{
        const deleteemployee= await Employee.findByIdAndDelete(req.params.id)
        if(!deleteemployee){
            return res.status(404).json({message:"Employee not found"})
        }
        else{
        res.status(204).json({message:"Deleted Success fully"})
        }
    }
    catch(error){
        console.error("There Is An Error",error);
        
        res.status(500).json({message:"Server Error"})
    }
}
module.exports={createEmployee ,getEmployees,singleEmployee,updateEmployee,deleteEmployee}
const User= require("../models/User");

const createUser=async(id,name,picture=null,currency=null,TimeZone=null,DefaultLanguage=null,PhoneNumber=null)=>{
    jane=await User.create({ EmailId: id,Name:name,Picture:picture,Currency:currency,TimeZone,DefaultLanguage,PhoneNumber });
    console.log(jane); 
} 
createUser(id="kasle36pratik@gmail.com",name="Pratik")




const updateUser=async(id,name,picture=null,currency=null,TimeZone=null,DefaultLanguage=null,PhoneNumber=null)=>{
    
}
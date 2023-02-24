const mongoose=require("mongoose")
mongoose.set("strictQuery",false)

const userSchema=mongoose.Schema({
    name:String,
    email:String,
    password:String
},{
    versionKey:false
})

const UserModel=new mongoose.model("user",userSchema)


module.exports={
    UserModel
}
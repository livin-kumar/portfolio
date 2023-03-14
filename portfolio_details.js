const mongoose=require('mongoose')
const schema=new mongoose.Schema(
    {
        name:String,
        email:String,
        comment:String
    }
)
module.exports=mongoose.model('data',schema)
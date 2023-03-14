const express=require('express')
const app=express()
const mongoose=require('mongoose')
const sch=require('./portfolio_details')
const bp=require('body-parser');
app.use(bp.urlencoded({extended:true}))
mongoose.connect("mongodb+srv://livinkumar8march2003:livinvijay@cluster0.mxvdyuo.mongodb.net/portfolio")
const con=mongoose.connection
con.on('open',()=>{
   console.log('Connected...')
})
app.use(express.json())
app.post('/create',async(req,res)=>{
    const data=new sch({   
    name:req.body.name,
    email:req.body.email,
    comment:req.body.comment 
    })
    await data.save()
    res.json(data)
})
app.listen(8000,()=>{
    console.log('Server Started')
})

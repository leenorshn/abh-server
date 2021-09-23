const express=require("express");
const mongoose =require('mongoose');
const cors=require('cors')
const Car=require("./car");
const Message = require("./message");
const port=process.env.PORT||7000

const app=express();
app.use(express.json())
app.use(cors())

app.get('/products',async(req,res)=>{
    const products = await Car.find({});
    return res.status(200).json(products);
})

app.post('/products',async(req,res)=>{
    const product=await Car.create(req.body);
    return res.status(201).json(product)
})
app.delete('/products/:id',async(req,res)=>{
    const id=req.params.id;
    const product=await Car.findByIdAndDelete(id);
    return res.status(204).json("ok")
})

app.post('/messages',async(req,res)=>{
    const message=await Message.create(req.body);
    return res.status(201).json(message);
})

app.delete('/messages/:id',async(req,res)=>{
    const message=await Message.findByIdAndDelete(req.params.id);
    return res.status(204).json("ok");
})

app.get("/messages",async(req,res)=>{
    const messages=await Message.find({});
    return res.status(200).json(messages)
})

app.listen(port,()=>{
    console.log('server running on port ',port);
    mongoose.connect("mongodb://localhost:27017/abh").then(()=>console.log("db connected"))
})
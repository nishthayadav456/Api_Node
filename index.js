const express=require('express');
const categoryRouting=require('./routing/categoryRouting')
const app=express();
const cors=require("cors")
app.use(cors({
    origin:"*" //acess anywhere
}))
app.use("/api",categoryRouting);
app.get('/',(req,res)=>{
    res.send('ApI is running fine')
});
app.listen(4002,()=>{
    try{
        console.log('server is running in port 4002')
    }
    catch(err){
        console.log('error found')
    }
});
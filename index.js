const express=require('express');
const categoryRouting=require('./routing/categoryRouting')
const app=express();
const cors=require("cors");
const { bollywood } = require('./routing/data');
app.use(cors({
    origin:"*" //acess anywhere
}))
app.use("/api",categoryRouting);
// app.get('/',(req,res)=>{
//     res.send('ApI is running fine')
// });
// app.get('/api/:id',(req,res)=>{  //localhost:4002/api/5
//     const id=req.params.id //this is said to be url params for fetching a particular data
//     console.log(id)
//     const data=bollywood.find(item=>item.id===id)
//     console.log(data)  
// })
app.use("/api",categoryRouting)
app.listen(4002,()=>{
    try{
        console.log('server is running in port 4002')
    }
    catch(err){
        console.log('error found')
    }
});
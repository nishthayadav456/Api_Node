const {bollywood,hollywood,Technology,fitness, food,home}=require("./data")
const bollywoodControler=(req,res)=>{
//     const id=req.params.id
//     console.log(id)
//     const data=bollywood.find((item)=>item.id==id)
//     console.log(data) 

return res.send(bollywood)
}
const hollywoodControler=(req,res)=>{
return res.send(hollywood)
 }
const technologyControler=(req,res)=>{
 return res.send(Technology)
 }
const fitnessControler=(req,res)=>{
 return res.send(fitness)
 }
const foodControler=(req,res)=>{
 return res.send(food)
 }
const homeControler=(req,res)=>{
 return res.send(home)
 }     

module.exports={bollywoodControler,hollywoodControler,technologyControler,fitnessControler,foodControler,homeControler}
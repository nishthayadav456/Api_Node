const {bollywoodControler,hollywoodControler,technologyControler,fitnessControler,foodControler,homeControler}=require('../routing/categoryControl')
const categoryRouting=require("express").Router()
categoryRouting.get("/home",homeControler)
categoryRouting.get("/bollywood",bollywoodControler)
categoryRouting.get("/hollywood",hollywoodControler)
categoryRouting.get("/Technology",technologyControler)
categoryRouting.get("/fitness",fitnessControler )
categoryRouting.get("/food",foodControler)

module.exports=categoryRouting
const express= require("express")
const bodyParser=require("body-parser")
const user= require("./models/user")
const userRouter=require("./routes/userRoutes")
const migration= require("./migration/migration")
const cors=require('cors')

const app= express()
const port= 3000

app.use(cors())
app.use(bodyParser.json())
app.use('/api',userRouter)
app.use('/api', migration)

user.createUserTable()
app.listen(port, ()=>{
    console.log(`jalan di port 3000+${port}`)
})

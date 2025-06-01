const express= require("express")
const bodyParser=require("body-parser")
const user= require("./models/user")
const bukutamu= require("./models/bukutamu")
const userRouter=require("./routes/userRoutes")
const bukutamuRouter=require("./routes/bukutamuRouter")
const migration= require("./migration/migration")
const cors=require('cors')

const app= express()
const port= 3000

app.use(cors())
app.use(bodyParser.json())
app.use('/api',userRouter)
app.use('/api', bukutamuRouter)
app.use('/api', migration)

user.createUserTable()
bukutamu.createBukutamuTable()
app.listen(port, ()=>{
    console.log(`jalan di port 3000+${port}`)
})

import cookieParser from "cookie-parser"
import express from "express"
import cors from "cors"
import connectDb from "./utils/db.js"
import userRoute from "./routes/user.routes.js"
import companyRoute from "./routes/company.route.js"
import jobRoute from "./routes/job.route.js";
import applicationRoute from "./routes/appliation.route.js";
import  dotenv from "dotenv"
dotenv.config()
const app =express()


app.use(express.json())//fot parsing incoming json in req.body
app.use(cookieParser())//forparsing incoming cookie
app.use(express.urlencoded({extended:true}))//for form data
const corsOptions ={
    origin:"http://localhost:5173",
    credentials:true
}
app.use(cors(corsOptions))
const PORT=process.env.PORT || 3001



// routes
app.use("/api/v1/user",userRoute)
app.use("/api/v1/company",companyRoute)
app.use("/api/v1/job",jobRoute)
app.use("/api/v1/application",applicationRoute)


app.listen(PORT,()=>{
    connectDb()
    console.log("Server is Runing no",PORT)
})
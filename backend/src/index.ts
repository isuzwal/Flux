import   express  from  "express"
import cors from "cors";
import { MongoDB_Connections } from "./database/connections";

const app=express()

app.use(express())

app.use(cors())
MongoDB_Connections()
const PORT=8000;

app.listen(PORT,()=>{
    console.log("Server is running at port ",PORT)
})
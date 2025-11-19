import {connect } from "mongoose";


export const MongoDB_Connections=async()=>{
 try{
    await connect("mongodb+srv://isuzwal_db_user:Oi32FA8OaqGOQXAy@cluster1.vyrwper.mongodb.net/flux?appName=Cluster1")
 console.log("Connections is working")
 }catch(error){
 console.log("Conections Fail Data",error)
 }
}



import { Request,Response } from "express"
import { AccountLoginScheam,AccountCreateScheam } from  "../types/index"



export const CreateAccount=async(req:Request,res:Response)=>{
     try{
          const  account_vaildated_data=AccountCreateScheam.parse(req.body);
          const {username,email,password}=account_vaildated_data
          console.log(account_vaildated_data);
     }catch(error){
      console.log("Error",error)
     }
}
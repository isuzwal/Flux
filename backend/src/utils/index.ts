import   {  z }  from  "zod"


// Account Create
 export const AccountCreateScheam= z.object({
     username:z.string().min(3,"Username must be at least 3 characters").max(10),
     email:z.string().email(),
     password:z.string().min(8),
     confirm:z.string(),
})
.refine((data)=>data.password===data.confirm,{
     message:"Password don't match",
     path:["confirm"]
});
// Login 
export const AccountLoginScheam=z.object({
     email:z.string().email(),
      password:z.string().min(8),
      confirm:z.string(),
})
.refine((data)=>data.password===data.confirm,{
     message:"Password don't match",
     path:["confirm"]
});
"use client"
import Link from "next/link"
import { InputGroup, InputGroupAddon, InputGroupInput } from "./input-group"
import { EyeClosed, LockIcon, MailIcon } from "lucide-react"
import { useState } from "react"
import { authClient } from "@/lib/client"
import { set } from "better-auth"

export const LoginPage= ()=>{
     
    const [email,setEmail]=useState("")
    const [password,setPassword]=useState("")
   const [laoding,setLoading]=useState(false);
   const [error,setError]=useState<string |null>(null);

    // const handleLogin=async()=>{
    //     setLoading(true);
    //      try{
    //          const {data,error}=await authClient.signIn.emailPassword({
    //              email:email,
    //              password:password
    //             })
    //             if(error){
    //              setError(error.message)
    //              return
    //             }
    //         }catch(err){
    //             const error=err as Error;
    //             setError( error.message || "Login failed. Please try again.")
    //         }finally{
    //             setLoading(false);
    //         }
    // }

    return (
        <div className=" relative border min-h-screen flex items-center justify-center ">
           <div className="border flex flex-col justify-center   max-w-xl w-full mx-auto p-8 space-y-8 rounded-xl dark:bg-zinc-900 dark:border-zinc-900 bg-slate-100 border-slate-50 shadow">
            <div className=" flex justify-center p-1">
                <div className="rounded-lg border-2 p-0 ">
                <div className="rounded-[8px] w-12 h-12 border flex items-center justify-center dark:bg-neutral-900/60 dark:border-neutral-900/60 dark:text-white bg-slate-100   border-slate-100 text-neutral-800">
                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24">
                  <path fill="currentColor" d="M12.585 2.082a.75.75 0 0 0-.67 0l-6 3a.75.75 0 0 0-.415.67V17.48a.75.75 0 0 0 .351.636l6 3.77A.75.75 0 0 0 13 21.25v-6.034l5.585-2.793a.75.75 0 0 0 0-1.341l-4.658-2.33l4.658-2.329a.75.75 0 0 0 0-1.341l-6-3Z"/>
                </svg>
                </div>
                </div>
            </div>
            <div className=" flex justify-center flex-col gap-6 ">
                <div className="flex justify-center  gap-1 flex-col items-center ">
                <h1 className="font-bold font-sans text-xl lg:text-2xl ">Welcome Back</h1>
                <p className="text-neutral-400 font-medium text-[16px]">Don&apos;t have an account ? {" "}
                    <span className="hover:underline duration-300 transition-all hover:text-neutral-600 dark:hover:text-neutral-200"><Link href="/register">Register</Link></span>
                </p>
                </div>
                <div className="flex gap-4 flex-col">
                    <InputGroup>
                    <InputGroupInput placeholder="example@gmail.com"  type="text" value={email} onChange={(e)=>setEmail(e.target.value)}/>
                    <InputGroupAddon>
                    <MailIcon />
                    </InputGroupAddon>
                    </InputGroup>
                     <InputGroup>
                    <InputGroupInput placeholder="Password" type="password" value={password} onChange={(e)=>setPassword(e.target.value)}/>
                    <InputGroupAddon>
                     <LockIcon />
                    </InputGroupAddon>
                    </InputGroup>
                </div>
                </div>
           </div>
        </div>
    )
} 
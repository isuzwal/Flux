"use client"
import Link from "next/link"

import {  LockIcon, MailIcon } from "lucide-react"
import { useState } from "react"
import { LoginGoogle } from "@/lib/client"



export const LoginPage= ()=>{
     
    const [email,setEmail]=useState("")
    const [password,setPassword]=useState("")
//    const [laoding,setLoading]=useState(false);
//    const [error,setError]=useState<string |null>(null);

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
        <div className=" relative border min-h-screen flex items-center justify-center lg:p-0 p-2 dark:bg-zinc-900 bg-neutral-50/10">
           <div className="border-2 flex flex-col justify-center   max-w-md w-full mx-auto p-8 space-y-4 rounded-xl dark:bg-zinc-950/30 dark:border-zinc-900 bg-zinc-50 border-zinc-100  shadow-[0_0_6px_rgba(220,220,220,0.1)] ">
            <div className=" flex justify-center p-1">
                <div className="rounded-lg border-1.5">
                <div className="rounded-[6px] w-12 h-12 border flex items-center justify-center dark:bg-neutral-900/60 dark:border-neutral-900/60 dark:text-white bg-slate-100   border-slate-200 text-neutral-800">
                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24">
                  <path fill="currentColor" d="M12.585 2.082a.75.75 0 0 0-.67 0l-6 3a.75.75 0 0 0-.415.67V17.48a.75.75 0 0 0 .351.636l6 3.77A.75.75 0 0 0 13 21.25v-6.034l5.585-2.793a.75.75 0 0 0 0-1.341l-4.658-2.33l4.658-2.329a.75.75 0 0 0 0-1.341l-6-3Z" className=""/>
                </svg>
                </div>
                </div>
            </div>
            <div className=" flex justify-center flex-col gap-5">
                <div className="flex flex-col items-center text-center gap-2">
                    <div className="flex w-full justify-end">
                    </div>
                    <h1 className="font-semibold font-sans text-lg lg:text-xl tracking-tight">Welcome back</h1>
                    <p className="text-muted-foreground text-sm flex gap-1 items-center">Sign in to continue your journey  <Link href="/register" className="text-primary text-xs underline underline-offset-4 hover:text-primary/80 transition">Register</Link></p>
                      
                </div>
                <div className="flex gap-2 flex-col ">
                    <div>
                        <label className="font-medium font-sans text-sm mb-2  border-[1.5px] dark:border-neutral-800 h-full w-full   flex gap-1 rounded-lg dark:bg-neutral-800/50 bg-white border-neutral-100 ">
                            <MailIcon className="size-5 text-neutral-500 ml-3 mt-2"/>
                         <input value={email} type="text" onChange={(e)=>setEmail(e.target.value)} 
                          className="  py-1.5 px-2 max-w-md w-full mx-auto  placeholder:text-neutral-500 font-medium text-[16px]  focus-visible:outline-none focus-visible:ring-0" placeholder="uzwal@gamil.com" 
                         />

                        </label>
                    </div>
                    <div>
                        <label className="font-medium font-sans text-sm mb-2 border-[1.5px] dark:border-neutral-800   h-full w-full   flex gap-1 rounded-lg dark:bg-neutral-800/50 bg-white border-neutral-100 ">
                            <LockIcon className="size-5 text-neutral-500 ml-3 mt-2"/>
                         <input value={password} type="password" onChange={(e)=>setPassword(e.target.value)} 
                          className="  py-1.5 px-2 max-w-md w-full mx-auto  placeholder:text-neutral-500 font-medium text-[16px]  focus-visible:outline-none focus-visible:ring-0" placeholder="Password" 
                         />

                        </label>
                    </div>
                </div>
                <div className="w-full  ">
                   <button className="w-full rounded-md bg-primary cursor-pointer  text-primary-foreground font-semibold font-sans py-2 transition hover:bg-primary/90 focus:outline-none focus:ring-0">Sign in</button>
                </div>

                <div className="flex items-center gap-2 my-2">
                    <div className="h-px  rounded flex-1 dark:bg-neutral-700 bg-neutral-300"></div>
                    <span className="text-neutral-500 text-sm font-semibold">or</span>
                    <div className="h-px  rounded flex-1 dark:bg-neutral-700 bg-neutral-300"></div>
                </div>
                                <div className=" flex gap-2 justify-center items-center">
                                 <button
                                     onClick={LoginGoogle}
                                     className="rounded-md border-[1.5px] dark:border-neutral-800 dark:bg-neutral-900 shadow-[inset_1px_2px_4px_rgba(220,220,220,0.5)] bg-slate-50 border-slate-50 flex justify-center items-center  py-2 px-4   dark:shadow-[inset_1px_3px_6px_rgba(45,45,50,0.5)] transition-all duration-300 gap-2  cursor-pointer dark:hover:bg-neutral-900/80  w-1/2 "
                                 >
                                    <svg width="20" height="20" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16">
                                        <g fill="none" fillRule="evenodd" clipRule="evenodd">
                                            <path fill="#F44336" d="M7.209 1.061c.725-.081 1.154-.081 1.933 0a6.57 6.57 0 0 1 3.65 1.82a100 100 0 0 0-1.986 1.93q-1.876-1.59-4.188-.734q-1.696.78-2.362 2.528a78 78 0 0 1-2.148-1.658a.26.26 0 0 0-.16-.027q1.683-3.245 5.26-3.86" opacity=".987"/>
                                            <path fill="#FFC107" d="M1.946 4.92q.085-.013.161.027a78 78 0 0 0 2.148 1.658A7.6 7.6 0 0 0 4.04 7.99q.037.678.215 1.331L2 11.116Q.527 8.038 1.946 4.92" opacity=".997"/>
                                            <path fill="#448AFF" d="M12.685 13.29a26 26 0 0 0-2.202-1.74q1.15-.812 1.396-2.228H8.122V6.713q3.25-.027 6.497.055q.616 3.345-1.423 6.032a7 7 0 0 1-.51.49" opacity=".999"/>
                                            <path fill="#43A047" d="M4.255 9.322q1.23 3.057 4.51 2.854a3.94 3.94 0 0 0 1.718-.626q1.148.812 2.202 1.74a6.62 6.62 0 0 1-4.027 1.684a6.4 6.4 0 0 1-1.02 0Q3.82 14.524 2 11.116z" opacity=".993"/>
                                        </g>
                                    </svg>
                                    <span className="text-md font-semibold font-sans dark:text-neutral-400 text-neutral-700">Google </span>
                                </button>
       
                   
        
                </div>
                </div>
           </div>
        </div>
    )
} 
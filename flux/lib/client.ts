
import { createAuthClient } from "better-auth/react"
import { useRouter } from "next/navigation";

export const authClient =  createAuthClient();
 const router=useRouter()

// Loging with google 
export const LoginGoogle=async ()=>{
    await authClient.signIn.social({
        provider:"google",
        callbackURL:"/"
    })
};

// Logout by google
export const LogoOutGoogle=async()=>{
    await authClient.revokeSessions()
}

// Logout with eamil and password
export const EmailLogout=async()=>{
 await authClient.signOut({
    fetchOptions:{
        onSuccess:()=>{
        router.push("/login")
        }
    }
 })
}
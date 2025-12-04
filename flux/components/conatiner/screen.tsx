interface ChildrenProps{
    children:React.ReactNode
}

 export const Section=({children}:ChildrenProps)=>{
    return(
   <main className="min-h-screen max-w-7xl mx-auto w-full ">
    {children}
   </main>
    )
}
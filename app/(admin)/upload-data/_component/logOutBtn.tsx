"use client"
import { logOut } from '@/action/auth'
import { Button } from '@/components/ui/button'
import { LogOut } from 'lucide-react'
import { useRouter } from 'next/navigation'
import React from 'react'
import { toast } from 'sonner'

export const  LogOutBtn = () => {
    const router=useRouter()
const handleLogOut=async()=>{
       try{ 
         logOut().then(data=>{
            toast.success("logout successfully ")
               router.push("/")
        })

       }catch(err){
          toast.error("something went wrong")
       }
}
  return (
    <Button onClick={handleLogOut} variant={"outline"}>
        logout <LogOut className='ml-1 w-4 h-4'/>
    </Button>
  )
}

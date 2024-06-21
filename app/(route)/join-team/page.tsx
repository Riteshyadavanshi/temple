"use client"
import { joinTeams } from '@/action/admin'
import { FormMsg } from '@/app/(admin)/_component/form-msg'
import { Button } from '@/components/ui/button'
import { Form, FormControl, FormField, FormItem, FormMessage } from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { joinTeamSchema } from '@/lib/zodSchema/join-team'
import { zodResolver } from '@hookform/resolvers/zod'
import { LoaderCircleIcon } from 'lucide-react'
import React, {  useState, useTransition } from 'react'
import { useForm } from 'react-hook-form'
import * as z from "zod"

const  Contact = () => {
    const [pending,startTransition]=useTransition()
    const [error, setError] = useState(false);
     const [success, setSuccess] = useState(false);
     const form=useForm<z.infer<typeof joinTeamSchema>>({
       resolver:zodResolver(joinTeamSchema),
       defaultValues:{
         fullName:"",
         email:"",
         mobileNumber:""
       }
     })
     
     const handleSubmit=(data:z.infer<typeof joinTeamSchema>)=>{
                setError(false)
                setSuccess(false)
                startTransition(()=>{
                   joinTeams(data).then(data=>{
                    setSuccess(true)
                     form.reset()
                  
                  })
                  .catch(err=>setError(true))
                })
     }

  return (
    <>
  
 
    <section className="bg-white dark:bg-gray-900">
      <div className="py-8 lg:py-16 px-4 mx-auto max-w-screen-md">
      <h1 className='flex justify-center font-extrabold text-[#f15a24] text-3xl'>Join our team</h1>
        <p className="mb-8 lg:mb-16 font-light text-center text-gray-500 dark:text-gray-400 sm:text-xl">
            became a team member
        </p>
        <Form  {...form}>
        <form onSubmit={form.handleSubmit(handleSubmit)} action="#" className="space-y-8">
           <FormField
            control={form.control}
            name='fullName'
            render={({field})=>(
            <>
            <FormItem>
              <FormControl>
                <div>
            <label htmlFor="fullName" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">
               Full Name <span className='text-[#f15a24]'>*</span>
            </label>
            <Input id='fullName' placeholder='Full name' disabled={pending}  {...field}/>
            </div>
            </FormControl>
            <FormMessage/>
            </FormItem>
                   
            </>)}
           />
           <FormField
            control={form.control}
            name='mobileNumber'
            render={({field})=>(
            <>
            <FormItem>
              <FormControl>
                <div>
            <label htmlFor="mobileNumber" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                Mobile Number <span className='text-[#f15a24]'>*</span>
            </label>
            <Input id='mobileNumber' type='number' placeholder='mobile number'disabled={pending} {...field}/>
            </div>
            </FormControl>
            <FormMessage/>
            </FormItem>
                   
            </>)}
           />
           <FormField
            control={form.control}
            name='email'
            render={({field})=>(
            <>
            <FormItem>
              <FormControl>
                <div>
            <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                Email <span className='text-[#f15a24]'>*</span>
            </label>
            <Input id='email' placeholder='example@gmail.com' {...field} type='email' disabled={pending}/>
            </div>
            </FormControl>
            <FormMessage/>
            </FormItem>
                   
            </>)}
           />
           
           
           {error && (
              <FormMsg message="something went wrong" variant={"error"} />
            )}
            {success && (
              <FormMsg message="joinned successfully" variant={"success"} />
            )}
           
           
           <Button type="submit" disabled={pending}>
              {pending&&<LoaderCircleIcon className='w-4 h-4 animate-spin'/>}join team
           </Button>
        </form>
        </Form>
      </div>
    </section>
    </>
  )
}

export default Contact

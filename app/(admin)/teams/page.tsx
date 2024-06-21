import { auth } from '@/auth'
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table'
import { dbConnect } from '@/lib/dbconnect'
import { joinTeam } from '@/lib/schema/join-team.schema'
import { redirect } from 'next/navigation'
import React from 'react'

  const Team = async() => {
    const user=await auth()
    if(!user){
        redirect('/')
    }
      await dbConnect()
      const teams=await joinTeam.find()
  return (
     <div className=' md:mx-[25%] py-4 px-2 mt-18 min-h-screen'>
        <h1 className='flex justify-center text-xl font-semibold'>Team members</h1>
        <div className='py-2'>
         <Table className='border' >
             <TableHeader>
                <TableRow>
                <TableHead>FullName</TableHead>
                <TableHead>Mobile No</TableHead>
                <TableHead>Email</TableHead>
              </TableRow>
             </TableHeader>
             <TableBody>
                {
                    !teams.length&&<div className='flex justify-center p-2 w-full text-red-600 '>
                        <p>member not available</p>

                    </div>
                }
               {teams.length&& teams.map(({fullName,mobileNumber,email})=>
               <>
                 <TableRow>
                    <TableCell>{fullName}</TableCell>
                    <TableCell>{mobileNumber}</TableCell>
                    <TableCell>{email}</TableCell>
                </TableRow>
                </>
                )
                }
             </TableBody>
         </Table></div>
     </div>
  )
}
export default Team
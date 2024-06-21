 

import { auth } from "@/auth"
import { ImageUploadForm } from "./_component/image-upload-form"
import { YoutubeLinkForm } from "./_component/youtube-link-form"
import { notFound } from "next/navigation"
import { LogOutBtn } from "./_component/logOutBtn"
import Link from "next/link"

const  ImageUploader = async( ) => {
    const user=await auth()
    if(!user){
       return notFound()
    }
  return (
     <div className='flex flex-col justify-center p-2 pt-4  space-y-6'>
       <div className="flex justify-between items-center ">
        <Link href={"/teams"} className="p-2 border rounded-sm ">view teams</Link>
         <LogOutBtn/>
       </div>
        <ImageUploadForm/>
        <YoutubeLinkForm/>
     </div>
  )
}

export default  ImageUploader
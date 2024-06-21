"use server"
import { dbConnect } from "@/lib/dbconnect"
import { image } from "@/lib/schema/image.schema"
import { joinTeam } from "@/lib/schema/join-team.schema"
import { youtube } from "@/lib/schema/youtube.schema"
import { imageSchema } from "@/lib/zodSchema/image"
import { joinTeamSchema } from "@/lib/zodSchema/join-team"
import { youtubeSchema } from "@/lib/zodSchema/youtube"
import * as z from "zod"


export const uploadImage=async(data:z.infer<typeof imageSchema>)=>{
     const {images}=data
     try{
        await dbConnect()
        await image.create(images)

     }catch(err){
         throw err
     }

}
export const uploadYoutubeLink=async(data:z.infer<typeof youtubeSchema>)=>{
    
     try{
        await dbConnect()
        await youtube.create(data)

     }catch(err){
         throw err
     }

}


export const joinTeams=async(data:z.infer<typeof joinTeamSchema>)=>{
    try{
        await dbConnect()
        await  joinTeam.create(data)

     }catch(err){
         throw err
     }
}
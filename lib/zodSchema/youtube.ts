
import * as z from "zod"
export const youtubeSchema=z.object({
    youtubeLink:z.string().min(1,{
        message:"video link is required"
    }),
    description:z.string().min(1,{
        message:"decription is required"
    })
})
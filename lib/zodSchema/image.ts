 import * as z from "zod"
export const imageSchema=z.object({
    images:z.array(z.object({imageUrl:z.string()})).min(1,{
         message:"atleast one image required"
    })
})
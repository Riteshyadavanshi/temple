import * as z from "zod"

export const joinTeamSchema=z.object({
     fullName:z.string().min(1,{
        message:"fullname required "
     }),
     mobileNumber:z.string().min(1,{
        message:"mobile number required "
     }),
     email:z.string().min(1,{
        message:"email required "
     }),
})
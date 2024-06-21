 "use client"
import { Form, FormControl, FormField, FormItem, FormMessage } from '@/components/ui/form'
import { imageSchema } from '@/lib/zodSchema/image'
import { zodResolver } from '@hookform/resolvers/zod'
import { useTransition } from 'react'
import { useForm } from 'react-hook-form'
import * as z from "zod"
 
import { uploadImage } from '@/action/admin'
 
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { useRouter } from 'next/navigation'
import { toast } from 'sonner'
import { ImageUpload } from '../../_component/image-upload'
import { SubmitBtn } from './submitBtn'
export const  ImageUploadForm = () => {
  const [pending,startTransition]=useTransition()
  const router=useRouter()
    const form=useForm<z.infer<typeof imageSchema>>({
        resolver:zodResolver(imageSchema),
        defaultValues:{
            images:[]
        }
    })
    const handleSubmit=(data:z.infer<typeof imageSchema>)=>{
             try{
                      startTransition(async()=>{
                          uploadImage(data).then(data=>{
                            toast.success("image upload successfully")
                          router.push("/gallery")
                      })
                      })             
             }catch(err){
                 toast.error("something went wrong")
             }
    }
  return (
    <Card >
        <CardHeader>
            <CardTitle>Uplaod gallery images</CardTitle>
            <CardDescription>you can uplaod multiple images at a time</CardDescription>
        </CardHeader>
        <CardContent>
         
         <Form {...form}>
            <form onSubmit={form.handleSubmit(handleSubmit)} className='space-y-5'
            >
              <FormField
               control={form.control}
               name="images"
               render={({field})=>(
                <>
                 <FormItem>
                    <FormControl> 
                 <ImageUpload
                    value={field.value.map((image) => image.imageUrl)}
                     
                    onChange={(url) =>
                      field.onChange([...field.value, { imageUrl: url }])
                    }
                    onRemove={(url) =>
                      field.onChange([
                        ...field.value.filter(
                          (current) => current.imageUrl !== url
                        ),
                      ])
                    }
                  />
                  </FormControl>
                  <FormMessage/>
                 </FormItem>
                </>
               )}
              />
              <div>
                <SubmitBtn pending={pending} label='upload' />
              </div>
            </form>
         </Form>
         </CardContent>
         </Card>
  )
}

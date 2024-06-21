import { Button } from '@/components/ui/button'
import { LoaderCircleIcon } from 'lucide-react'
import React from 'react'
interface SubmitBtnProps{
     pending:boolean,
     label:string
}
export const SubmitBtn = ({pending,label}:SubmitBtnProps) => {
  return (
    <Button type="submit" disabled={pending}>
    {pending && (
      <LoaderCircleIcon className="w-4 h-4 animate-spin mr-2" />
    )}
    {label}
     
  </Button>
  )
}

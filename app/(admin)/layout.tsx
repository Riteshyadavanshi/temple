import React from 'react'
 interface AuthLayoutProps{
     children:React.ReactElement
 }
const  AdminLayout = ({children}:AuthLayoutProps) => {
  return (
      <div >
        {children}
      </div>
  )
}

export default  AdminLayout
import { ArrowRight } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

export const  GallerySection = () => {
  return (
    <section className=" p-4 md:p-10">
       
        <h1 className='flex justify-center font-extrabold text-[#f15a24] text-3xl mb-2'>Gallery</h1>
         
        <div className='grid grid-cols-2 md:grid-cols-5 gap-2'>
    {[
      "/g1.jpg",
      "/g2.jpg",
      "/g3.jpg",
      "/g4.jpg",
      "/g5.jpg",
      "/g6.jpg",
      
    ].map((url) => (
      <>
        <Link key={url} href={`${process.env.DOMAIN_URL}/${url}`} >
          <Image
            src={url}
            alt="photos"
            width={400}
            height={300}
            className="rounded-lg aspect-square  hover:shadow-md   hover:scale-y-[1.1]"
          />
        </Link>
      </>
    ))}
    </div>
    <Link  href={"/gallery"} className='flex justify-end items-center text-[#f15a24]  '>see more  <ArrowRight className='ml-1 w-4 h-4'/></Link>
  </section>
  )
}

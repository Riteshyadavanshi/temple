 "use client"
 import * as React from "react"
import Autoplay from "embla-carousel-autoplay"

import { Card, CardContent } from "@/components/ui/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import Image from "next/image"

export function CarouselPage() {
  const plugin = React.useRef(
    Autoplay({ delay: 2000  })
  )
 const photos=["/logo.jpg","/p1.jpg","/p2.jpeg" ,"/p4.jpeg"]
  return (
    <>
    <Carousel
      plugins={[plugin.current]}
      className="max-w-screen"
      onMouseEnter={()=>plugin.current.stop}
      onMouseLeave={()=>plugin.current.reset}
    >
       <CarouselContent  >
        {photos.map((i, index) => (
          <CarouselItem key={index}>
                    
                    <div className=" relative h-[600px]">
                      
                   <Image src={i} width={1000} height={1000} className=" aspect-square    w-full h-full" alt={i}/>
               </div>
            
             
          </CarouselItem>
        ))}
         
      </CarouselContent>
    
       
    
  
    </Carousel>
      
    </>
  )
}

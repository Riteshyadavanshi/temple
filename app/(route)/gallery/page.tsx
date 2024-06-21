 
import { dbConnect } from "@/lib/dbconnect";
import { image } from "@/lib/schema/image.schema";
import Image from "next/image";
import Link from "next/link";
 
 
const Gallery=async()=> {
  await dbConnect()
  const images=await image.find()
 
 
  
  return (
    <section className="py-10  ">
      <h1 className='flex font-semibold  justify-center text-[#f15a24] text-3xl  '>Gallery</h1>
    <div className="grid grid-cols-2 md:grid-cols-5 gap-2 p-4 md:p-10">
      { images.reverse().map(({imageUrl}) => (
        <>
          <Link key={imageUrl} href={imageUrl}>
            <Image
              src={imageUrl}
              alt="photos"
              width={400}
              height={300}
              className="rounded-lg aspect-square "
            />
          </Link>
        </>
      ))}
    </div></section>
  );
}

export default Gallery;

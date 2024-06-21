 "use client"
import React, { useState } from 'react';
import { Button } from '../ui/button';
import { Menu } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
function Navbar() {
  const [isMenuOpen, setMenuOpen] = useState(false);
  const router=useRouter()

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  const link=[
    {
     label:"Home",
     url:"/"
  },
  {
    label:"About us",
    url:"/about"
 },
  {
    label:"Gallery",
    url:"/gallery"
 },
  {
    label:"video",
    url:"/youtube-video"
 },{
    label:"Join Team",
    url:"/join-team"
 }

]
 const handleRoute=(url:string)=>{
     router.push(url)
     setMenuOpen(false)
 }
  return (
    <nav className="   top-0 fixed w-full z-10 bg-white shadow-md">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto px-4 py-2">
        <Link href="/" className="flex items-center space-x-3 rtl:space-x-reverse">
          <Image src="/logo.jpg" width={200} height={200} className="h-16 w-16 rounded-full" alt="Flowbite Logo" />
          <span className="self-center md:text-2xl text-sm    whitespace-nowrap text-[#f15a24] tracking-tighter ">ॐ शिवशक्ति मारियम्मन</span>
        </Link>
        <Button
          onClick={toggleMenu}
           className='md:hidden'
          aria-controls="navbar-default"
          aria-expanded={isMenuOpen}
          variant={"outline"}
        >
           <Menu/>
        </Button>
        <div className={`w-full md:block md:w-auto transition-all ${isMenuOpen ? "" : "hidden"}`} id="navbar-default">
          <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
            {
                link.map(({label,url})=><>
                  <li key={url}  onClick={()=>handleRoute(url)} className="block py-2 px-3  cursor-pointer hover:bg-slate-200 md:hover:bg-slate-50 rounded md:bg-transparent  md:p-0" >
                    {label}
                  </li>
                </>)
            }
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;

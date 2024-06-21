import type { Metadata } from "next";
import { Inter, Poppins } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/home/Navbar";
import { Footer } from "@/components/home/Footer";
import { Toaster } from "@/components/ui/sonner";
import { VideoPage } from "@/components/home/video";

const inter = Poppins({ 
  subsets: ["latin"],
  weight:["100","200","300","400","500","600","700","800","900"]
 });

export const metadata: Metadata = {
  title: "ॐ शिवशक्ति मारियम्मन",
  metadataBase:new URL("https://marriammantemple.org/"),
  description: "Located in the heart of Pipeline Sion Koliwada, Shiv ShaktiMariamman Temple stands as a beacon of spiritual",
  openGraph:{
    images:["https://marriammantemple.org//logo.jpg"]
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        
        <Toaster position={"top-center"}/>
        <Navbar/>
        
        <div className="mt-[75px]">
          <VideoPage/>
          {children}
        </div>
        <Footer/>
        </body>
    </html>
  );
}

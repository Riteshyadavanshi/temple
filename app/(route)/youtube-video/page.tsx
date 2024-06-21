// components/VideoGallery.tsx
import React from 'react';
import {VideoCard} from '@/components/youtube-video/video-card';
import { dbConnect } from '@/lib/dbconnect';
import { youtube } from '@/lib/schema/youtube.schema';

 

 
type video={
   youtubeLink:string,
   description:string
}
const VideoGallery = async() => {
    await dbConnect()
    const videos:video[]= (await youtube.find())
      
   if(videos.length==0){
    return <p>video not available</p>
   }
  return (
    <section className='py-2'>
      <h1 className='flex font-semibold justify-center  text-[#f15a24] text-3xl mt-10'>Youtube Videos</h1>
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 p-10">
      {videos.reverse().map((video, index) => (
        <VideoCard key={index} videoId={video.youtubeLink.split("=")[1]} description={video.description} />
      ))}
    </div>
    </section>
  );
};

export default VideoGallery;

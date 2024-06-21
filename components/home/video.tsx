"use client";
import { useState, useEffect, useRef } from 'react';

export const VideoPage = () => {
  const [showVideo, setShowVideo] = useState(true);
  const videoRef = useRef<HTMLVideoElement>(null);
  
   useEffect(() => {
    if (videoRef.current) {
      videoRef.current.playbackRate = 2.0; // Set the playback speed to 2x
    }
    const timer = setTimeout(() => {
      setShowVideo(false);
    }, 3000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
    {showVideo &&<div className="absolute inset-0 z-20    ">
    <div className="w-full h-full relative">
      
        <video ref={videoRef} autoPlay muted loop  className="absolute inset-0 min-w-full min-h-full w-auto h-auto object-cover">
          <source src="/video.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      
    </div>
  </div>}
     </>
  
  );
};

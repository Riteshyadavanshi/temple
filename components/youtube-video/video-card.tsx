// components/VideoCard.tsx
"use client"
import React from 'react';
import YouTube from 'react-youtube';
import { Card, CardContent, CardDescription, CardTitle } from '../ui/card';

interface VideoCardProps {
  videoId: string;
  description: string;
}

export const VideoCard: React.FC<VideoCardProps> = ({ videoId,description}) => {
  const opts = {
    width: '100%',
    height: '200px',
    
  };
  return (
    <Card className='pt-2'>
      <CardContent>
       
      <div > 
        <YouTube videoId={videoId}  opts={opts} className='aspect-video rounded-sm' />
      </div>
      <CardDescription>{description}</CardDescription>
    </CardContent>
   
    </Card> 
  );
};

 

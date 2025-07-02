import React from 'react';
type VideoEmbedProps = {
  videoId: string;
  title?: string;
};
export const VideoEmbed = ({
  videoId,
  title = 'YouTube video'
}: VideoEmbedProps) => {
  return <div className="relative w-full h-0 pb-[56.25%] rounded-lg overflow-hidden shadow-lg">
      <iframe className="absolute top-0 left-0 w-full h-full" src={`https://www.youtube.com/embed/${videoId}`} title={title} allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
    </div>;
};
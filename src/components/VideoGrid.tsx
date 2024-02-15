import Image from "next/image";
import { Inter } from "next/font/google";
import { VideoCard } from "@/components/VideoCard";

const VIDEOS = [{
        title:"Hello world, my first video | come with me",
        image:"photo.png",
        thumbImage:"thumb.png",
        author:"Rajat Jain",
        views:"100k",
        timestamp:"1 day ago"
}, {
    title:"Hello world, my first video | come with me",
    image:"photo.png",
    thumbImage:"thumb.png",
    author:"Rajat Jain",
    views:"100k",
    timestamp:"1 day ago"
}, {
    title:"Hello world, my first video | come with me",
    image:"photo.png",
    thumbImage:"thumb.png",
    author:"Rajat Jain",
    views:"100k",
    timestamp:"1 day ago"
},
{
    title:"Hello world, my first video | come with me",
    image:"photo.png",
    thumbImage:"thumb.png",
    author:"Rajat Jain",
    views:"100k",
    timestamp:"1 day ago"
}, {
title:"Hello world, my first video | come with me",
image:"photo.png",
thumbImage:"thumb.png",
author:"Rajat Jain",
views:"100k",
timestamp:"1 day ago"
}, {
title:"Hello world, my first video | come with me",
image:"photo.png",
thumbImage:"thumb.png",
author:"Rajat Jain",
views:"100k",
timestamp:"1 day ago"
}, {
    title:"Hello world, my first video | come with me",
    image:"photo.png",
    thumbImage:"thumb.png",
    author:"Rajat Jain",
    views:"100k",
    timestamp:"1 day ago"
}, {
title:"Hello world, my first video | come with me",
image:"photo.png",
thumbImage:"thumb.png",
author:"Rajat Jain",
views:"100k",
timestamp:"1 day ago"
}, {
title:"Hello world, my first video | come with me",
image:"photo.png",
thumbImage:"thumb.png",
author:"Rajat Jain",
views:"100k",
timestamp:"1 day ago"
}, {
    title:"Hello world, my first video | come with me",
    image:"photo.png",
    thumbImage:"thumb.png",
    author:"Rajat Jain",
    views:"100k",
    timestamp:"1 day ago"
}, {
title:"Hello world, my first video | come with me",
image:"photo.png",
thumbImage:"thumb.png",
author:"Rajat Jain",
views:"100k",
timestamp:"1 day ago"
}, {
title:"Hello world, my first video | come with me",
image:"photo.png",
thumbImage:"thumb.png",
author:"Rajat Jain",
views:"100k",
timestamp:"1 day ago"
}, {
    title:"Hello world, my first video | come with me",
    image:"photo.png",
    thumbImage:"thumb.png",
    author:"Rajat Jain",
    views:"100k",
    timestamp:"1 day ago"
}, {
title:"Hello world, my first video | come with me",
image:"photo.png",
thumbImage:"thumb.png",
author:"Rajat Jain",
views:"100k",
timestamp:"1 day ago"
}, {
title:"Hello world, my first video | come with me",
image:"photo.png",
thumbImage:"thumb.png",
author:"Rajat Jain",
views:"100k",
timestamp:"1 day ago"
}
]

export const VideoGrid = () => {
    return (
        <div className="grid grid-cols-4">
            {VIDEOS.map(video => <div>
                <VideoCard>
                    title={video.title}
                    image={video.image}
                    thumbImage={video.thumbImage}
                    author={video.author}
                    views={video.views}
                    timestamp={video.timestamp}
                </VideoCard>
            </div>)}

        </div>
    )
}
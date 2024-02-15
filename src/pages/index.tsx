import Image from "next/image";
import { Inter } from "next/font/google";
import { VideoCard } from "@/components/videocard";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <div>
      
    <VideoCard
    title= {"Helllo world my first video | cum with me"}
    image={"photo.png"}
    thumbImage={"thumb.png"}
    author={"Rajat Jain"}
    views={"100k"}
    timestamp={"1 day ago"}>
      
    </VideoCard>
    </div>
  )
}

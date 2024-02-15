import Image from "next/image";
import { Inter } from "next/font/google";



export function VideoCard(props: any) {
    return (
      <div>
        <img src={props.image} className="border-xl" alt="Video Thumbnail"></img>
        <div className="grid grid-cols-12 pt-5">
          <div className="col-span-1">
            <img className="rounded-full w-20 h-20" src={props.thumbImage} alt="Author Thumbnail"></img>
          </div>
          <div className="col-span-11 pl-5">
            <div className="col-span-11">{props.title}</div>
            <div className="cols-span-11 text-gray-400 text-base">{props.author}</div>
            <div className="cols-span-11 text-gray-400 text-base">
              {props.views} | {props.timestamp}
            </div>
          </div>
        </div>
      </div>
    );
  }
  
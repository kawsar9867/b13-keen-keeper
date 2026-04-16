import React from "react";
import { PhoneIncoming } from "lucide-react";
import { MessageCircleMore } from "lucide-react";
import { Video } from "lucide-react";
const Timeline = () => {
  return (
    <div className="max-w-350 mx-auto m-10">
      <h1 className="text-3xl font-bold">Timeline</h1>
      <details className="dropdown">
        <summary className=" border px-5 rounded-sm m-1">
          Filter timeline
        </summary>
        <ul className=" dropdown-content bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm border border-gray-500 gap-2 space-y-2">
          <li className=" border border-red-200 rounded-md hover:bg-red-100 hover:text-red-500">
            <a className="flex gap-1 p-1 text-xl ">
              <PhoneIncoming /> Call
            </a>
          </li>
          <li className="border hover:bg-red-100 hover:text-red-500 border-red-200 rounded-md">
            <a className="text-xl p-1 flex gap-1">
              <MessageCircleMore /> Text
            </a>
          </li>
          <li className="border hover:bg-red-100 hover:text-red-500 border-red-200 rounded-md">
            <a className="flex gap-1 p-1 text-[18px]">
              <Video /> Video
            </a>
          </li>
        </ul>
      </details>
    </div>
  );
};

export default Timeline;

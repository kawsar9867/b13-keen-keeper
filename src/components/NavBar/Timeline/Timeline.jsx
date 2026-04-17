import React, { useContext, useState } from "react";
import { PhoneIncoming, MessageCircleMore, Video } from "lucide-react";
import { Mycontext } from "../../API/Context";
import Calllogo from "/Assets/call.png";
import Textlogo from "/Assets/text.png";
import Videologo from "/Assets/video.png";

const Timeline = () => {
  const date = new Date();
  const newDate = { year: "numeric", month: "long", day: "numeric" };
  const formateDate = date.toLocaleDateString("en-US", newDate);

  const { card } = useContext(Mycontext);

  const [filter, setFilter] = useState("");

  // const filteredCart = (cart || []).filter((item) => {
  //   if (filter === "all") return true;
  //   return item.type?.toLowerCase() === filter.toLowerCase();
  // });

  return (
    <div className="max-w-3xl mx-auto m-10 font-sans">
      <h1 className="text-3xl font-bold mb-6 text-gray-800">Timeline</h1>

      <details className="dropdown mb-6">
        <summary className="btn btn-outline border-gray-300 px-6 py-2 rounded-lg cursor-pointer hover:bg-gray-50 flex items-center gap-2 w-fit">
          Filter timeline:{" "}
          <span className="font-bold capitalize">{filter}</span>
        </summary>

        <ul className="dropdown-content bg-white rounded-xl z-20 w-52 p-2 shadow-xl border border-gray-100 mt-2 space-y-1">
          <li
            onClick={() => setFilter("all")}
            className={`p-2 rounded-lg cursor-pointer transition ${filter === "all" ? "bg-gray-100 font-bold" : "hover:bg-gray-50"}`}
          >
            All Activities
          </li>
          <li
            onClick={() => setFilter("call")}
            className={`p-2 flex gap-2 items-center rounded-lg cursor-pointer transition ${filter === "call" ? "bg-green-100 text-green-700 font-bold" : "hover:bg-green-50"}`}
          >
            <PhoneIncoming size={18} /> Call
          </li>
          <li
            onClick={() => setFilter("text")}
            className={`p-2 flex gap-2 items-center rounded-lg cursor-pointer transition ${filter === "text" ? "bg-blue-100 text-blue-700 font-bold" : "hover:bg-blue-50"}`}
          >
            <MessageCircleMore size={18} /> Text
          </li>
          <li
            onClick={() => setFilter("video")}
            className={`p-2 flex gap-2 items-center rounded-lg cursor-pointer transition ${filter === "video" ? "bg-purple-100 text-purple-700 font-bold" : "hover:bg-purple-50"}`}
          >
            <Video size={18} /> Video
          </li>
        </ul>
      </details>

      <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
        <h2 className="text-lg font-bold mb-4 text-gray-700 border-b pb-2">
          Recent Activities ({card.length})
        </h2>

        <div className="mt-5">
          {card.map((friend, index) => (
            <div
              key={index}
              className="bg-white shadow-md rounded-md p-4 mb-4 flex items-center gap-4"
            >
              <div className="w-10 h-10">
                {friend.type === "Call" ?
                  <img
                    src={Calllogo}
                    alt={friend.name}
                    className="w-full h-full object-cover rounded-md"
                  />
                : friend.type === "Text" ?
                  <img
                    src={Textlogo}
                    alt={friend.name}
                    className="w-full h-full object-cover rounded-md"
                  />
                : <img
                    src={Videologo}
                    alt={friend.name}
                    className="w-full h-full object-cover rounded-md"
                  />
                }
              </div>
              <div>
                <h3 className="text-lg font-semibold text-[#244D3F] ">
                  {friend.type} with{" "}
                  <span className="text-gray-600">{friend.name} </span>
                </h3>
                <p className="text-gray-600 ">
                  {formateDate}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* {filteredCart.length === 0 ?
          <div className="py-10 text-center">
            <p className="text-gray-400 italic">
              No {filter !== "all" ? filter : ""} activities found yet.
            </p>
          </div>
        : 
        } */}
      </div>
    </div>
  );
};

export default Timeline;

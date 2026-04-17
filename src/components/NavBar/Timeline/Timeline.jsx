import React, { useContext, useState } from "react";
import { PhoneIncoming, MessageCircleMore, Video } from "lucide-react";
import { Mycontext } from "../../API/Context";
import logo from "/Assets/call.png";

const Timeline = ({ cart = [] }) => {
  const date = new Date();
  const newDate = { year: "numeric", month: "long", day: "numeric" };
  const formateDate = date.toLocaleDateString("en-US", newDate);

  const { card } = useContext(Mycontext);
  console.log(card);
  const [filter, setFilter] = useState("all");

  const filteredCart = (cart || []).filter((item) => {
    if (filter === "all") return true;
    return item.type?.toLowerCase() === filter.toLowerCase();
  });

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
        <div className="space-y-3">
          {card.map((item) => (
            <div className=" gap-3 border p-3 rounded-md shadow-lg space-y-3 items-center border-gray-300">
              <div className="flex gap-2">
                <img className="h-6" src={logo} alt="" />
                <h2>
                  {" "}
                  <span className="font-semibold text-xl ">Call </span>
                  <span className="text-gray-500">with {item.name}</span>{" "}
                </h2>
              </div>
              <h2>{formateDate}</h2>
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

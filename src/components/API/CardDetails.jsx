import { useLoaderData, useParams } from "react-router";
import logo from "../../../public/Assets/call.png"
import logo2 from "../../../public/Assets/text.png"
import logo3 from "../../../public/Assets/video.png"
import { Clock8 } from 'lucide-react';
import { Landmark } from 'lucide-react';
import { Trash2 } from 'lucide-react';

const CardDetails = () => {
  const data = useLoaderData();
  const { id } = useParams();

  const user = data.find(item => item.id == id);
const {name, profile_pic, status, email, tag, bio, goal, next_due_date, days_since_contact} = user;
  return (
    <div>
 <div className=" bg-gray-50 p-5 font-sans text-gray-700">
  <div className="max-w-4xl mx-auto grid grid-cols-12 gap-4">
    
    <div className="col-span-12 md:col-span-4 space-y-4">
      <div className="bg-white p-4 rounded-xl border border-gray-100 shadow-sm text-center flex flex-col items-center">
        <img src={profile_pic} alt="Emma" className=" w-20 h-20 rounded-full  mb-2 border-2 border-green-200 ring-1 ring-gray-300"/>
        <h2 className="font-bold text-lg text-gray-800">{name}</h2>
        <div className=" space-y-2">
          <span className={
                    status === "Completed" ?
                      "text-white text-[13px] font-medium bg-green-500 rounded-full inline-block px-2 "
                    : status === "Almost Due" ?
                      "text-white text-[13px] bg-red-500 font-medium rounded-full inline-block px-2 py-1"
                    : "text-white text-[13px] bg-gray-500 font-medium rounded-full inline-block px-3 py-1"

                  }
                >
                  {user.status}</span>
          <span className="block text-[10px] font-bold px-3 py-0.5 rounded-full uppercase tracking-wider flex gap-1">{tag.map((t, i) => (
                    <span
                      key={i}
                      className="px-2 py-1 text-xs bg-gray-200 rounded-full "
                    >
                      {t}
                    </span>
                  ))}</span>
        </div>
        <p className="mt-1 italic text-gray-500 text-sm">{bio}</p>
        <p className="mt-1 text-xs text-gray-400 font-semibold italic">{email}</p>
      </div>

      <div className="space-y-1">
        <button className="w-full bg-white border border-gray-100 p-3 rounded-lg flex items-center justify-center gap-1 text-sm font-medium hover:bg-gray-50 transition">
          <Clock8 size={15} />
          Snooze 2 Weeks
        </button>
        <button className="w-full bg-white border border-gray-100 p-3 rounded-lg flex items-center justify-center gap-1 text-sm font-medium hover:bg-gray-50 transition">
          <Landmark size={15}/>
          Archive
        </button>
        <button className="w-full bg-white border border-gray-100 p-3 rounded-lg flex items-center justify-center gap-1 text-sm font-medium text-red-500 hover:bg-red-50 transition">
          <Trash2 size={16} />
          Delete
        </button>
      </div>
    </div>

    <div className="col-span-12 md:col-span-8 space-y-5">
      
      <div className="grid grid-cols-3 gap-4">
        <div className="bg-white p-4 rounded-xl border border-gray-100 shadow-sm text-center">
          <div className="text-3xl font-bold text-gray-700 ">{days_since_contact}</div>
          <div className="text-[11px] text-gray-400 mt-1 uppercase font-semibold">Days Since Contact</div>
        </div>
        <div className="bg-white p-4 rounded-xl border border-gray-100 shadow-sm text-center">
          <div className="text-3xl font-bold text-gray-700">{goal}</div>
          <div className="text-[11px] text-gray-400 mt-1 uppercase font-semibold">Goal (Days)</div>
        </div>
        <div className="bg-white p-4 rounded-xl border border-gray-100 shadow-sm text-center">
          <div className="text-xl font-bold text-gray-700 mt-1.5">{next_due_date}</div>
          <div className="text-[11px] text-gray-400 mt-1 uppercase font-semibold">Next Due</div>
        </div>
      </div>

      <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm relative">
        <button className="absolute top-4 right-4 bg-gray-50 text-gray-400 px-3 py-1 rounded text-xs font-bold border border-gray-200">edit</button>
        <h3 className="text-gray-600 font-semibold text-sm mb-3">Relationship Goal</h3>
        <p className="text-gray-500 text-sm">Connect every <span className="font-bold text-gray-800">{goal} days</span></p>
      </div>

      <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm">
        <h3 className="text-gray-600 font-semibold text-sm mb-4">Quick Check-In</h3>
        <div className="grid grid-cols-3 gap-3">
          <button className="flex flex-col items-center justify-center p-4 border border-gray-100 rounded-lg bg-gray-50/50 hover:bg-gray-100 transition">
            <img src={logo} alt="phone logo" />
            <span className="text-lg font-semibold mt-1">Call</span>
          </button>
          <button className="flex flex-col items-center justify-center p-4 border border-gray-100 rounded-lg bg-gray-50/50 hover:bg-gray-100 transition">
            <img src={logo2} alt="text png" />
            <span className="text-lg font-semibold mt-1">Text</span>
          </button>
          <button className="flex flex-col items-center justify-center p-4 border border-gray-100 rounded-lg bg-gray-50/50 hover:bg-gray-100 transition">
           <img src={logo3} alt="video png" />
            <span className="text-lg mt-1 font-semibold">Video</span>
          </button>
        </div>
      </div>

    </div>
  </div>
</div>
    </div>
  );
};

export default CardDetails;
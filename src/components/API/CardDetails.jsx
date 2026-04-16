import { useLoaderData, useParams } from "react-router";

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
        <button className="w-full bg-white border border-gray-100 p-3 rounded-lg flex items-center justify-center gap-2 text-sm font-medium hover:bg-gray-50 transition">
          <svg className="w-4 h-4 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
          Snooze 2 Weeks
        </button>
        <button className="w-full bg-white border border-gray-100 p-3 rounded-lg flex items-center justify-center gap-2 text-sm font-medium hover:bg-gray-50 transition">
          <svg className="w-4 h-4 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"></path></svg>
          Archive
        </button>
        <button className="w-full bg-white border border-gray-100 p-3 rounded-lg flex items-center justify-center gap-2 text-sm font-medium text-red-500 hover:bg-red-50 transition">
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"></path></svg>
          Delete
        </button>
      </div>
    </div>

    <div className="col-span-12 md:col-span-8 space-y-5">
      
      <div className="grid grid-cols-3 gap-4">
        <div className="bg-white p-4 rounded-xl border border-gray-100 shadow-sm text-center">
          <div className="text-3xl font-bold text-gray-700 ">{days_since_contact}</div>
          <div class="text-[11px] text-gray-400 mt-1 uppercase font-semibold">Days Since Contact</div>
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
            <svg className="w-6 h-6 text-gray-600 mb-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path></svg>
            <span className="text-xs font-medium">Call</span>
          </button>
          <button className="flex flex-col items-center justify-center p-4 border border-gray-100 rounded-lg bg-gray-50/50 hover:bg-gray-100 transition">
            <svg className="w-6 h-6 text-gray-600 mb-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z"></path></svg>
            <span className="text-xs font-medium">Text</span>
          </button>
          <button className="flex flex-col items-center justify-center p-4 border border-gray-100 rounded-lg bg-gray-50/50 hover:bg-gray-100 transition">
            <svg className="w-6 h-6 text-gray-600 mb-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z"></path></svg>
            <span className="text-xs font-medium">Video</span>
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
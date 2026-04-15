import React, { use } from "react";

const Card = ({ userPromise }) => {
  const users = use(userPromise);
  console.log( users);

  const completedCount = users.filter(
    (user) => user.status === "Completed",
  ).length;

  const needAttentionCount = users.filter(
    (user) => user.status === "Almost Due",
  ).length;
  return (
    <section className="mb-10 ">
      <div className="flex gap-10 text-center  mx-auto items-center mb-5 max-w-350 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
        <div className="bg-white p-7  rounded-md shadow-md  h-30">
          <h1 className="text-3xl font-semibold text-blue-600">
            {users.length}
          </h1>
          <p className="font-semibold text-blue-700">Total Friends</p>
        </div>
        <div className="bg-white p-7  rounded-md shadow-md  h-30">
          <h1 className="text-3xl font-semibold text-green-600">
            {completedCount}
          </h1>
          <p className="font-semibold text-green-600">Completed</p>
        </div>
        <div className="bg-white p-7  rounded-md shadow-md  h-30">
          <h1 className="text-3xl font-semibold text-red-600">
            {needAttentionCount}
          </h1>
          <p className="font-semibold text-red-600">Need Attention</p>
        </div>
        <div className="bg-white p-7  rounded-md shadow-md  h-30">
          <h1 className="text-3xl font-semibold text-[#244d3f]">20</h1>
          <p className="font-semibold">Interactions This Month</p>
        </div>
      </div>
      <p className="mt-5 mb-12  text-gray-200 opacity-50 max-w-350 mx-auto divider " />
      <div className="max-w-350 mx-auto">
      <p className="text-2xl font-semibold mb-3">Your Friends</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 text-center gap-5 container mx-auto max-w-350 ">
        
        {users.map((user) => {
          return (
            <div>
              <div className="bg-white p-5 rounded-md  shadow-sm transform hover:scale-105 duration-300">
                <img
                  className="flex justify-center mx-auto rounded-full border-2 border-green-200 shadow-md"
                  src={user.profile_pic}
                  alt="Profile pic"
                />
                <h1 className="text-[20px] font-semibold">{user.name}</h1>
                <p className=" text-gray-400 p-1">{user.time}</p>
                <div className="flex gap-2 justify-center mb-2">
                  {user.tag.map((t, i) => (
                    <span
                      key={i}
                      className="px-2 py-1 text-xs bg-gray-200 rounded-full"
                    >
                      {t}
                    </span>
                  ))}
                </div>
                <p
                  className={
                    user.status === "Completed" ?
                      "text-white font-semibold bg-green-500 rounded-full inline-block px-3 py-1"
                    : user.status === "Almost Due" ?
                      "text-white bg-red-500 font-semibold rounded-full inline-block px-3 py-1"
                    : "text-white font-semibold bg-gray-500 rounded-full inline-block px-3 py-1"

                  }
                >
                  {user.status}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Card;

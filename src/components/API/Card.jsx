import React, { use } from "react";

const Card = ({ userPromise }) => {
  const users = use(userPromise);
  console.log("User Load Data", users);

  const completedCount = users.filter(
    (user) => user.status === "Completed",
  ).length;

  const needAttentionCount = users.filter(
    (user) => user.status === "Almost Due",
  ).length;
  return (
    <section className="mb-10">
      <div className="flex gap-10 text-center  mx-auto items-center mb-5 max-w-350">
        <div className="bg-white p-7  rounded-md shadow-md w-85 h-30">
          <h1 className="text-3xl font-semibold text-blue-600">
            {users.length}
          </h1>
          <p className="font-semibold text-blue-700">Total Friends</p>
        </div>
        <div className="bg-white p-7  rounded-md shadow-md w-85 h-30">
          <h1 className="text-3xl font-semibold text-green-600">
            {completedCount}
          </h1>
          <p className="font-semibold text-green-600">Completed</p>
        </div>
        <div className="bg-white p-7  rounded-md shadow-md w-85 h-30">
          <h1 className="text-3xl font-semibold text-red-600">
            {needAttentionCount}
          </h1>
          <p className="font-semibold text-red-600">Need Attention</p>
        </div>
        <div className="bg-white p-7  rounded-md shadow-md w-85 h-30">
          <h1 className="text-3xl font-semibold text-[#244d3f]">12</h1>
          <p className="font-semibold">Interactions This Month</p>
        </div>
      </div>
      <div className="grid grid-cols-4 text-center gap-5 container mx-auto max-w-350 ">
        {users.map((user) => {
          return (
            <div key={user.id}>
              <div className="bg-white p-5 rounded-md  shadow-sm transform hover:scale-105 duration-300">
                <img
                  className="flex justify-center mx-auto rounded-full"
                  src={user.profile_pic}
                  alt=""
                />
                <h1 className="text-[20px] font-semibold">{user.name}</h1>
                <p className=" text-gray-400 p-1">{user.time}</p>
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

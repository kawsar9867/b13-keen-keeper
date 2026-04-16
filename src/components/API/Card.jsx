import React, { use } from "react";
import OneCard from "./OneCard";

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
        
        {users.map(user => <OneCard key={user.id} user={user}></OneCard>)}
      </div>
    </section>
  );
};

export default Card;

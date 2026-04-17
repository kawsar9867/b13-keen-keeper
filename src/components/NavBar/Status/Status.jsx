import React, { useContext } from "react";
import { Mycontext } from "../../API/Context";

function Status() {
  const { friendData } = useContext(Mycontext);

  const callCount = friendData.filter((f) => f.type === "Call").length;
  const textCount = friendData.filter((f) => f.type === "Text").length;
  const videoCount = friendData.filter((f) => f.type === "Video").length;

  const data = [
    { name: "Call", value: callCount, fill: "#01859E" },
    { name: "Text", value: textCount, fill: "#00C49F" },
    { name: "Video", value: videoCount, fill: "#FFBB28" },
  ];

  return (
    <div className="bg-[#F8FAFC] dark:bg-gray-900 ">
      <div className="max-w-285 mx-auto my-10 px-5">
        <h1 className="text-3xl font-bold text-[#244D3F]  dark:text-gray-200 mb-5">
          Friendship Analytics
        </h1>

        <div className="bg-white dark:bg-gray-800 p-5 rounded-md mb-5">
          <h2 className="text-2xl font-semibold text-[#244D3F] dark:text-gray-300">
            By Interaction Type
          </h2>
          <div className="flex justify-center">
            <PieChart
              style={{
                width: "100%",
                maxWidth: "500px",
                maxHeight: "60vh",
                aspectRatio: 1,
              }}
              responsive
            >
              <Pie
                data={data}
                innerRadius="80%"
                outerRadius="100%"
                // Corner radius is the rounded edge of each pie slice
                cornerRadius="50%"
                fill="#8884d8"
                // padding angle is the gap between each pie slice
                paddingAngle={5}
                dataKey="value"
                isAnimationActive={true}
              />
              <Legend />
              <Tooltip />
            </PieChart>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Status;

import React, { useContext } from "react";
import { Mycontext } from "../../API/Context";
import { Legend, Pie, Tooltip } from "recharts";
import { PieChart } from "lucide-react";

function Status() {
  const { card } = useContext(Mycontext);

  const callCount = card.filter((f) => f.type === "Call").length;
  const textCount = card.filter((f) => f.type === "Text").length;
  const videoCount = card.filter((f) => f.type === "Video").length;

  const data = [
    { name: "Call", value: callCount, fill: "#01859E" },
    { name: "Text", value: textCount, fill: "#00C49F" },
    { name: "Video", value: videoCount, fill: "#FFBB28" },
  ];

  return (
    <div className="bg-[#F8FAFC]  ">
      <div className="max-w-285 mx-auto my-10 px-5">
        <h1 className="text-3xl font-bold text-[#244D3F]   mb-5">
           Analytics
        </h1>

        <div className="bg-white  p-5 rounded-md mb-5">
          <h2 className="text-2xl font-semibold text-[#244D3F] ">
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

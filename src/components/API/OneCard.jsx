import React from 'react';
import { useNavigate } from 'react-router';

const OneCard = ({user}) => {
  const {profile_pic, name, time, tag} = user;

  const navigate = useNavigate();
  const handleNavigate = () => {
    navigate (`/cardDetails/${user.id}`)
  }

  return (
            <div>
              <div onClick={handleNavigate} className="bg-white p-5 rounded-md  shadow-sm transform hover:scale-105 duration-300">
                <img
                  className="flex justify-center mx-auto rounded-full border-2 border-green-200 shadow-md"
                  src={profile_pic}
                  alt="Profile pic"
                />
                <h1 className="text-[20px] font-semibold">{name}</h1>
                <p className=" text-gray-400 p-1">{time}</p>
                <div className="flex gap-2 justify-center mb-2">
                  {tag.map((t, i) => (
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
};

export default OneCard;
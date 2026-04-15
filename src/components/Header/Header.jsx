import React from 'react';
import { Plus } from 'lucide-react';
const Header = () => {
  return (
    <div className='space-y-3 mb-20 mt-[80px] '>
      <h1 className='text-center text-[45px] font-semibold'>Friends to keep close in your life</h1>
      <p className='text-center font-semibold text-gray-400'>Your personal shelf of meaningful connections. Browse,tend,and nurture the relationships that matter most.</p>
      <button className='flex text-white mx-auto bg-[#244d3f] p-2 rounded gap-1 cursor-pointer font-semibold shadow'><Plus />Add a Friends</button>
    </div>
  );
};

export default Header;
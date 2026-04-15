import React from 'react';
import logo from "../../../public/Assets/logo-xl.png"
import logo2 from "../../../public/Assets/instagram.png"
import logo3 from "../../../public/Assets/facebook.png"
import logo4 from "../../../public/Assets/twitter.png"
const Footer = () => {
  return (
    <div className='bg-[#244d3f] p-10 space-y-3'>
      <div className='text-center'>
        <img className='mx-auto' src={logo} alt="" />
        <p className='text-gray-300 font-semibold'>Your personal shelf of meaningful connections. Browse, tend, and nurture the relationships that matter most.</p>
      </div>
      <div>
        <h4 className='text-white font-bold text-center mb-2'>Social Links</h4>
        <div className='flex items-center justify-center gap-2'>
        <img className='h-8' src={logo2} alt="instagram png" />
        <img className='h-8' src={logo3} alt="facebook png" />
        <img className='h-8' src={logo4} alt="twitter png" />
        </div>
      </div>
      <div className='flex justify-around'>
        <p className='text-[#fafafa90]'>© 2026 KeenKeeper. All rights reserved.</p>
        <div >
          <ul className='flex gap-5 text-[#fafafa90]'>
            <li>Privacy Policy</li>
            <li>Terms of Service</li>
            <li>Cookies</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Footer;
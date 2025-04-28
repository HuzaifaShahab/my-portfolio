import React from 'react';
import profileImg from '../assets/huzii.png';

const ProfilePhoto: React.FC = () => {
  return (
    <div className="relative w-[320px] h-[320px] md:w-[480px] md:h-[480px] mx-auto">
      
      {/* Dotted Animated Border */}
      <div className="absolute inset-0 border-4 border-green-400 rounded-full border-dashed animate-spin-slow"></div>

      {/* Profile Image inside */}
      <div className="absolute inset-[5%] bg-gray-900 rounded-full overflow-hidden flex items-center justify-center">
        <img 
          src={profileImg} 
          alt="Profile" 
          className="w-full h-full object-cover rounded-full"
        />
      </div>

    </div>
  );
};

export default ProfilePhoto;

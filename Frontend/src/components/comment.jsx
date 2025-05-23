import React from 'react';

const Comment = ({ icon, heading }) => {
  return (
    <div className="relative flex items-center gap-3 p-2 md:p-4 md:min-w-56 md:max-w-56 rounded-xl overflow-hidden shadow-lg">
      {/* Glass Background */}
      <div className="absolute inset-0 bg-white/10 backdrop-blur-lg border border-white/20 rounded-xl z-0" />

      {/* Foreground Content */}
      <div className="relative z-10 flex items-center gap-2 text-white">
        <span className="">{icon}</span>
        <p className="text-sm md:text-base font-semibold">{heading}</p>
      </div>
    </div>
  );
};

export default Comment;

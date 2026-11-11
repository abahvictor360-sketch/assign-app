import React from 'react';

export const LogoTextComponent = () => {
  return (
    <div className="flex items-center gap-[10px]">
      <svg
        width="33"
        height="33"
        viewBox="0 0 60 60"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect x="6" y="6" width="48" height="48" rx="12" fill="#612BD3" />
        <path
          d="M30 16L42 44H36.6L34.2 38H25.8L23.4 44H18L30 16ZM30 25.6L27.6 33.6H32.4L30 25.6Z"
          fill="white"
        />
      </svg>
      <span className="text-[28px] font-bold leading-none text-current">
        Assign
      </span>
    </div>
  );
};

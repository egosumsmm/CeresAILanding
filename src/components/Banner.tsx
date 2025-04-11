import React from 'react';

const Banner: React.FC = () => {
  const handleClick = () => {
    window.location.href =
      'mailto:m.ahsanziak@gmail.com?cc=syedmuhammedmohsin12@gmail.com&subject=Announcing%20our%20pre-seed';
  };

  return (
    <div onClick={handleClick} className="cursor-pointer bg-transparent text-white py-2 px-4 rounded-full shadow-lg flex justify-between items-center border border-purple-500 max-w-lg mx-auto mt-4 hover:bg-purple-500 hover:bg-opacity-10 transition-colors duration-300">
      <span className="ml-2 text-sm font-semibold">🎉 Announcing our pre-seed</span>
      <span className="text-xs font-semibold underline ml-4 mr-2">
        Reach out ↗
      </span>
    </div>
  );
};

export default Banner; 
import React from 'react';

const Advertisement = () => {
  return (
   <div className="flex justify-center items-center mb-10 ">
     <div className="bg-gray-200 rounded-lg p-2 max-w-4xl lg:w-[700px] text-center dark:bg-gray-800 ">
      <div className="text-gray-600 font-light text-base  dark:text-gray-500">
        Advertisement
      </div>
      <div className="text-black font-bold text-xl dark:text-gray-400">   
        You can place ads
      </div>
      <div className="text-gray-600 font-light text-lg dark:text-gray-500">
        750x100
      </div>
    </div>
   </div>
  );
};

export default Advertisement;

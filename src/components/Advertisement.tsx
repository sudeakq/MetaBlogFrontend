import React from 'react';

const Advertisement = () => {
  return (
   <div className="flex justify-center items-center mb-10">
     <div className="bg-gray-200 rounded-lg p-2 max-w-4xl lg:w-[700px] text-center ">
      <div className="text-gray-600 font-light text-base">
        Advertisement
      </div>
      <div className="text-black font-bold text-xl">   
        You can place ads
      </div>
      <div className="text-gray-600 font-light text-lg">
        750x100
      </div>
    </div>
   </div>
  );
};

export default Advertisement;

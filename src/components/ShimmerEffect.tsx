import React from 'react';

const ShimmerEffect: React.FC = () => {
  return (
    <div className="bg-white rounded-lg p-6 max-w-2xl w-full mx-4">
      <div className="flex justify-between items-center mb-4">
        <div className="w-1/2 h-8 bg-gray-300 rounded animate-pulse"></div>
        <div className="w-6 h-6 bg-gray-300 rounded-full animate-pulse"></div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="w-full h-64 bg-gray-300 rounded animate-pulse"></div>
        <div className="flex flex-col justify-between">
          <div>
            <div className="w-1/3 h-4 bg-gray-300 rounded mb-2 animate-pulse"></div>
            <div className="w-2/3 h-4 bg-gray-300 rounded mb-4 animate-pulse"></div>
            <div className="flex flex-wrap mb-4">
              {[1, 2, 3].map((_, index) => (
                <div key={index} className="w-20 h-6 bg-gray-300 rounded-full mr-2 mb-2 animate-pulse"></div>
              ))}
            </div>
          </div>
          <div className="w-full h-4 bg-gray-300 rounded animate-pulse"></div>
        </div>
      </div>
    </div>
  );
};

export default ShimmerEffect;
import React from 'react';

interface EventSkeletonLoaderProps {
  numberOfCards?: number;
}

const EventSkeletonLoader: React.FC<EventSkeletonLoaderProps> = ({ numberOfCards = 9 }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 justify-items-center">
      {[...Array(numberOfCards)].map((_, index) => (
        <div key={index} className="w-[275px] bg-white shadow-lg rounded-lg overflow-hidden animate-pulse">
          <div className="w-full h-[175px] bg-gray-300 rounded-t-lg"></div>
          <div className="p-4">
            <div className="flex justify-between items-center text-sm text-gray-500 mb-2">
              <div className="h-4 bg-gray-300 rounded w-1/3"></div>
              <div className="h-4 bg-gray-300 rounded w-1/4"></div>
            </div>
            <div className="h-6 bg-gray-300 rounded w-3/4 mb-2"></div>
          </div>
        </div>
      ))}
      <style jsx>{`
    @keyframes shimmer {
      0% {
        background-position: -1000px 0;
      }
      100% {
        background-position: 1000px 0;
      }
    }
    .animate-pulse {
      animation: shimmer 2s infinite linear;
      background: linear-gradient(to right, #f6f7f8 8%, #edeef1 18%, #f6f7f8 33%);
      background-size: 1000px 100%;
    }
  `}</style>
    </div>

  );
};

export default EventSkeletonLoader;
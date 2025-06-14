
import React from 'react';

interface ReviewCardProps {
  text: string;
  author: string;
  rating?: number;
}

const ReviewCard: React.FC<ReviewCardProps> = ({ text, author, rating = 5 }) => {
  return (
    <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100 hover:shadow-lg transition-shadow">
      {/* Stars */}
      <div className="flex mb-6">
        {[...Array(5)].map((_, i) => (
          <div key={i} className={`w-4 h-4 rounded-full mr-1 ${i < rating ? 'bg-primary' : 'bg-gray-200'}`}></div>
        ))}
      </div>
      
      {/* Review Text */}
      <p className="text-gray-700 mb-6 leading-relaxed font-light">"{text}"</p>
      
      {/* Author */}
      <p className="text-gray-600 font-medium text-sm">{author}</p>
    </div>
  );
};

export default ReviewCard;

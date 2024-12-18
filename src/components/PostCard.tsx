import React from 'react';

interface PostCardProps {
  imageUrl: string;
  category: string;
  title: string; 
  authorName: string;
  date: string; 
  authorImage: string;
}

const PostCard: React.FC<PostCardProps> = ({
  imageUrl,
  category,
  title,
  authorName,
  date,
  authorImage,
}) => {
  return (
    <div className="max-w-xs rounded-lg border border-gray-200 bg-white shadow-md overflow-hidden p-4">
    
      <img className="w-full h-56 object-cover rounded-lg" src={imageUrl} alt={title} />

      <div className="p-5">
      
        <span className="inline-block bg-blue-100 text-blue-600 text-xs font-medium px-2.5 py-0.5 rounded mb-3">
          {category}
        </span>

        <h2 className="text-lg font-bold text-gray-800 mb-4">{title}</h2>

        <div className="flex items-center text-gray-600 text-sm">
          <img
            className="w-8 h-8 rounded-full mr-3"
            src={authorImage}
            alt={authorName}
          />
          <span>{authorName}</span>
          <span className="mx-2">•</span>
          <span>{date}</span>
        </div>
      </div>
    </div>
  );
};

export default PostCard;

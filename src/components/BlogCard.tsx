import Image from "next/image";

interface BlogCardProps {
  imageSrc: string;
  userimageSrc: string;
  category: string;
  title: string;
  author: string;
  date: string;
}

const BlogCard = ({
  imageSrc,
  userimageSrc,
  category,
  title,
  author,
  date,
}: BlogCardProps) => {
  return (
      <div className="relative max-w-6xl mx-auto my-10">
      <div className="relative w-full h-[34rem] overflow-hidden rounded-lg shadow-md">
        <Image
          src={imageSrc}
          alt="Blog Image"
          layout="fill"
          objectFit="cover"
          className="rounded-lg"
        />
      </div>
      <div className="absolute top-[22rem] left-[4rem] bg-white p-10 rounded-lg shadow-lg max-w-lg">
        <span className="text-sm font-semibold text-white bg-blue-500 px-2 py-1 rounded-full">
          {category}
        </span>
        <h2 className="mt-2 text-3xl font-bold text-gray-800">{title}</h2>
        
        <div className="mt-2 flex items-center space-x-2 text-sm text-gray-500">
          <Image
            src={userimageSrc}
            alt="User Avatar"
            width={28}
            height={28}
            className="rounded-full"
          />
          <span className="font-semibold text-gray-800">{author}</span>
          <span>•</span>
          <span>{date}</span>
        </div>
      </div>
    </div>
  );
};

export default BlogCard;

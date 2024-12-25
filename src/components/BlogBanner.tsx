import Image from "next/image";

interface BlogBannerProps {
  imageSrc: string;
  category: string;
  title: string;
  author: string;
  date: string;
}

const BlogBanner = ({
  imageSrc,
  category,
  title,
  author,
  date,
}: BlogBannerProps) => {
  return (
    <div className="relative max-w-6xl mx-auto my-5">
      <div className="relative w-full h-[20rem] lg:h-[34rem] overflow-hidden rounded-lg shadow-md">
        <Image
          src={imageSrc}
          alt="Blog Image"
          layout="fill"
          objectFit="cover"
          className="rounded-lg"
        />
      </div>
      <div className="absolute top-[12rem] lg:top-[20rem] left-[2rem] lg:left-[4rem]  max-w-lg mx-auto">
        <span className="text-sm font-semibold text-white bg-blue-500 px-3 py-1 rounded-full">
          {category}
        </span>
        <h2 className="mt-4 text-lg lg:text-3xl font-bold text-white">
          {title}
        </h2>
        <div className="mt-4 flex items-center space-x-3 text-sm text-white">
          <span className="font-semibold text-white">{author}</span>
          <span>•</span>
          <span>{date}</span>
        </div>
      </div>
    </div>
  );
};

export default BlogBanner;

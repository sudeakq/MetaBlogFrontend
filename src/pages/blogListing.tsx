import React from "react";
import BlogCard from "@/components/BlogCard";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import PostCard from "@/components/PostCard";
import BlogBanner from "@/components/BlogBanner";
import Advertisement from './../components/Advertisement';
const BlogListing = () => {
  return (
    <div className="min-h-screen">
    <Navbar />
    {/* Header-Banner Section */}
    <div className="pt-20 lg:pt-25">
   <div className="flex items-center justify-center flex-col">
   <h1 className="font-bold text-2xl mb-2">Page Title</h1>
   <h1 className="font-thin text-l">Home <span className="text-gray-500">| Link One</span></h1>
   </div>
   <BlogBanner
          imageSrc="/FirstPageBanner.png"
        category="Technology"
        title="The Impact of Technology on the Workplace: How Technology is Changing"
        author="Tracey Wilson"
        date="August 20, 2022"
      />
    </div>
    {/* Latest-Posts Section */}
    <div className="pt-7 lg:pt-7 max-w-6xl mx-auto my-5">
      <h1 className="font-bold text-2xl mb-5">Latest Posts</h1>
      <div className="row">
      <div className="grid-cols-4 flex justify-between">
      <PostCard
       imageUrl="https://st2.depositphotos.com/1006887/9369/i/450/depositphotos_93691852-stock-photo-solar-scene-beach.jpg"
       category="Technology"
       title="The Impact of Technology on the Workplace: How Technology is Changing"
       authorName="Tracey Wilson"
       date="August 20, 2022"
       authorImage="https://randomuser.me/api/portraits/women/44.jpg"/>
      <PostCard
       imageUrl="https://st2.depositphotos.com/1006887/9369/i/450/depositphotos_93691852-stock-photo-solar-scene-beach.jpg"
       category="Technology"
       title="The Impact of Technology on the Workplace: How Technology is Changing"
       authorName="Tracey Wilson"
       date="August 20, 2022"
       authorImage="https://randomuser.me/api/portraits/women/44.jpg"/>
      <PostCard
       imageUrl="https://st2.depositphotos.com/1006887/9369/i/450/depositphotos_93691852-stock-photo-solar-scene-beach.jpg"
       category="Technology"
       title="The Impact of Technology on the Workplace: How Technology is Changing"
       authorName="Tracey Wilson"
       date="August 20, 2022"
       authorImage="https://randomuser.me/api/portraits/women/44.jpg"/>
   
   </div>
  </div>
    </div>
    {/* Button Section */}
   <div className="flex items-center justify-center flex-col my-10">
   <button className="bg-white text-gray-400 border border-gray-300 rounded-lg py-1 px-5 text-md hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-500">
      Load More
    </button>
    </div>
    <Advertisement/>
    <div>
      <Footer/>
    </div>
  </div>
  );
};

export default BlogListing;

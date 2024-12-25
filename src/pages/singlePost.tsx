import React from "react";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import Advertisement from './../components/Advertisement';

const SinglePost = () => {
  return (
    <div className="min-h-screen dark:bg-gray-900 dark:text-gray-300">
      <Navbar />
      <div className="container mx-auto px-4 py-8 mt-10 flex items-center flex-col">
        <div className="flex flex-col items-left mb-4 w-1/2 mt-4">
          <span className="bg-blue-500 text-white px-3 py-1 rounded-md mb-2 max-w-28">
            Technology
          </span>
          <h1 className="text-3xl font-bold text-left mb-1 flex-col flex">
            The Impact of Technology on the Workplace: <span> How Technology is Changing</span>
          </h1>
          <div className="text-left text-gray-500">
            <span className="inline-block mr-2">
              <svg
                className="w-4 h-4 inline-block mr-1"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
                  clipRule="evenodd"
                ></path>
              </svg>
              Tracey Wilson
            </span>
            <span className="text-gray-400"> - August 20, 2022</span>
          </div>
        </div>

        <div className="px-4 py-8 font-serif text-md">
          <div className="flex justify-center">
            <div className="w-1/2">
              <img
                src="/SinglePostFirstPic.png"
                alt="Travel Destination"
                className="w-full mb-8"
              />
               <p className="mb-8">
               Traveling is an enriching experience that opens up new horizons, exposes us to different cultures, and creates memories that last a lifetime. However, traveling can also be stressful and overwhelming, especially if you don't plan and prepare adequately. In this blog article, we'll explore tips and tricks for a memorable journey and how to make the most of your travels.
               </p>
              <p className="mb-8">
              One of the most rewarding aspects of traveling is immersing yourself in the local culture and customs. This includes trying local cuisine, attending cultural events and festivals, and interacting with locals. Learning a few phrases in the local language can also go a long way in making connections and showing respect.</p>
              <h2 className="text-2xl font-semibold mb-4">Research Your Destination</h2>
              <p className="mb-8">
                One of the most rewarding aspects of traveling is immersing yourself in the local culture and customs. This includes trying local cuisine, attending cultural events and festivals, and interacting with locals. Learning a few phrases in the local language can also go a long way in making connections and showing respect.
              </p>
              <p className="mb-8">
                Before embarking on your journey, take the time to research your destination. This includes understanding the local culture, customs, and laws, as well as identifying top attractions, restaurants, and accommodations. Doing so will help you navigate your destination with confidence and avoid any cultural faux pas.
              </p>
              <p className="mb-8">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. In hendrerit gravida rutrum quisque non tellus orci ac auctor. Mi ipsum faucibus vitae aliquet nec ullamcorper sit amet. Risus viverra adipiscing at in tellus.
              </p>
              <h2 className="text-2xl font-semibold mb-4">Plan Your Itinerary</h2>
              <p className="mb-8">
              While it's essential to leave room for spontaneity and unexpected adventures, having a rough itinerary can help you make the most of your time and budget. Identify the must-see sights and experiences and prioritize them according to your interests and preferences. This will help you avoid overscheduling and ensure that you have time to relax and enjoy your journey.</p>
              <p className="mb-8">
              Vitae sapien pellentesque habitant morbi tristique. Luctus venenatis lectus magna fringilla. Nec ullamcorper sit amet risus nullam eget felis. Tincidunt arcu non sodales neque sodales ut etiam sit amet. </p>
              <img
                src="/SinglePostSecondPic.png"
                alt="Travel Destination"
                className="w-full mb-8"
              />
              <Advertisement/>
              <h2 className="text-2xl font-semibold mb-4">Pack Lightly and Smartly</h2>
              <p className="mb-8">
              Packing can be a daunting task, but with some careful planning and smart choices, you can pack light and efficiently. Start by making a packing list and sticking to it, focusing on versatile and comfortable clothing that can be mixed and matched. Invest in quality luggage and packing organizers to maximize space and minimize wrinkles.
             </p>
             <h2 className="text-2xl font-semibold mb-4">Stay Safe and Healthy</h2>
              <p className="mb-8">
              Traveling can expose you to new environments and potential health risks, so it's crucial to take precautions to stay safe and healthy. This includes researching any required vaccinations or medications, staying hydrated, washing your hands frequently, and using sunscreen and insect repellent. It's also essential to keep your valuables safe and secure and to be aware of your surroundings at all times.</p>
              <h2 className="text-2xl font-semibold mb-4">Immerse Yourself in the Local Culture</h2>
              <p className="mb-8">
              One of the most rewarding aspects of traveling is immersing yourself in the local culture and customs. This includes trying local cuisine, attending cultural events and festivals, and interacting with locals. Learning a few phrases in the local language can also go a long way in making connections and showing respect.</p>
             <h2 className="text-2xl font-semibold mb-4">Capture Memories</h2>
              <p className="mb-8">
              Finally, don't forget to capture memories of your journey. Whether it's through photographs, journaling, or souvenirs, preserving the moments and experiences of your travels can bring joy and nostalgia for years to come. However, it's also essential to be present in the moment and not let technology distract you from the beauty of your surroundings.</p>
             <h2 className="text-2xl font-semibold mb-4">Conclusion:</h2>
              <p className="mb-8">
              Traveling is an art form that requires a blend of planning, preparation, and spontaneity. By following these tips and tricks, you can make the most of your journey and create memories that last a lifetime. So pack your bags, embrace the adventure, and enjoy the ride.</p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default SinglePost;

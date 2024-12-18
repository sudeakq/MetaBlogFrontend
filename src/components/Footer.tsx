import React from "react";

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-50 py-10">
      <div className="container mx-auto px-4 grid-cols-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* About Section */}
          <div>
            <h3 className="text-lg font-semibold mb-3">About</h3>
            <p className="text-gray-600 text-sm mb-4">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
            <p className="text-gray-800 text-sm">
              <strong>Email:</strong> info@jstemplate.net
            </p>
            <p className="text-gray-800 text-sm">
              <strong>Phone:</strong> 880 123 456 789
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-3">Quick Link</h3>
            <ul className="text-gray-600 text-sm space-y-2">
              <li className="hover:text-gray-800 cursor-pointer">Home</li>
              <li className="hover:text-gray-800 cursor-pointer">About</li>
              <li className="hover:text-gray-800 cursor-pointer">Blog</li>
              <li className="hover:text-gray-800 cursor-pointer">Archived</li>
              <li className="hover:text-gray-800 cursor-pointer">Author</li>
              <li className="hover:text-gray-800 cursor-pointer">Contact</li>
            </ul>
          </div>

          {/* Categories */}
          <div>
            <h3 className="text-lg font-semibold mb-3">Category</h3>
            <ul className="text-gray-600 text-sm space-y-2">
              <li className="hover:text-gray-800 cursor-pointer">Lifestyle</li>
              <li className="hover:text-gray-800 cursor-pointer">Technology</li>
              <li className="hover:text-gray-800 cursor-pointer">Travel</li>
              <li className="hover:text-gray-800 cursor-pointer">Business</li>
              <li className="hover:text-gray-800 cursor-pointer">Economy</li>
              <li className="hover:text-gray-800 cursor-pointer">Sports</li>
            </ul>
          </div>

          {/* Newsletter */}
          <div className="bg-white p-5 rounded-lg flex justify-center items-center flex-col">
            <h3 className="text-lg font-semibold mb-3">Weekly Newsletter</h3>
            <p className="text-gray-600 text-sm mb-4">
              Get blog articles and offers via email
            </p>
           
              <input
                type="email"
                placeholder="Your Email"
                className="flex-grow p-2 text-gray-700 focus:outline-none w-full rounded-lg border-2"
              />
            <button className="bg-blue-600 text-white px-4 py-2 hover:bg-blue-700 w-full rounded-lg mt-1">
                Subscribe
              </button>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="border-t mt-8 pt-6 flex flex-col md:flex-row items-center justify-between text-sm text-gray-600">
          <div className="flex items-center">
            <span className="font-bold text-gray-800 mr-1">MetaBlog</span>
            © JS Template 2023. All Rights Reserved.
          </div>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-gray-800 cursor-pointer">
              Terms of Use
            </a>
            <a href="#" className="hover:text-gray-800 cursor-pointer">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-gray-800 cursor-pointer">
              Cookie Policy
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

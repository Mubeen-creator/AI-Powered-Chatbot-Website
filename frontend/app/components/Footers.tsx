import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-800 py-8 px-8 font-[sans-serif] tracking-wide mt-16">
      <div className="relative">
        {/* Call-to-action Section */}
        <div className="bg-blue-600 gap-3 rounded-md flex items-center sm:px-12 max-sm:px-4 py-4 absolute top-[-66px] w-full">
          <h6 className="text-white sm:text-xl max-sm:text-sm font-semibold">
            Quick Start with Mubeen's AI Chatbot
          </h6>
          <button
            type="button"
            className="sm:px-4 max-sm:px-2 py-2 sm:text-sm max-sm:text-xs rounded-full text-blue-600 gap-2 bg-white ml-auto"
          >
            Get Started
          </button>
        </div>

        {/* Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-8 pt-10">
          {/* About Us Section */}
          <div>
            <h4 className="text-xl font-semibold mb-6 text-white">About Us</h4>
            <p className="text-gray-400 text-base">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean
              gravida, mi eu pulvinar cursus, sem elit interdum mauris.
            </p>
          </div>

          {/* Services Section */}
          <div>
            <h4 className="text-xl font-semibold mb-6 text-white">Services</h4>
            <ul className="space-y-4">
              <li>
                <a href="#" className="text-gray-400 hover:text-gray-300 text-base">
                  Web Development
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-gray-300 text-base">
                  Mobile App Development
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-gray-300 text-base">
                  UI/UX Design
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-gray-300 text-base">
                  Digital Marketing
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Us Section */}
          <div>
            <h4 className="text-xl font-semibold mb-6 text-white">Contact Us</h4>
            <ul className="space-y-4">
              <li className="text-gray-400 text-base">123 Main Street</li>
              <li className="text-gray-400 text-base">City, State, Country</li>
              <li className="text-gray-400 text-base">contact@example.com</li>
              <li className="text-gray-400 text-base">+1 234 567 890</li>
            </ul>
          </div>

          {/* Follow Us Section */}
          <div>
            <h4 className="text-xl font-semibold mb-6 text-white">Follow Us</h4>
            <ul className="flex items-center flex-wrap gap-y-3 space-x-6">
              {/* Social Media Icons */}
              <li>
                <a href="#">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="inline w-6 h-6"
                    viewBox="0 0 512 512"
                  >
                    <path
                      fill="#1877f2"
                      d="M512 256c0 127.78-93.62 233.69-216 252.89V330h59.65L367 256h-71v-48.02c0-20.25 9.92-39.98 41.72-39.98H370v-63s-29.3-5-57.31-5c-58.47 0-96.69 35.44-96.69 99.6V256h-65v74h65v178.89C93.62 489.69 0 383.78 0 256 0 114.62 114.62 0 256 0s256 114.62 256 256z"
                    />
                    <path
                      fill="#fff"
                      d="M355.65 330 367 256h-71v-48.021c0-20.245 9.918-39.979 41.719-39.979H370v-63s-29.296-5-57.305-5C254.219 100 216 135.44 216 199.6V256h-65v74h65v178.889c13.034 2.045 26.392 3.111 40 3.111s26.966-1.066 40-3.111V330z"
                    />
                  </svg>
                </a>
              </li>
              {/* Add more social icons similarly */}
            </ul>
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="bg-gray-900 py-4 px-4 -mx-8 text-center mt-10">
        <p className="text-gray-400 text-base">© ReadymadeUI. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;

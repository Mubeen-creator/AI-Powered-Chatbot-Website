import React from 'react';
import { FaCogs, FaUsers, FaRocket, FaLock } from 'react-icons/fa';

const Features = () => {
  const features = [
    {
      icon: <FaCogs className="w-12 h-12 bg-blue-100 p-3 rounded-lg shrink-0" />,
      title: "Customization",
      description: "Tailor our product to suit your needs. Expand your reach with our global network.",
    },
    {
      icon: <FaUsers className="w-12 h-12 bg-blue-100 p-3 rounded-lg shrink-0" />,
      title: "Community",
      description: "Join a thriving community of like-minded professionals. Connect and share ideas.",
    },
    {
      icon: <FaRocket className="w-12 h-12 bg-blue-100 p-3 rounded-lg shrink-0" />,
      title: "Speed",
      description: "Experience fast performance and smooth interactions with minimal delays.",
    },
    {
      icon: <FaLock className="w-12 h-12 bg-blue-100 p-3 rounded-lg shrink-0" />,
      title: "Security",
      description: "Our top priority is keeping your data safe with industry-leading security measures.",
    },
    {
      icon: <FaLock className="w-12 h-12 bg-blue-100 p-3 rounded-lg shrink-0" />,
      title: "Security",
      description: "Our top priority is keeping your data safe with industry-leading security measures.",
    },
    {
      icon: <FaLock className="w-12 h-12 bg-blue-100 p-3 rounded-lg shrink-0" />,
      title: "Security",
      description: "Our top priority is keeping your data safe with industry-leading security measures.",
    },
    {
      icon: <FaLock className="w-12 h-12 bg-blue-100 p-3 rounded-lg shrink-0" />,
      title: "Security",
      description: "Our top priority is keeping your data safe with industry-leading security measures.",
    },
    {
      icon: <FaLock className="w-12 h-12 bg-blue-100 p-3 rounded-lg shrink-0" />,
      title: "Security",
      description: "Our top priority is keeping your data safe with industry-leading security measures.",
    },
    {
      icon: <FaLock className="w-12 h-12 bg-blue-100 p-3 rounded-lg shrink-0" />,
      title: "Security",
      description: "Our top priority is keeping your data safe with industry-leading security measures.",
    },
  ];

  return (
    <div className="max-w-6xl mx-auto font-[sans-serif] my-10">
      <h2 className="text-gray-800 sm:text-4xl text-2xl font-extrabold text-center mb-16">
        Discover Our Exclusive Features
      </h2>
      <div className="grid lg:grid-cols-3 md:grid-cols-2 max-md:max-w-lg mx-auto gap-12">
        {features.map((feature, index) => (
          <div
            key={index}
            className="p-4 flex gap-6 rounded-lg hover:shadow-md hover:scale-105 transition-all duration-300"
          >
            {feature.icon}
            <div>
              <h3 className="text-gray-800 text-xl font-semibold mb-3">{feature.title}</h3>
              <p className="text-gray-600 text-sm">{feature.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Features;

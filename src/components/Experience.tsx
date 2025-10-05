'use client';
import React, { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

const experiences = [
{
  title: "Senior Software Engineer — Experion Technologies Pvt. Ltd",
  period: "Apr 2022 – Jul 2025",
  details: [
    "Developed full-stack web applications using Next.js, React.js, Node.js, and MongoDB.",
    "Built Contentful extensions with React and @contentful/react-apps-toolkit for content workflows.",
    "Created scalable solutions using TypeScript, Cloudflare (Workers, R2, D1), and deployed to Vercel.",
    "Delivered SSR e-commerce platforms integrated with Next.js, AWS, S3, and BigCommerce APIs.",
    "Implemented RESTful and GraphQL APIs with efficient async data handling.",
    "Developed responsive UIs using SCSS and styled-components.",
    "Ensured code quality through Jest testing,RTL, ESLint, and Prettier setup.",
    "Mentored junior engineers and contributed to system architecture decisions."
  ],
},
 {
  title: "Software Developer — Flotilla Technologies Pvt. Ltd",
  period: "Jun 2021 – May 2022",
  details: [
    "Developed E-learning platform and E-Book Customization App using React.js.",
    "Used Redux Toolkit for scalable state management and efficient data handling.",
    "Implemented Google and Facebook authentication with REST APIs for seamless user access.",
    "Integrated PayPal and Razorpay gateways for secure online transactions.",
    "Built responsive UIs with Ant Design and Material-UI components.",
    "Developed App using CodeIgniter and MySQL for work schedules, payroll and staff management.",
    "Contributed to full feature lifecycle in a fast-paced startup environment."
  ],
},
  {
    title: "React Developer — Icohort Business Ventures Pvt. Ltd",
    period: "January 2020 – May 2021",
    details: [
      "Designed and developed VanForces, a SaaS platform for van sales management using Next.js.",
"Crafted a Health Advisor application using React.js.",
"Executed state management across the entire application using React Redux.",
"Built responsive and accessible UI components using HTML, CSS, and Ant Design.",
"Coordinated with backend teams for API integration and created RESTful APIs using PHP following best practices.",
"Developed and optimized MySQL databases for efficient data retrieval and storage.",
"Expanded Doorxs mobile application using React Native and added offline functionality for a smooth user experience without connectivity.",
"Converted Figma designs into pixel-perfect responsive user interfaces for web and mobile platforms.",
],
  },
  {
    title: "Internship Trainee — Icohort Business Ventures Pvt. Ltd",
    period: "July 2019 – December 2020",
    details: [
      "Built web and mobile applications using React.js and React Native. This ensured a smooth user experience across devices.",
      "Contributed to REST API development with PHP and MySQL.",
      "Improved UI/UX with HTML, CSS, and JavaScript.",
    ],
  },
];

const ExperienceTabs: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section id="experience" className="bg-white dark:bg-gray-900 rounded-2xl shadow-xl p-8 md:p-16 my-12 max-w-6xl mx-auto">
      <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white tracking-tight mb-8">
        Professional Experience
      </h2>

      <div className="flex flex-col md:flex-row">
        {/* Tabs */}
        <div className="flex md:flex-col space-x-4 md:space-x-0 md:space-y-4 mb-4 md:mb-0">
          {experiences.map((exp, index) => (
            <button
              key={index}
              className={`px-4 py-2 rounded-xl font-medium text-left relative
                ${
                  index === activeIndex
                    ? "bg-indigo-500 text-white"
                    : "bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-gray-200"
                }`}
              onClick={() => setActiveIndex(index)}
            >
              {exp.title.split("—")[0]}
              {index === activeIndex && (
                <motion.div
                  layoutId="underline"
                  className="absolute bottom-0 left-0 right-0 h-1 bg-white rounded"
                />
              )}
            </button>
          ))}
        </div>

        {/* Active Experience Details */}
        <div className="flex-1 md:ml-8 bg-gray-50 dark:bg-gray-800 p-6 rounded-xl shadow-md min-h-[200px]">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeIndex}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3 }}
            >
              <h3 className="text-xl md:text-2xl font-semibold text-gray-900 dark:text-white mb-1">
                {experiences[activeIndex].title}
              </h3>
              <span className="text-sm opacity-70 mb-4 block">
                {experiences[activeIndex].period}
              </span>
              <ul className="list-disc pl-5 space-y-2 text-gray-700 dark:text-gray-300">
                {experiences[activeIndex].details.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};

export default ExperienceTabs;

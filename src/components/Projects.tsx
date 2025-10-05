"use client";

import React from "react";
import { motion } from "framer-motion";

type Project = {
  name: string;
  description: string;
  technologies: string[];
};

const projects: Project[] = [
   {
    name: "Stand Up Tutor",
    description:
      "Developed a comprehensive e-learning platform empowering tutors to create, manage, and distribute educational content. The portal enables tutors to purchase packages, convert materials into multiple formats (PDF, audio, video, and Word), and securely store or distribute them to learners.",
    technologies: ["React.js", "Ant Design", "React Redux", "Node.js", "Express.js", "MySQL"],
  },
  {
  name: "Harley Davidson",
  description:
    "Developed a custom Contentful Extensions App using React and @contentful/react-apps-toolkit to manage interactive hotspots, offers, and content duplication across environments. Implemented modular features to enhance content operations and ensure seamless integration within the Contentful ecosystem.",
  technologies: ["React.js", "@contentful/react-apps-toolkit"],
},
  {
    name: "Homeshopie",
    description:
      "A full-stack e-commerce app leveraging Cloudflare Workers, Pages, R2, D1 with Hono.js for server logic. Deployed frontend with React on Vercel.",
    technologies: ["React.js", "TypeScript", "Cloudflare Workers", "Hono.js", "R2", "D1", "Vercel"],
  },
  {
    name: "Profield",
    description:
      "Built a scalable e-commerce solution using Reactjs and Adobe PWA Studio integrated with Magento GraphQL APIs, delivering high-performance, app-like shopping and Created a scalable seller dashboard application with order management and analytics, powered by Next.js, Node.js, and MongoDB.",
    technologies: ['React.js','Adobe PWA',"Next.js", "Node.js", "MongoDB",'Magento GraphQL APIs'],
  },
  {
    name: "PlotterBox",
    description:
      "An e-book customization app enabling users to create, manage, and purchase digital content with smooth payment integration.",
    technologies: ["React.js", "Material-UI"],
  },
  {
  name: "VanForces SaaS",
  description:
    "Built a comprehensive SaaS platform to streamline van-based sales operations. The system handles everything from route optimization, real-time inventory, and order capture, to invoicing, reporting, and compliance management.",
  technologies: ["Next.js", "React Redux", "MySQL", "PHP APIs"],
},
  {
  name: "Doorxs App",
  description:
    "Developed and enhanced a smart access control mobile application for organizations, enabling employees to automatically open authorized doors via the app. Implemented offline-first support using SQLite and Redux, ensuring seamless access even in low-connectivity environments.",
  technologies: ["React Native", "Redux", "SQLite"],
}

];

const Projects: React.FC = () => {
  return (
    <section
      id="projects"
      aria-labelledby="projects-heading"
      className="bg-white dark:bg-gray-900 rounded-2xl shadow-xl p-8 md:p-16 my-12 max-w-6xl mx-auto"
    >
      <h2
        id="projects-heading"
        className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white tracking-tight mb-8"
      >
        Projects
      </h2>

      {/* Scrollable Grid */}
      <div className="overflow-x-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 min-w-[700px]">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="bg-gray-50 dark:bg-gray-800 p-6 rounded-xl shadow-md hover:shadow-xl transition-shadow duration-300"
            >
              <h3 className="text-lg font-semibold text-indigo-600 dark:text-indigo-400">
                {project.name}
              </h3>
              <p className="mt-2 text-sm text-gray-700 dark:text-gray-300 leading-relaxed">
                {project.description}
              </p>
              <div className="mt-3 flex flex-wrap gap-2">
                {project.technologies.map((tech, i) => (
                  <span
                    key={i}
                    className="text-xs bg-indigo-100 dark:bg-indigo-700/40 text-indigo-700 dark:text-indigo-300 px-2 py-1 rounded-full"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;

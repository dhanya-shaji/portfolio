'use client';
import React from "react";
import { motion } from "framer-motion";

const About: React.FC = () => {
  return (
    <section
      id="about"
      aria-labelledby="about-heading"
      className="bg-white dark:bg-gray-900 rounded-2xl shadow-xl p-10 md:p-25 my-12 max-w-6xl mx-auto"
    >
      <div className="flex flex-col md:flex-row items-center md:items-start gap-10">
        {/* Text Content */}
        <motion.div
          className="flex-1"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <h2
            id="about-heading"
            className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white tracking-tight"
          >
            About Me
          </h2>
          <p className="mt-4 text-base md:text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
            I am <span className="font-semibold">Dhanya Shaji</span>, a Fullstack Engineer
            passionate about building <span className="text-indigo-500 font-medium">scalable, responsive, and user-friendly web applications</span>.
            I specialize in <span className="text-indigo-500 font-medium">React.js, Next.js, Node.js</span>, and modern UI/UX design, turning ideas into
            clean, elegant, and high-performing solutions. I love collaborating with teams,
            mentoring others, and exploring new technologies to deliver the best digital experiences.
          </p>
        </motion.div>

        {/* Profile Image */}
        <motion.div
          className="flex-shrink-0"
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.3 }}
        >
          <img
            src="/profile.jpg"
            alt="Dhanya Shaji"
            className="w-44 h-44 md:w-56 md:h-56 rounded-2xl object-cover shadow-2xl border border-gray-500 hover:scale-105 transition-transform duration-300"
          />
        </motion.div>
      </div>
    </section>
  );
};

export default About;

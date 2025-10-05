"use client";
import React from "react";
import { motion } from "motion/react"
import { FiPhone, FiMail, FiLinkedin, FiGithub, FiMapPin } from "react-icons/fi";

const contactItems = [
  { icon: <FiMapPin />, text: "Berlin, Germany" },
/*   { icon: <FiPhone />, text: "+49 176 63032342", link: "tel:+4917663032342" }, */
  { icon: <FiMail />, text: "dhanyashaji1996@gmail.com", link: "mailto:dhanyashaji1996@gmail.com" },
  { icon: <FiLinkedin />, text: "LinkedIn", link: "https://www.linkedin.com/in/dhanya-shaji-b956601ab/" },
  { icon: <FiGithub />, text: "GitHub", link: "https://github.com/dhanya-shaji" },
];

const Contact = () => {
  return (
    <section
      id="contact"
      aria-labelledby="contact-heading"
      className="bg-white dark:bg-gray-900 rounded-2xl shadow-xl p-8 md:p-16 my-12 max-w-6xl mx-auto"
    >
      <h2
        id="contact-heading"
        className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white tracking-tight mb-8"
      >
        Contact
      </h2>

      <motion.ul
        className="space-y-6 text-gray-700 dark:text-gray-300 text-base md:text-lg"
        initial="hidden"
        animate="visible"
        variants={{
          hidden: {},
          visible: { transition: { staggerChildren: 0.2 } },
        }}
      >
        {contactItems.map((item, idx) => (
          <motion.li
            key={idx}
            className="flex items-center gap-3 hover:text-indigo-500 transition-colors duration-300"
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0 },
            }}
          >
            <span className="text-xl">{item.icon}</span>
            {item.link ? (
              <a
                href={item.link}
                target={item.link.includes("http") ? "_blank" : undefined}
                rel={item.link.includes("http") ? "noreferrer" : undefined}
                className="hover:underline font-medium"
              >
                {item.text}
              </a>
            ) : (
              <span className="font-medium">{item.text}</span>
            )}
          </motion.li>
        ))}
      </motion.ul>
    </section>
  );
};

export default Contact;

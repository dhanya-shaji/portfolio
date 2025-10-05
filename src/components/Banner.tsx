import React from 'react';

const Banner: React.FC = () => {
    return (
          <section id="banner" aria-labelledby="about-heading" className="card">
      <div className="flex flex-col md:flex-row items-center md:items-start gap-8">
        <div className="flex-1">
          <h2
            id="about-heading"
            className="text-2xl font-semibold tracking-tight"
          >
            About Me
          </h2>
          <p className="text-base sm:text-lg leading-relaxed mt-2">
            I am Dhanya Shaji, a Fullstack Engineer passionate about building scalable, responsive,
             and user-friendly web applications. I specialize in React.js, Next.js, Node.js, 
             and modern UI/UX design, turning ideas into clean, elegant, and high-performing solutions. 
             I love collaborating with teams, 
            entoring others, and exploring new technologies to deliver the best digital experiences.
          </p>
        </div>
      
      </div>
    </section>
    );
};

export default Banner;
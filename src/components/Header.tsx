import React from 'react';

const Header: React.FC = () => {
    return (
        <header className="max-w-5xl mx-auto flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
       <div>
          <div className="eyebrow">Berlin, Germany</div>
          <h1 className="text-3xl sm:text-5xl font-semibold tracking-tight">Dhanya <span className="accent">Shaji</span></h1>
          <p className="mt-1 text-sm sm:text-base opacity-85">Fullstack Engineer · React · Next.js · TypeScript · Node.js</p>
        </div>
        <nav className="mt-4 sm:mt-0 flex gap-4 text-sm opacity-90 sm:text-base flex-wrap sm:items-end" >
          <a href="#about" className="hover:underline">About</a>
          <a href="#experience" className="hover:underline">Experience</a>
          <a href="#projects" className="hover:underline">Projects</a>
          <a href="#education" className="hover:underline">Education</a>
          <a href="#certificates" className="hover:underline">Certificates</a>
          <a href="#contact" className="hover:underline">Contacts</a>
        </nav>
      </header>
    );
};

export default Header;
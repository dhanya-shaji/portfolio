export default function Home() {
  return (
    <div className="min-h-dvh px-6 py-12 sm:px-10 md:px-16">
      <header className="max-w-5xl mx-auto flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <div className="eyebrow">Berlin, Germany</div>
          <h1 className="text-3xl sm:text-5xl font-semibold tracking-tight">Dhanya <span className="accent">Shaji</span></h1>
          <p className="mt-1 text-sm sm:text-base opacity-85">Fullstack Engineer · React · Next.js · TypeScript · Node.js</p>
        </div>
        <nav className="mt-4 sm:mt-0 flex gap-4 text-sm opacity-90">
          <a href="#experience" className="hover:underline">Experience</a>
          <a href="#skills" className="hover:underline">Skills</a>
          <a href="#contact" className="hover:underline">Contact</a>
        </nav>
      </header>

      <main className="max-w-5xl mx-auto mt-10 space-y-16">
        <section aria-labelledby="hero" className="card">
          <h2 id="hero" className="sr-only">Hero</h2>
          <p className="text-base sm:text-lg leading-relaxed">
            I am a Fullstack Engineer with 6 years of experience building scalable, responsive, and user-friendly web applications.
            Expert in React.js, Next.js, TypeScript, JavaScript, Node.js, and Express.js, with strong experience in Redux, testing
            (Jest, RTL), REST and GraphQL APIs, and modern UI/UX design. Passionate about clean, maintainable, and testable code,
            collaborating cross-functionally, and mentoring with empathy.
          </p>
        </section>

        <section id="experience" aria-labelledby="experience-heading" className="space-y-6">
          <h2 id="experience-heading" className="text-2xl font-semibold tracking-tight">Professional Experience</h2>
          <div className="space-y-8">
            <article className="space-y-2 card">
              <header className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
                <h3 className="text-xl font-medium">Senior Software Engineer — Experion Technologies Pvt. Ltd</h3>
                <span className="text-sm opacity-70">Apr 2022 – Jul 2025</span>
              </header>
              <ul className="list-disc pl-5 space-y-1 text-sm sm:text-base">
                <li>Built e-commerce website with React.js, Adobe PWA Studio, Magento GraphQL.</li>
                <li>Developed seller dashboard with Next.js (client), Node.js and MongoDB (server).</li>
                <li>Created Contentful extensions using React and @contentful/react-apps-toolkit.</li>
                <li>Delivered Homeshop full-stack apps on Cloudflare Workers/Pages/R2/D1 with Hono.js; deployed React on Vercel.</li>
                <li>Delivered SSR e-commerce with Next.js + TypeScript; integrated AWS + S3.</li>
                <li>Built scalable storefronts and custom payment SDK; implemented CSV parser using BigCommerce API.</li>
                <li>Created staff management system with React, Node.js, Express.js.</li>
                <li>Integrated REST and GraphQL; implemented robust async data flows.</li>
                <li>Built responsive UI with Sass/Scss and styled-components.</li>
                <li>Collaborated across UX, product, and backend; Agile sprints with Jira, GitHub, Confluence.</li>
                <li>Enabled ESLint + Prettier; added Jest + RTL tests; mentored junior engineers.</li>
              </ul>
            </article>

            <article className="space-y-2 card">
              <header className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
                <h3 className="text-xl font-medium">Software Developer — Flotilla Technologies Pvt. Ltd</h3>
                <span className="text-sm opacity-70">Jun 2021 – May 2022</span>
              </header>
              <ul className="list-disc pl-5 space-y-1 text-sm sm:text-base">
                <li>Built Content Q e-learning platforms in React with Redux Toolkit.</li>
                <li>Implemented social logins (Google, Facebook) and REST APIs.</li>
                <li>Integrated payment gateways (PayPal, Razorpay).</li>
                <li>Shipped PlotterBox e-book customization app with React.</li>
                <li>Built payroll and staff management with CodeIgniter + MySQL.</li>
              </ul>
            </article>

            <article className="space-y-2 card">
              <header className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
                <h3 className="text-xl font-medium">React Developer — Icohort Business Ventures Pvt. Ltd</h3>
                <span className="text-sm opacity-70">Jan 2020 – May 2021</span>
              </header>
              <ul className="list-disc pl-5 space-y-1 text-sm sm:text-base">
                <li>Designed VanForces SaaS for van sales with Next.js.</li>
                <li>Built Health Advisor app in React; managed state with Redux.</li>
                <li>Created REST APIs with PHP; optimized MySQL databases.</li>
                <li>Expanded Doorxs mobile app using React Native with offline support.</li>
                <li>Converted Figma designs to responsive, accessible interfaces.</li>
              </ul>
            </article>

            <article className="space-y-2 card">
              <header className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
                <h3 className="text-xl font-medium">Internship Trainee — Icohort Business Ventures Pvt. Ltd</h3>
                <span className="text-sm opacity-70">Jul 2019 – Dec 2020</span>
              </header>
              <ul className="list-disc pl-5 space-y-1 text-sm sm:text-base">
                <li>Built web and mobile applications using React and React Native.</li>
                <li>Contributed to REST API development with PHP and MySQL.</li>
                <li>Improved UI/UX with HTML, CSS, and JavaScript.</li>
              </ul>
            </article>
          </div>
        </section>

        <section id="skills" aria-labelledby="skills-heading" className="space-y-4 card">
          <h2 id="skills-heading" className="text-2xl font-semibold tracking-tight">Technical Skills</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div>
              <h3 className="text-sm uppercase opacity-70 mb-2">Frontend</h3>
              <p className="text-sm sm:text-base opacity-90">React, Next.js, React Native, TypeScript, JavaScript (ES6), Redux Toolkit, Redux-Saga, React Router, Tailwind CSS, Styled Components, HTML5, CSS3, SASS/SCSS, Ant Design, Material-UI, Bootstrap, F36, Chakra UI</p>
            </div>
            <div>
              <h3 className="text-sm uppercase opacity-70 mb-2">Backend</h3>
              <p className="text-sm sm:text-base opacity-90">Node.js, Express.js, Hono.js, PHP, CodeIgniter</p>
            </div>
            <div>
              <h3 className="text-sm uppercase opacity-70 mb-2">Databases</h3>
              <p className="text-sm sm:text-base opacity-90">MongoDB, MySQL, Cloudflare D1</p>
            </div>
            <div>
              <h3 className="text-sm uppercase opacity-70 mb-2">Testing</h3>
              <p className="text-sm sm:text-base opacity-90">Jest, React Testing Library, Playwright</p>
            </div>
            <div>
              <h3 className="text-sm uppercase opacity-70 mb-2">CMS & E‑commerce</h3>
              <p className="text-sm sm:text-base opacity-90">Contentful, BigCommerce, Adobe PWA Studio, Magento (GraphQL)</p>
            </div>
            <div>
              <h3 className="text-sm uppercase opacity-70 mb-2">Tools & Cloud</h3>
              <p className="text-sm sm:text-base opacity-90">GitHub, Jira, Confluence, Postman, Trello, VS Code, Figma, Docker, Adobe XD, Vercel, DigitalOcean, Cloudflare, AWS</p>
            </div>
            <div>
              <h3 className="text-sm uppercase opacity-70 mb-2">Languages</h3>
              <p className="text-sm sm:text-base opacity-90">English, German, Hindi, Malayalam (native)</p>
            </div>
          </div>
        </section>

        <section id="contact" aria-labelledby="contact-heading" className="space-y-3">
          <h2 id="contact-heading" className="text-2xl font-semibold tracking-tight">Contact</h2>
          <ul className="text-sm sm:text-base opacity-90 space-y-1">
            <li>Berlin, Germany</li>
            <li><a className="hover:underline" href="tel:+4917663032342">+49 176 63032342</a></li>
            <li><a className="hover:underline" href="mailto:dhanyashaji1996@gmail.com">dhanyashaji1996@gmail.com</a></li>
            <li><a className="hover:underline" href="https://www.linkedin.com/in/dhanya-shaji-b956601ab/" target="_blank" rel="noreferrer">LinkedIn</a></li>
            <li><a className="hover:underline" href="https://github.com/dhanya-shaji" target="_blank" rel="noreferrer">GitHub</a></li>
          </ul>
        </section>
      </main>

      <footer className="max-w-5xl mx-auto mt-16 pt-8 border-t border-foreground/20 text-sm opacity-70">
        © {new Date().getFullYear()} Dhanya Shaji. All rights reserved.
      </footer>
    </div>
  );
}

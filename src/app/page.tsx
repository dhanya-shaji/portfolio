import About from "@/components/About";
import Header from "@/components/Header";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";
import Education from "@/components/Education";
import Contact from "@/components/Contact";
import Banner from "@/components/Banner";
import Certificates from "@/components/Certificates";
export default function Home() {
  return (
    <div className="min-h-dvh px-6 py-12 sm:px-10 md:px-16">
      <Header />
      <main className="max-w-5xl mx-auto mt-10 space-y-16">
      {/*   <Banner /> */}
        <About />
        <Experience />
        <Projects />
        <Education />
        <Certificates />
        <Contact />
      </main>
     {/*  <footer className="max-w-5xl mx-auto mt-16 pt-8 border-t border-foreground/20 text-sm opacity-70">
        © {new Date().getFullYear()} Dhanya Shaji. All rights reserved.
      </footer> */}
    </div>
  );
}

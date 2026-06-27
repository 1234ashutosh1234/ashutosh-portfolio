import Navbar from "../components/layout/Navbar";
import Hero from "../components/home/Hero";
import About from "../components/about/About";
import Education from "../components/education/Education";
import Experience from "../components/experience/Experience";
import Skills from "../components/skills/Skills";
import Services from "../components/services/Services";
import Projects from "../components/projects/Projects";
import Resume from "../components/common/Resume";
import Certifications from "../components/certifications/Certifications";
import Contact from "../components/contact/Contact";
import Footer from "../components/layout/Footer";
import ScrollProgress from "../components/layout/ScrollProgress";
import BackToTop from "../components/layout/BackToTop";

export default function Home() {
  return (
    <>
      <ScrollProgress />

      <Navbar />

      <main>

        <Hero />

        <About />

        <Education />

        <Experience />

        <Skills />

        <Services />

        <Projects />

        <Resume />

        <Certifications />

        <Contact />

      </main>

      <Footer />

      <BackToTop />
    </>
  );
}
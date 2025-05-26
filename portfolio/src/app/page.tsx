import About from "@/components/About/About";
import Banner from "@/components/Banner/Banner";
import Blog from "@/components/Blogs/Blog";
import Contact from "@/components/Contact/Contact";
import Education from "@/components/Education/Education";
import Projects from "@/components/Projects/Projects";
import Service from "@/components/Services/Service";
import Skills from "@/components/Skills/Skills";

const HomePage = () => {
  return (
    <div>
      <Banner/>
      <About/>
      <Skills/>
      <Education/>
      <Projects/>
      <Blog/>
      <Service/>
      <Contact/>
    </div>
  );
};

export default HomePage;
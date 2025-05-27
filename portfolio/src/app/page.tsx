import { allEducations, allProjects, allResumes, allSkills } from "@/api";
import About from "@/components/About/About";
import Banner from "@/components/Banner/Banner";
import Blog from "@/components/Blogs/Blog";
import Contact from "@/components/Contact/Contact";
import Education from "@/components/Education/Education";
import Projects from "@/components/Projects/Projects";
import Service from "@/components/Services/Service";
import Skills from "@/components/Skills/Skills";

const HomePage = async () => {
  const [skillsRes, projectsRes, educationsRes, resumesRes] = await Promise.all([
    allSkills(),
    allProjects(),
    allEducations(),
    allResumes(),
  ]);

  const skillsData = skillsRes.data;
  const projectsData = projectsRes.data;
  const educationsData = educationsRes.data;
  const resumesData = resumesRes.data;
  console.log(resumesData)
  return (
    <div>
      <section id="banner">
        <Banner />
      </section>

      <section id="about">
        <About />
      </section>

      <section id="skills">
        <Skills skills={skillsData} />
      </section>

      <section id="education">
        <Education educations={educationsData} />
      </section>

      <section id="projects">
        <Projects projects={projectsData} />
      </section>

      <section id="blogs">
        <Blog />
      </section>

      <section id="services">
        <Service />
      </section>

      <section id="contact">
        <Contact />
      </section>
    </div>
  );
};

export default HomePage;

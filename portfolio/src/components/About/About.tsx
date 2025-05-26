'use client';

import { FaCheckCircle, FaSmile, FaCode } from 'react-icons/fa';
import { TbStack3 } from 'react-icons/tb';
import AboutSVG from '../UI/AboutSVG';

const About = () => {
  return (
    <div className="max-w-6xl mx-auto my-20 border">
      <h2 className="text-3xl font-bold mb-10 text-center">
        About <span className="text-[#6C63FF]">Me</span>
      </h2>

      <div className="flex flex-col lg:flex-row items-center gap-8 ">
      <div className='lg:w-[40%] w-full border'>
      <AboutSVG/>
dfgh
        </div>
        {/* Information Section */}
        <div className="lg:w-[60%] w-full text-gray-200 space-y-4">
        <h2 className="text-3xl font-bold mb-6 underline underline-offset-4 text-[#6C63FF]">
        INTRODUCTION
      </h2>
          <p>
            Hello, I'm <span className="font-semibold text-white">Mst. Setu Akther</span>, a dedicated MERN Stack Developer with expertise in React.js, Next.js, JavaScript, TailwindCSS, Node.js, Express.js, and MongoDB.
          </p>
          <p>
            I’m passionate about creating modern, user-friendly, and scalable web applications. I’ve worked on both solo and collaborative projects, developing clean and responsive interfaces that meet real-world demands.
          </p>
          <p>
            I’m always eager to learn, grow, and contribute to building digital solutions that leave a lasting impact.
          </p>

          {/* Experience / Stats Section */}
        <div className=" bg-[#15162c] border border-[#6C63FF] p-4 rounded-xl shadow-lg text-white grid grid-cols-1 sm:grid-cols-4 gap-4 text-center">
          <div className="flex flex-col items-center space-y-2">
            <FaCheckCircle className="text-3xl text-sky-400" />
            <p className="text-2xl font-bold text-sky-400">20+</p>
            <p className="uppercase text-xs tracking-wider text-gray-400">Projects</p>
          </div>
          <div className="flex flex-col items-center space-y-2">
  <TbStack3 className="text-3xl text-sky-400" />
  <p className="text-2xl font-bold text-sky-400">3+</p>
  <p className="uppercase text-xs tracking-wider text-gray-400">Full Stack </p>
</div>
          <div className="flex flex-col items-center space-y-2">
            <FaSmile className="text-3xl text-sky-400" />
            <p className="text-2xl font-bold text-sky-400">2+</p>
            <p className="uppercase text-xs tracking-wider text-gray-400">Clients</p>
          </div>
          <div className="flex flex-col items-center space-y-2">
            <FaCode className="text-3xl text-sky-400" />
            <p className="text-2xl font-bold text-sky-400">2+ yr</p>
            <p className="uppercase text-xs tracking-wider text-gray-400">Experience</p>
          </div>
        </div>
        </div>
       
      </div>
    </div>
  );
};

export default About;

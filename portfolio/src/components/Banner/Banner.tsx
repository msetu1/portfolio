"use client";
import { Typewriter } from "react-simple-typewriter";
import { MdOutlineFileDownload } from "react-icons/md";

const Banner = () => {
  return (
    <div className="max-w-6xl mx-auto mt-36  ">
      <h2 className="text-xl font-semibold mb-6 ">Hello !!</h2>

      <div className="flex gap-2 flex-wrap items-center mb-6">
        <p className="text-[26px] sm:text-[32px] md:text-[36px] font-bold ">I am</p>
        <span className="text-[20px] sm:text-[32px] md:text-[36px] font-bold text-[#6C63FF]">
          <Typewriter
            words={[
              "Full Stack Developer",
              "MERN Stack Developer",
              "Front End Developer",
              "React Developer",
            ]}
            loop={5}
            cursor
            cursorStyle="_"
            typeSpeed={70}
            deleteSpeed={50}
            delaySpeed={1000}
          />
        </span>
      </div>

      <p className=" text-sm sm:text-lg leading-relaxed max-w-3xl mb-8">
        I am a Full Stack web developer with expertise in creating attractive, user-friendly websites. 
        Specializing in clean, responsive designs using HTML, CSS, Tailwind, JavaScript,TypeScript,React.js,Redux,Next.js,Prisma,SQL 
        Proficient in Node.js,MongoDB and Mongoose . Eager to enhance your team – let is connect! Email me or use 
        the provided information.
      </p>

      <div className="flex gap-4 flex-wrap">
        <a href="/resume/resume_of_setu.pdf" download>
          <button className="flex items-center gap-2 px-5 py-2.5 rounded border-2 border-[#6C63FF] text-[#6C63FF] font-semibold bg-transparent hover:bg-[#6C63FF] hover:text-white transition-all duration-300 ease-in-out transform hover:scale-105">
            <MdOutlineFileDownload size={20} /> Resume
          </button>
        </a>
        <a href="#contact">
          <button className="px-5 py-2.5 rounded border-2 border-[#6C63FF] text-[#6C63FF] font-semibold bg-transparent hover:bg-[#6C63FF] hover:text-white transition-all duration-300 ease-in-out transform hover:scale-105">
            Hire me...
          </button>
        </a>
      </div>
    </div>
  );
};

export default Banner;

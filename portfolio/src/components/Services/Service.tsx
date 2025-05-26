"use client"
import { FaCode, FaPaintBrush, FaMobileAlt } from "react-icons/fa";
const Service = () => {
    return (
        <div className="max-w-6xl mx-auto my-20 border">
          <section className=" py-10  text-white">
      <div className=" text-center">
        
        <h2 className="text-3xl font-bold mb-10 text-center "> My<span className="text-[#6C63FF]"> Services</span> 
             </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Web Development */}
          <div className="bg-[#0a0a23] border border-[#6C63FF] p-6 rounded-xl hover:shadow-lg hover:scale-105 transition flex flex-col items-center justify-center">
            <div className="text-[#6C63FF] text-4xl mb-4">
              <FaCode />
            </div>
            <h3 className="text-xl font-semibold mb-2">Web Development</h3>
            <p className="text-sm text-gray-300">
              I build fast, scalable, and dynamic websites using modern web technologies like React, Next.js, and Node.js.
            </p>
          </div>

          {/* Web Design */}
          <div className="bg-[#0a0a23] border border-[#6C63FF] p-6 rounded-xl hover:shadow-lg hover:scale-105 transition flex flex-col items-center justify-center">
            <div className="text-[#6C63FF] text-4xl mb-4">
              <FaPaintBrush />
            </div>
            <h3 className="text-xl font-semibold mb-2">Web Design</h3>
            <p className="text-sm text-gray-300">
              I design modern and user-friendly interfaces with attention to usability and visual appeal.
            </p>
          </div>

          {/* Responsive Web Design */}
          <div className="bg-[#0a0a23] border border-[#6C63FF] p-6 rounded-xl hover:shadow-lg hover:scale-105 transition flex flex-col items-center justify-center">
            <div className="text-[#6C63FF] text-4xl mb-4">
              <FaMobileAlt />
            </div>
            <h3 className="text-xl font-semibold mb-2">Responsive Web Design</h3>
            <p className="text-sm text-gray-300">
              I ensure your website looks and works great on all devices including desktops, tablets, and mobiles.
            </p>
          </div>
        </div>
      </div>
    </section>  
        </div>
    );
};

export default Service;
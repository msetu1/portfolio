'use client';
import { IPEducation } from '@/types';
import Image from 'next/image';
import { useState } from 'react';
import { MdOutlineFileDownload } from 'react-icons/md';
import { motion } from 'framer-motion';

const categories: IPEducation["category"][] = ['Diploma', 'SSC', 'Courses'];

type TEducationsProps = {
  educations: IPEducation[];
};

const Education = ({ educations }: TEducationsProps) => {
  const [activeTab, setActiveTab] = useState<IPEducation["category"]>('Diploma');

  const filteredEducations = educations.filter(
    (edu) => edu.category === activeTab
  );

  const isCourseTab = activeTab === 'Courses';

  return (
    <div className="max-w-6xl mx-auto my-32 text-white">
      <motion.h2
  initial={{ opacity: 0, y: 40 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true }}
  transition={{ duration: 0.6 }}
  className="text-3xl font-bold mb-10 text-center">
        Education <span className="text-[#6C63FF]">&amp; Courses</span>
      </motion.h2>

      <div className="flex flex-col lg:flex-row items-center gap-8">
        <motion.div
    initial={{ x: -100, opacity: 0 }}
    whileInView={{ x: 0, opacity: 1 }}
    transition={{ duration: 0.8 }}
    viewport={{ once: true }}
    className="w-full lg:w-[60%]">
          {/* Tabs */}
          <div className="flex justify-center gap-4 mb-6 flex-wrap">
            {categories.map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-4 py-2 font-semibold rounded-md transition-all duration-300 ${
                  activeTab === tab
                    ? 'bg-[#6C63FF] text-white'
                    : 'bg-transparent border border-[#6C63FF] hover:bg-[#6C63FF] hover:text-white'
                }`}
              >
                {tab}
              </button>
            ))}
          </div>

          {/* Tab Content */}
          {isCourseTab ? (
            <div className="flex flex-col md:flex-row gap-6 flex-wrap">
              {filteredEducations.map((course) => (
                <div
                  key={course._id}
                  className="flex-1 bg-gradient-to-r from-[#15162c] to-[#0f111e] p-6 rounded-xl shadow-lg space-y-3 border border-[#6C63FF]"
                >
                  <h2 className="text-xl font-bold text-[#6C63FF]">{course.degree}</h2>
                  <h3 className="text-md font-medium text-gray-300">{course.institute}</h3>
                  <div className="flex items-center justify-between text-sm">
                    <span
                      className={`px-3 py-1 rounded-full text-white ${
                        course.status === 'Completed' ? 'bg-green-600' : 'bg-blue-600'
                      }`}
                    >
                      {course.status}
                    </span>
                    <span className="text-gray-400">{course.duration}</span>
                  </div>
                  <p className="text-gray-300 leading-relaxed">
                    {course.description}
                  </p>
                </div>
              ))}
            </div>
          ) : (
            filteredEducations.map((edu) => (
              <div
                key={edu._id}
                className="bg-gradient-to-r from-[#15162c] to-[#0f111e] p-6 rounded-xl shadow-lg space-y-3 border border-[#6C63FF] mb-6"
              >
                <h2 className="text-xl font-bold text-[#6C63FF]">{edu.degree}</h2>
                <h3 className="text-md font-medium text-gray-300">{edu.institute}</h3>
                <div className="flex items-center justify-between text-sm">
                  <span
                    className={`px-3 py-1 rounded-full text-white ${
                      edu.status === 'Completed' ? 'bg-green-600' : 'bg-blue-600'
                    }`}
                  >
                    {edu.status}
                  </span>
                  <span className="text-gray-400">{edu.duration}</span>
                </div>
                <p className="text-gray-300 leading-relaxed">
                  {edu.description}
                </p>
                <div className="pt-4">
                  <a href="/resume/resume_of_setu.pdf" download>
                            <button className="flex items-center gap-2 px-5 py-2.5 rounded border-2 border-[#6C63FF] text-[#6C63FF] font-semibold bg-transparent hover:bg-[#6C63FF] hover:text-white transition-all duration-300 ease-in-out transform hover:scale-105">
                              <MdOutlineFileDownload size={20} /> Resume
                            </button>
                          </a>
                </div>
              </div>
            ))
          )}
        </motion.div>

        <motion.div
    initial={{ x: 100, opacity: 0 }}
    whileInView={{ x: 0, opacity: 1 }}
    transition={{ duration: 0.8 }}
    viewport={{ once: true }}
    className="w-full lg:w-[40%]">
          <Image
        src="https://i.ibb.co/9mmSQrhD/Pull-request-rafiki.png"
        alt="My Photo"
        width={500} 
        height={500}
        className="object-cover"      
      />
        </motion.div>
      </div>
    </div>
  );
};

export default Education;

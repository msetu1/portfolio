'use client';
import { useState } from 'react';

const educationData = {
  Diploma: {
    title: 'Shyamoli Ideal Polytechnic Institute',
    subtitle: 'Diploma in Computer Science & Technology',
    status: 'Running',
    year: '2021-2025',
    description:
      'I am currently pursuing a Diploma in Computer Science & Technology from Shyamoli Ideal Polytechnic Institute. This program equips me with technical knowledge in programming, hardware, and software systems, preparing me for a dynamic career in the tech industry.',
  },
  SSC: {
    title: 'Bangula M.L High School',
    subtitle: 'Secondary School Certificate (Science)',
    status: 'Completed',
    year: '2018-2021',
    description:
      'I completed my SSC from Bangula M.L High School with a focus on Science. This phase laid the academic foundation in subjects like Physics, Chemistry, and Mathematics, shaping my interest in technology.',
  },
  Courses: [
    {
      title: 'Complete Web Development',
      subtitle: 'Programming Hero',
      status: 'Completed',
      year: '2023-2024',
      description:
        'Completed a full-stack web development course covering HTML, CSS, JavaScript, React, Node.js, MongoDB, Express.js, and deployment practices.',
    },
    {
      title: 'Next Level Web Development',
      subtitle: 'Programming Hero',
      status: 'Running',
      year: '2024-2025',
      description:
        'Currently enrolled in an advanced web development program focusing on production-grade projects using Next.js, TypeScript, Redux, testing, and CI/CD workflows.',
    },
  ],
};

const tabs = ['Diploma', 'SSC', 'Courses'];

const Education = () => {
  const [activeTab, setActiveTab] = useState('Diploma');
  const isCourseTab = activeTab === 'Courses';

  return (
    <div className="max-w-6xl mx-auto my-20 border text-white ">
       <h2 className="text-3xl font-bold mb-10 text-center">
        Education <span className="text-[#6C63FF]"> && Courses</span>
      </h2>

      <div className="flex flex-col lg:flex-row items-center gap-8">
        <div className="w-[60%]">
{/* Tabs */}
<div className="flex justify-center gap-4 mb-6 flex-wrap">
        {tabs.map((tab) => (
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
        <div className="flex flex-col md:flex-row gap-6">
          {educationData.Courses.map((course, idx) => (
            <div
              key={idx}
              className="flex-1 bg-gradient-to-r from-[#15162c] to-[#0f111e] p-6 rounded-xl shadow-lg space-y-3 border border-[#6C63FF]"
            >
              <h2 className="text-xl font-bold text-[#6C63FF]">{course.title}</h2>
              <h3 className="text-md font-medium text-gray-300">{course.subtitle}</h3>
              <div className="flex items-center justify-between text-sm">
                <span
                  className={`px-3 py-1 rounded-full text-white ${
                    course.status === 'Completed' ? 'bg-green-600' : 'bg-blue-600'
                  }`}
                >
                  {course.status}
                </span>
                <span className="text-gray-400">{course.year}</span>
              </div>
              <p className="text-gray-300 leading-relaxed">{course.description}</p>
            </div>
          ))}
        </div>
      ) : (
        <div className="bg-gradient-to-r from-[#15162c] to-[#0f111e] p-6 rounded-xl shadow-lg space-y-3 border border-[#6C63FF]">
          <h2 className="text-xl font-bold text-[#6C63FF]">
            {educationData[activeTab].title}
          </h2>
          <h3 className="text-md font-medium text-gray-300">
            {educationData[activeTab].subtitle}
          </h3>
          <div className="flex items-center justify-between text-sm">
            <span
              className={`px-3 py-1 rounded-full text-white ${
                educationData[activeTab].status === 'Completed'
                  ? 'bg-green-600'
                  : 'bg-blue-600'
              }`}
            >
              {educationData[activeTab].status}
            </span>
            <span className="text-gray-400">{educationData[activeTab].year}</span>
          </div>
          <p className="text-gray-300 leading-relaxed">
            {educationData[activeTab].description}
          </p>

          <div className="pt-4">
            <button className="px-5 py-2 rounded border-2 border-[#6C63FF] font-semibold bg-transparent hover:bg-[#6C63FF] hover:text-white transition-all duration-300 transform hover:scale-105">
              Download Resume
            </button>
          </div>
        </div>
      )}

        </div>
        <div className="w-[40%] border">edft</div>
       
      </div>

      
    </div>
  );
};

export default Education;

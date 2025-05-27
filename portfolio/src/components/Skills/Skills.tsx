'use client';

import { useState } from 'react';
import Image from 'next/image';
import { ISoftSkill} from '@/types';

// Define categories from the ISoftSkill interface
const categories: ISoftSkill["category"][] = [
  'Expertise',
  'Comfortable',
  'Familiar',
  'Tools',
];

type TSkillsProps={
    skills:ISoftSkill[]
}


const Skills = ({ skills }: TSkillsProps) => {
  const [activeCategory, setActiveCategory] = useState<ISoftSkill["category"]>('Expertise');

  const filteredSkills = skills.filter(
    (skill) =>
      skill.category === activeCategory &&
      skill.isAvailable &&
      !skill.isDeleted
  );

  return (
    <div className="max-w-6xl mx-auto my-32 ">
      <h2 className="text-3xl font-bold mb-10 text-center text-[#6C63FF]">
        My<span className="text-white"> Skills</span>
      </h2>

      {/* Tabs */}
      <div className="flex gap-4 mb-10 justify-center">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setActiveCategory(cat)}
            className={`px-4 py-2 rounded-md border font-semibold ${
              activeCategory === cat
                ? 'bg-[#6C63FF] text-white'
                : 'border-[#6C63FF]'
            } transition`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Skill Icons */}
      <div className="flex items-center justify-center gap-6">
        {filteredSkills.map((skill) => (
          <div
            key={skill._id}
            className="relative group flex flex-col items-center justify-center"
          >
            <div className="w-20 h-20 p-2 border-2 border-[#6C63FF] rounded-xl flex items-center justify-center transition-transform group-hover:scale-110">
              <Image
                src={skill.icon}
                alt={skill.name}
                width={600}
                height={600}
                className="object-contain w-full h-full"
              />
            </div>
            <div className="absolute -top-10 text-sm text-center bg-gray-900 text-white px-2 py-1 rounded shadow-lg opacity-0 group-hover:opacity-100 transition">
              {skill.area}
            </div>
            <div className="text-lg mt-2 text-[#6C63FF] font-medium text-center opacity-0 group-hover:opacity-100 transition">
              {skill.name}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};


export default Skills;

'use client';

import { useState } from 'react';
import Image from 'next/image';
import { ISoftSkill } from '@/types';
import { motion} from 'framer-motion'; // ✅ Import AnimatePresence

const categories: ISoftSkill["category"][] = [
  'Expertise',
  'Comfortable',
  'Familiar',
  'Tools',
];

type TSkillsProps = {
  skills: ISoftSkill[];
};

const Skills = ({ skills }: TSkillsProps) => {
  const [activeCategory, setActiveCategory] = useState<ISoftSkill["category"]>('Expertise');

  const filteredSkills = skills.filter(
    (skill) =>
      skill.category === activeCategory &&
      skill.isAvailable &&
      !skill.isDeleted
  );

  return (
    <div className="max-w-6xl mx-auto my-32 px-4 lg:px-0 md:px-0">
      <motion.h2
  initial={{ opacity: 0, y: 40 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true }}
  transition={{ duration: 0.6 }}
  className="text-3xl font-bold mb-10 text-center text-[#6C63FF]">
        My<span className="text-white"> Skills</span>
      </motion.h2>

      {/* Tabs */}
      <div className="flex flex-col lg:flex-row md:flex-row gap-4 mb-10 justify-center relative ">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setActiveCategory(cat)}
            className={`relative px-4 py-2 rounded-md border font-semibold border-[#6C63FF] text-[#6C63FF] transition`}
          >
            {cat}
            {activeCategory === cat && (
              <motion.div
                layoutId="underline"
                className="absolute left-0 right-0 bottom-0 h-1 bg-[#6C63FF] rounded"
                transition={{ type: 'spring', stiffness: 500, damping: 30 }}
              />
            )}
          </button>
        ))}
      </div>

      {/* Skill Icons with Motion */}
      <div className="flex items-center justify-center gap-6 flex-wrap">
        {filteredSkills.map((skill, index) => (
          <motion.div
            key={skill._id}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
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
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Skills;

'use client';

import { IPProject } from '@/types';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';

type TProjectsProps = {
  projects: IPProject[];
};

const Projects = ({ projects }: TProjectsProps) => {
  return (
    <div className="max-w-6xl mx-auto my-32 ">
      <motion.h2
  initial={{ opacity: 0, y: 40 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true }}
  transition={{ duration: 0.6 }}
  className="text-3xl font-bold mb-10 text-center">Projects</motion.h2>
      <motion.p
  initial={{ opacity: 0, y: 40 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true }}
  transition={{ duration: 0.6 }}
  className="text-center text-gray-600 max-w-2xl mx-auto mb-10">
        Explore a collection of my featured projects showcasing my expertise in full-stack <br /> development, UI/UX design, and real-world problem solving. Each project highlights modern technologies and thoughtful execution.
      </motion.p>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {projects.map((project, index) => {
          // Define custom animation direction
          let initialAnimation = { x: 0, y: 0, opacity: 0 };

if (index % 3 === 0) {
  initialAnimation = { x: -100, y: 0, opacity: 0 }; // Left
} else if (index % 3 === 1) {
  initialAnimation = { x: 0, y: 100, opacity: 0 }; // Bottom
} else if (index % 3 === 2) {
  initialAnimation = { x: 100, y: 0, opacity: 0 }; // Right
}

          return (
            <motion.div
              key={project._id}
              initial={initialAnimation}
              whileInView={{ x: 0, y: 0, opacity: 1 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="relative group overflow-hidden border border-[#6C63FF] rounded-md shadow-md"
            >
              <Image
                src={project.thumbnail as string}
                alt={project.title}
                width={500}
                height={300}
                className="w-full h-60 object-cover transition-transform duration-500 group-hover:scale-105"
              />

              {/* Hover bottom panel */}
              <div className="absolute bottom-0 left-0 right-0 bg-[#6C63FF] text-white text-center py-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="flex justify-center gap-4 text-sm font-medium">
                  <Link
                    href={project.liveLink as string}
                    target="_blank"
                    className="underline hover:text-gray-200 text-lg font-medium transition"
                  >
                    Live Link
                  </Link>
                  <span>|</span>
                  <Link
                    href=""
                    className="underline hover:text-gray-200 text-lg font-medium transition"
                  >
                    View Details
                  </Link>
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
};

export default Projects;

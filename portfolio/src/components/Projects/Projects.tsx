'use client';

import Image from 'next/image';
import Link from 'next/link';

const projects = [
  {
    id: 1,
    title: 'Portfolio Website',
    image: '/images/projects/portfolio.png',
    liveLink: 'https://yourportfolio.com',
    detailsLink: '/projects/portfolio',
  },
  {
    id: 2,
    title: 'E-commerce Store',
    image: '/images/projects/ecommerce.png',
    liveLink: 'https://myecommercestore.com',
    detailsLink: '/projects/ecommerce',
  },
  {
    id: 2,
    title: 'E-commerce Store',
    image: '/images/projects/ecommerce.png',
    liveLink: 'https://myecommercestore.com',
    detailsLink: '/projects/ecommerce',
  },
];

const Projects = () => {
  return (
    <div className="max-w-6xl mx-auto my-20  border">
      <h2 className="text-3xl font-bold mb-4 text-center text-[#6C63FF]">Projects</h2>
<p className="text-center text-gray-600 max-w-2xl mx-auto mb-10">
  Explore a collection of my featured projects showcasing my expertise in full-stack <br /> development,  UI/UX design, and real-world problem solving. Each project highlights modern technologies and thoughtful execution.
</p>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {projects.map((project) => (
          <div
            key={project.id}
            className="relative group overflow-hidden border border-[#6C63FF] "
          >
            <Image
              src={project.image}
              alt={project.title}
              width={500}
              height={300}
              className="w-full h-60 object-cover transition-transform duration-500 group-hover:scale-105"
            />

            {/* Hover bottom panel */}
            <div className="absolute bottom-0 left-0 right-0 bg-[#6C63FF] text-white text-center py-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <div className="flex justify-center gap-4 text-sm font-medium">
                <Link
                  href={project.liveLink}
                  target="_blank"
                  className="underline hover:text-gray-200 text-lg font-medium transition"
                >
                  Live Link
                </Link>
                <span>|</span>
                <Link
                  href={project.detailsLink}
                  className="underline hover:text-gray-200 text-lg font-medium transition"
                >
                  View Details
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;

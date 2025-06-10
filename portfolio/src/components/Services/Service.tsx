"use client";

import { motion } from "framer-motion";
import { FaCode, FaPaintBrush, FaMobileAlt } from "react-icons/fa";

const services = [
  {
    icon: <FaCode />,
    title: "Web Development",
    description:
      "I build fast, scalable, and dynamic websites using modern web technologies like React, Next.js, and Node.js.",
  },
  {
    icon: <FaPaintBrush />,
    title: "Web Design",
    description:
      "I design modern and user-friendly interfaces with attention to usability and visual appeal.",
  },
  {
    icon: <FaMobileAlt />,
    title: "Responsive Web Design",
    description:
      "I ensure your website looks and works great on all devices including desktops, tablets, and mobiles.",
  },
];

const Service = () => {
  return (
    <div className="max-w-6xl mx-auto my-32 px-4 lg:px-0 md:px-0">
      <section className="py-10 text-white">
        <div className="text-center">
          <motion.h2
  initial={{ opacity: 0, y: 40 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true }}
  transition={{ duration: 0.6 }}
  className="text-3xl font-bold mb-10 text-center">
            My <span className="text-[#6C63FF]">Services</span>
          </motion.h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => {
              // Set animation direction from center
              let initialAnimation = { x: 0, y: 0, opacity: 0 };

              if (index === 0) {
                // Center to Left
                initialAnimation = { x: -100, y: 0, opacity: 0 };
              } else if (index === 1) {
                // Bottom to Center (Upward)
                initialAnimation = { x: 0, y: 100, opacity: 0 };
              } else if (index === 2) {
                // Center to Right
                initialAnimation = { x: 100, y: 0, opacity: 0 };
              }

              return (
                <motion.div
                  key={index}
                  initial={initialAnimation}
                  whileInView={{ x: 0, y: 0, opacity: 1 }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  viewport={{ once: true }}
                  className="bg-[#0a0a23] border border-[#6C63FF] p-6 rounded-xl hover:shadow-lg hover:scale-105 transition flex flex-col items-center justify-center"
                >
                  <div className="text-[#6C63FF] text-4xl mb-4">
                    {service.icon}
                  </div>
                  <h3 className="text-xl font-semibold mb-2">
                    {service.title}
                  </h3>
                  <p className="text-sm text-gray-300">{service.description}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Service;

"use client"
import { motion } from 'framer-motion';
const Blog = () => {
    return (
        <div className="max-w-6xl mx-auto my-32 border">
        <motion.h2
  initial={{ opacity: 0, y: 40 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true }}
  transition={{ duration: 0.6 }}
  className="text-3xl font-bold mb-10 text-center text-[#6C63FF]">
            My <span className="text-white"> Blogs</span>
        </motion.h2>
      <motion.p
  initial={{ opacity: 0, y: 40 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true }}
  transition={{ duration: 0.6 }}
  className="text-center text-gray-600 max-w-2xl mx-auto mb-10">
  Dive into insightful articles on web development, design, and modern tech trends. Explore topics by category and stay updated with the latest from my development journey.
</motion.p>
        </div>
    );
};

export default Blog;
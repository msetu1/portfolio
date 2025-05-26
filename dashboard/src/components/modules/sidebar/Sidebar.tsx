"use client";

import Link from "next/link";
import { useState } from "react";
import {
  SquareTerminal,
  Bot,
  X,
  PencilRuler,
  BookOpenText,
  GraduationCap,
  FileText,
  Settings,
  Menu,
  ChevronUp,
  ChevronDown,
} from "lucide-react";

const menuItems = [
  { title: "Dashboard", icon: SquareTerminal, url: "/dashboard" },
  {
    title: "Skills",
    icon: Bot, // you can also use Wrench
    children: [
      { title: "Manage Skills", url: "/dashboard/skills/manageSkills" },
    ],
  },
  {
    title: "Projects",
    icon: PencilRuler,
    children: [
      { title: "Manage Projects", url: "/dashboard/projects/manageProjects" },
    ],
  },
  {
    title: "Blogs",
    icon: BookOpenText,
    children: [
      { title: "Add Blog", url: "/dashboard/blogs/addBlog" },
      { title: "Manage Blogs", url: "/dashboard/blogs/manageBlogs" },
    ],
  },
  {
    title: "Educations",
    icon: GraduationCap,
    children: [
      { title: "Manage Education", url: "/dashboard/educations/manageEducations" },
    ],
  },
  {
    title: "Resumes",
    icon: FileText,
    children: [
      { title: "Manage resumes", url: "/dashboard/resumes/manageResumes" },
    ],
  }
];

export default function Sidebar() {
  const [open, setOpen] = useState(false);
  const [expanded, setExpanded] = useState<string | null>(null);

  return (
    <>
  {/* Mobile Header */}
  <div className="md:hidden flex justify-between items-center px-4 py-3 bg-[#6C63FF] text-white border-b m-0">
    <h1 className="text-xl font-bold">Dashboard</h1>
    <button onClick={() => setOpen(!open)}>
      {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
    </button>
  </div>

  {/* Sidebar */}
  <aside
    className={`bg-white border-r  fixed md:static top-0 left-0 h-screen md:h-full z-50 w-64 transform transition-transform duration-200 ease-in-out m-0 ${
      open ? "translate-x-0" : "-translate-x-full md:translate-x-0"
    }`}
  >
    <div className="bg-[#6C63FF] p-4 border-b border-white">
      <h2 className="text-xl font-semibold text-white">Admin Panel</h2>
    </div>

    <nav className="px-6 space-y-1 text-gray-800 ">
      {menuItems.map((item) =>
        item.children ? (
          <div key={item.title}>
            <button
              onClick={() =>
                setExpanded(expanded === item.title ? null : item.title)
              }
              className="w-full flex justify-between items-center gap-2 p-2 rounded-md hover:bg-[#F3F4F6]"
            >
              <div className="flex items-center gap-2">
                <item.icon className="w-5 h-5 text-[#6C63FF]" />
                <span>{item.title}</span>
              </div>
              {expanded === item.title ? (
                <ChevronUp className="w-4 h-4" />
              ) : (
                <ChevronDown className="w-4 h-4" />
              )}
            </button>
            {/* Child Menu */}
            {expanded === item.title && (
              <div className="ml-8 mt-1 space-y-1">
                {item.children.map((sub) => (
                  <Link
                    key={sub.title}
                    href={sub.url}
                    onClick={() => setOpen(false)}
                    className="block px-2 py-1 rounded hover:bg-gray-200 text-sm"
                  >
                    {sub.title}
                  </Link>
                ))}
              </div>
            )}
          </div>
        ) : (
          <Link
            key={item.title}
            href={item.url}
            onClick={() => setOpen(false)}
            className="flex items-center gap-2 p-2 rounded-md hover:bg-[#F3F4F6]"
          >
            <item.icon className="w-5 h-5 text-[#6C63FF]" />
            <span>{item.title}</span>
          </Link>
        )
      )}
    </nav>
  </aside>

  {/* Overlay on Mobile */}
  {open && (
    <div
      className="fixed inset-0 bg-black/30 z-40  md:hidden"
      onClick={() => setOpen(false)}
    />
  )}
    </>

  );
}

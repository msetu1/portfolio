"use server";
export const allEducations = async () => {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_API}/educations`);
    return res.json();
  } catch (error) {
    console.error("Failed to Education:", error);
    return { success: false, message: "Server error" };
  }
};

export const allProjects = async () => {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_API}/projects`);
    return res.json();
  } catch (error) {
    console.error("Failed to Project:", error);
    return { success: false, message: "Server error" };
  }
};

export const getSingleProject = async (id: string) => {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_API}/projects/${id}`);
    if (!res.ok) {
      throw new Error("Failed to fetch project");
    }
    return res.json();
  } catch (error) {
    console.error("Failed to fetch single project:", error);
    return { success: false, message: "Server error" };
  }
};


export const allResumes = async () => {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_API}/resumes`);
    return res.json();
  } catch (error) {
    console.error("Failed to Resume:", error);
    return { success: false, message: "Server error" };
  }
};

export const allSkills = async () => {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_API}/skills`);
    return res.json();
  } catch (error) {
    console.error("Failed to skill:", error);
    return { success: false, message: "Server error" };
  }
};

/* eslint-disable @typescript-eslint/no-explicit-any */
"use server";

import { revalidateTag } from "next/cache";

export const addProject = async (data: Record<string, unknown>) => {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_BASE_API}/projects/create-project`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
        cache: "no-store",
      }
    );
    revalidateTag("PROJECT");
    const projectInfo = await res.json();
    return projectInfo;
  } catch (error) {
    console.error("Failed to create project:", error);
    return { success: false, message: "Server error" };
  }
};
export const allProjects = async () => {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_API}/projects`, {
      next: {
        tags: ["PROJECT"],
      },
    });
    return res.json();
  } catch (error) {
    console.error("Failed to Project:", error);
    return { success: false, message: "Server error" };
  }
};

// delete Project
export const deleteProject = async (id: string): Promise<any> => {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_BASE_API}/projects/delete-project/${id}`,
      {
        method: "PUT",
        headers: {"Content-Type": "application/json",},
      }
    );
    revalidateTag("PROJECT");
    return res.json();
  } catch (error: any) {
    return Error(error);
  }
};

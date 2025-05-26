/* eslint-disable @typescript-eslint/no-explicit-any */
"use server";

import { revalidateTag } from "next/cache";

export const addResume = async (data: Record<string, unknown>) => {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_BASE_API}/resumes/create-resume`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
        cache: "no-store",
      }
    );
    revalidateTag("RESUME");
    const resumeInfo = await res.json();
    return resumeInfo;
  } catch (error) {
    console.error("Failed to create resume:", error);
    return { success: false, message: "Server error" };
  }
};
export const allResumes = async () => {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_API}/resumes`, {
      next: {
        tags: ["RESUME"],
      },
    });
    return res.json();
  } catch (error) {
    console.error("Failed to Resume:", error);
    return { success: false, message: "Server error" };
  }
};

// delete Resume
export const deleteResume = async (id: string): Promise<any> => {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_BASE_API}/resumes/delete-resume/${id}`,
      {
        method: "PUT",
        headers: {"Content-Type": "application/json",},
      }
    );
    revalidateTag("RESUME");
    return res.json();
  } catch (error: any) {
    return Error(error);
  }
};

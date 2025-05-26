/* eslint-disable @typescript-eslint/no-explicit-any */
"use server";

import { revalidateTag } from "next/cache";

export const addEducation = async (data: Record<string, unknown>) => {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_BASE_API}/educations/create-education`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
        cache: "no-store",
      }
    );
    revalidateTag("EDUCATION");
    const educationInfo = await res.json();
    return educationInfo;
  } catch (error) {
    console.error("Failed to create Education:", error);
    return { success: false, message: "Server error" };
  }
};
export const allEducations = async () => {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_API}/educations`, {
      next: {
        tags: ["EDUCATION"],
      },
    });
    return res.json();
  } catch (error) {
    console.error("Failed to Education:", error);
    return { success: false, message: "Server error" };
  }
};

// delete Education
export const deleteEducation = async (id: string): Promise<any> => {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_BASE_API}/educations/delete-education/${id}`,
      {
        method: "PUT",
        headers: {"Content-Type": "application/json",},
      }
    );
    revalidateTag("Education");
    return res.json();
  } catch (error: any) {
    return Error(error);
  }
};

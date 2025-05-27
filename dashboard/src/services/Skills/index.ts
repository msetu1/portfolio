/* eslint-disable @typescript-eslint/no-explicit-any */
"use server";

import { revalidateTag } from "next/cache";

export const addSkill = async (data: Record<string, unknown>) => {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_BASE_API}/skills/create-skill`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
        cache: "no-store",
      }
    );
    console.log(process.env.NEXT_PUBLIC_BASE_API);
    revalidateTag("SKILL");
    const skillInfo = await res.json();
    return skillInfo;
  } catch (error) {
    console.error("Failed to create skill:", error);
    return { success: false, message: "Server error" };
  }
};
export const allSkills = async () => {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_API}/skills`, {
      next: {
        tags: ["SKILL"],
      },
    });
    return res.json();
  } catch (error) {
    console.error("Failed to skill:", error);
    return { success: false, message: "Server error" };
  }
};

// delete Skill
export const deleteSkill = async (id: string): Promise<any> => {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_BASE_API}/skills/delete-skill/${id}`,
      {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
      }
    );
    revalidateTag("SKILL");
    return res.json();
  } catch (error: any) {
    return Error(error);
  }
};

/* eslint-disable @typescript-eslint/no-explicit-any */
"use server"

import { FieldValues } from "react-hook-form";

export const registerUser = async (userData: FieldValues) => {
  console.log("Sending to backend:", userData); // 👈 Log here

  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_API}/register`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(userData),
    });

    if (!res.ok) throw new Error("Failed to register");
    return await res.json();
  } catch (error: any) {
    console.error("Server Error:", error.message);
    throw new Error(error.message);
  }
};

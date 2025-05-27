/* eslint-disable @typescript-eslint/no-unused-vars */
"use client";

import type React from "react";
import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { toast } from "sonner";
import { loginUser } from "@/services/AuthService";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const loginData = {
      email,
      password,
    };
    // console.log(loginData);

    try {
      const result = await loginUser(loginData);
      // console.log(result);
      if (result?.success) {
        toast.success("Logged in successfully!");
        router.push("/dashboard");
      } else {
        toast.error(result?.message, { duration: 2000 });
      }
    } catch (err) {
      toast.error("Something went wrong", { duration: 2000 });
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center  px-4 py-12">
      <div className="w-full max-w-md  p-8 rounded-lg shadow-md">
        <h2 className="text-3xl font-bold text-center  mb-6">Please  <span className="text-[#6C63FF]">Login Now</span></h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Email */}
          <Input
            type="email"
            placeholder="Enter Email "
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full px-4 py-2 border border-[#6C63FF] rounded focus:outline-none focus:ring-2 focus:ring-[#6C63FF]"
            
          />

          {/* Password */}
          <Input
            type="password"
            placeholder="Password "
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full px-4 py-2 border border-[#6C63FF] rounded focus:outline-none focus:ring-2 focus:ring-[#6C63FF]"
          />
          
          <Button
            type="submit"
            className="w-full bg-[#6C63FF] hover:bg-[#5a52e0] text-white py-2 rounded transition"
          >
            Login
          </Button>
        </form>
      </div>
    </div>
  );
}
"use client";
import Link from "next/link";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";

const SignUpPage = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");

  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Your form handling logic here

    if (!firstName || !lastName || !email || !password) {
      setError("All fields are necessary.");
      return;
    }

    if (password !== confirmPassword) {
      setError("passwords do not match");
      return;
    }

    try {
      const res = await fetch("api/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          firstName,
          lastName,
          email,
          password,
        }),
      });

      if (res.ok) {
        const form = e.target as HTMLFormElement; // Explicitly cast to HTMLFormElement;
        form.reset();
        router.push("/");
        toast.success("Successfully signed up");
      } else {
        console.log("User registration failed.");
      }
    } catch (error) {
      console.log("Error during registration: ", error);
    }

    // After handling the form submission, navigate to the login page
    router.push("/login");
  };

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="flex items-center justify-center h-auto bg-white rounded-lg sm:w-[30%]">
        <div className="min-w-md w-full shadow-lg p-5 rounded-lg border-t-4 border-green-400">
          <h1 className="text-3xl font-bold my-4 text-center">Sign up now</h1>

          <form className="flex flex-col gap-3" onSubmit={handleSubmit}>
            <input
              type="text"
              placeholder="First Name"
              className=" border-b border-[#66666690] outline-none pl-3 p-5"
              onChange={(e) => setFirstName(e.target.value)}
            />
            <input
              type="text"
              placeholder="Last Name"
              className=" border-b border-[#66666690] outline-none pl-3 p-5"
              onChange={(e) => setLastName(e.target.value)}
            />
            <input
              type="text"
              placeholder="Email"
              className=" border-b border-[#66666690] outline-none pl-3 p-5"
              onChange={(e) => setEmail(e.target.value)}
            />
            <input
              type="password"
              placeholder="Password"
              className="border-b border-[#66666690] outline-none pl-3 p-5"
              onChange={(e) => setPassword(e.target.value)}
            />
            <input
              type="password"
              placeholder="Confirm Password"
              className="border-b border-[#66666690] outline-none pl-3 p-5"
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
            <button className="bg-green-600 text-white font-bold cursor-pointer px-6 py-2 rounded-lg">
              Sign up
            </button>
            <div className="mt-5 text-center text-sm">
              Already have an account?
            </div>{" "}
            <Link href="/login" className="underline text-sm text-center">
              <span>Sign in</span>
            </Link>
          </form>
        </div>
      </div>
    </main>
  );
};

export default SignUpPage;

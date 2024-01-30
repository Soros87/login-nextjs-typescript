"use client";
import Image from "next/image";
import React, { useState } from "react";
import Link from "next/link";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";

// Assume ResponseType is the type you want to assign to res
type ResponseType = {
  error?: string;
  data?: any;
};

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Your form handling logic here

    // Define a custom type for the response of the signIn function
    try {
      const res = (await signIn("credentials", {
        email,
        password,
        redirect: false,
      })) as ResponseType;

      if (res.error) {
        setError("Invalid Credentials");
        toast.error(error);
        return;
      }

      router.replace("/");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="flex items-center justify-center h-auto bg-white rounded-lg sm:w-[30%]">
        <div className="min-w-md w-full shadow-lg p-5 rounded-lg border-t-4 border-green-400">
          <h1 className="text-3xl font-bold my-4 text-center">Login</h1>

          <form className="flex flex-col gap-3" onSubmit={handleSubmit}>
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
            <div className="m-3 text-right text-sm">Forgot password?</div>
            <button className="bg-green-600 text-white font-bold cursor-pointer px-6 py-2 rounded-lg">
              Login
            </button>
            <div className="mt-5 mb-5 text-sm text-center">
              Or Sign in using
            </div>{" "}
            <button className="flex gap-4 p-4 ring-2 ring-orange-100 rounded-md justify-center items-center">
              <Image
                src="/google.png"
                alt=""
                width={40}
                height={40}
                className="object-contain"
              />
              <span>Sign in with Google</span>
            </button>
            <button className="flex gap-4 p-4 ring-2 ring-blue-100 rounded-md justify-center items-center">
              <Image
                src="/facebook.png"
                alt=""
                width={40}
                height={40}
                className="object-contain"
              />
              <span>Sign in with Facebook</span>
            </button>
            <div className="mt-5 text-center text-sm">
              Don't have an account?
            </div>{" "}
            <Link href="/signup" className="underline text-sm text-center">
              <span>Signup</span>
            </Link>
          </form>
        </div>
      </div>
    </main>
  );
};

export default LoginPage;

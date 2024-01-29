import Link from "next/link";
import React from "react";

const SignUpPage = () => {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="flex items-center justify-center h-auto bg-white rounded-lg">
        <div className="min-w-md w-full shadow-lg p-5 rounded-lg border-t-4 border-green-400">
          <h1 className="text-xl font-bold my-4 text-center">Sign up now</h1>

          <form className="flex flex-col gap-3">
            <input
              type="text"
              placeholder="First Name"
              className=" border-b border-[#66666690] outline-none pl-3 p-5"
            />
            <input
              type="text"
              placeholder="Last Name"
              className=" border-b border-[#66666690] outline-none pl-3 p-5"
            />
            <input
              type="text"
              placeholder="Email"
              className=" border-b border-[#66666690] outline-none pl-3 p-5"
            />
            <input
              type="password"
              placeholder="Password"
              className="border-b border-[#66666690] outline-none pl-3 p-5"
            />
            <input
              type="password"
              placeholder="Confirm Password"
              className="border-b border-[#66666690] outline-none pl-3 p-5"
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

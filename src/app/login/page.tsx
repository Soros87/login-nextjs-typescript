import Image from "next/image";
import React from "react";
import Link from "next/link";

const LoginPage = () => {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="flex items-center justify-center h-auto bg-white rounded-lg">
        <div className="min-w-md w-full shadow-lg p-5 rounded-lg border-t-4 border-green-400">
          <h1 className="text-xl font-bold my-4 text-center">Login</h1>

          <form className="flex flex-col gap-3">
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

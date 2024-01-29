import Image from "next/image";
import React from "react";

const LoginPage = () => {
  return (
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
          <div className="mt-5 mb-5 text-sm text-center">Or Sign up using</div>{" "}
          <button className="flex gap-4 p-4 ring-2 ring-orange-100 rounded-md">
            <Image
              src="/google.png"
              alt=""
              width={40}
              height={40}
              className="object-contain"
            />
            <span>Sign in with Google</span>
          </button>
          <button className="flex gap-4 p-4 ring-2 ring-blue-100 rounded-md">
            <Image
              src="/facebook.png"
              alt=""
              width={40}
              height={40}
              className="object-contain"
            />
            <span>Sign in with Facebook</span>
          </button>
          <div className="mt-5 text-center text-sm">Don't have an account?</div>{" "}
          <span className="underline text-sm text-center">Signup</span>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;

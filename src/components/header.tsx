"use client";
import Image from "next/image";
import React from "react";
import { signOut, useSession } from "next-auth/react";
import Link from "next/link";
import { FaGithubSquare } from "react-icons/fa";

const Header = () => {
  const { status, data: session } = useSession();

  return (
    <header className="z-[999] relative flex justify-between items-center">
      <div className="flex flex-row fixed top-0 left-0 right-0 h-[4.5rem] w-full rounded-none border border-white border-opacity-40 bg-white bg-opacity-80 shadow-lg shadow-black/[0.03] backdrop-blur-[0.5rem] justify-center items-center">
        This is a login-demo page. Try to sign up and login with your email
        address. Get Source code (Github icon)
        <a
          href="https://github.com/Soros87/login-nextjs-typescript"
          target="_blank"
          className=" p-4 text-gray-700 text-[1.3rem] flex items-center gap-2 rounded-full borderBlack outline-none focus:scale-110 hover:scale-110 active:scale-105 transition"
        >
          {" "}
          <FaGithubSquare />
        </a>
        <div className="fixed top-0 right-10 h-[4.5rem] flex items-center gap-5">
          {status === "authenticated" ? (
            <>
              <div className="pl-3 flex w-10">
                <span className="text-sm">
                  Welcome{" "}
                  {session?.user?.name?.split(" ")[0] ||
                    session?.user?.email?.split("@")[0]}
                </span>
              </div>
              <div className="ml-9">
                <Image
                  src="/userprofile.png"
                  alt=""
                  width={40}
                  height={40}
                  className="object-contain"
                />
              </div>
              <button
                title="Log Out"
                className="text-sm text-ascent-1 px-4 md:px-6 py-1 md:py-2 border border-[#666] rounded-full"
                onClick={() => signOut()}
              >
                Logout
              </button>
            </>
          ) : (
            <Link href="/login">
              <button
                title="Login"
                className="text-sm text-ascent-1 px-4 md:px-6 py-1 md:py-2 border border-[#666] rounded-full"
              >
                Login
              </button>
            </Link>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;

import Image from "next/image";
import React from "react";

const Header = () => {
  return (
    <header className="z-[999] relative flex justify-between items-center">
      <div className="flex flex-row fixed top-0 left-0 right-0 h-[4.5rem] w-full rounded-none border border-white border-opacity-40 bg-white bg-opacity-80 shadow-lg shadow-black/[0.03] backdrop-blur-[0.5rem]">
        <div className="fixed top-0 right-10 h-[4.5rem] flex items-center gap-5">
          Welcome Tim
          <Image
            src="/userprofile.png"
            alt=""
            width={40}
            height={40}
            className="object-contain"
          />
          <button
            title="Log Out"
            className="text-sm text-ascent-1 px-4 md:px-6 py-1 md:py-2 border border-[#666] rounded-full"
          >
            Logout
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;

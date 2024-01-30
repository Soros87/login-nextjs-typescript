import Header from "@/components/header";
import { FaGithubSquare } from "react-icons/fa";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center p-24">
      <Header />
      <div className="flex flex-col text-center items-center mt-4 ">
        This is a login-demo page. Try to sign up and login with your email
        address. Get Source code
        <a
          href="https://github.com/Soros87/login-nextjs-typescript"
          target="_blank"
          className=" p-4 text-gray-700 text-[2rem] flex items-center gap-2 rounded-full borderBlack outline-none focus:scale-110 hover:scale-110 active:scale-105 transition"
        >
          {" "}
          <FaGithubSquare />
        </a>
      </div>
    </main>
  );
}

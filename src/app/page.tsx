import Image from "next/image";
import { HiMiniArrowRight } from "react-icons/hi2";
import {
  HiOutlineSparkles,
  HiOutlineShieldCheck,
  HiOutlineBell,
} from "react-icons/hi";

export default function Home() {
  return (
    <main className="relative bg-gradient-to-br w-full from-sky-50 to-white min-h-screen flex items-center justify-center overflow-hidden">
      {/* Decorative Background Lines */}
      <div className="absolute inset-0">
        <div className="h-full w-full bg-gradient-to-br from-transparent via-sky-100 to-transparent">
          <div className="absolute top-0 left-0 h-full w-full bg-opacity-20 bg-gradient-to-br from-transparent via-sky-300 to-transparent"></div>
        </div>

        {/* Background Elements */}
        <div className="absolute rounded-full border-blue-500 border-4 bg-white w-20 h-20 flex items-center justify-center text-blue-500 font-bold text-lg shadow-lg left-10 top-10 animate-bounce">
          100%
        </div>

        <div className="absolute bg-white shadow-lg rounded-lg p-4 w-60 top-64 right-52 animate-fade-in">
          <p className="text-gray-700 font-semibold">New Update Available</p>
          <p className="text-gray-500 text-sm mt-1">
            A new version of the UI Kit is now available. Update now to get the
            latest features.
          </p>
        </div>
        <div className="absolute bg-gradient-to-r from-green-400 to-teal-500 text-white p-2 rounded-lg shadow-lg w-52 top-64 left-16 animate-slide-in-left">
          <p className="font-semibold">Success</p>
          <p className="text-sm">Your action was successful!</p>
        </div>
        <div className="absolute bg-red-400 text-white p-4 rounded-lg shadow-lg w-60 bottom-20 right-10 animate-slide-in-right">
          <p className="font-semibold">Alert</p>
          <p className="text-sm">Something went wrong!</p>
        </div>

        {/* Additional Background Elements */}
        <div className="absolute bg-blue-500 text-white p-2 rounded-full shadow-lg bottom-32 left-8 flex items-center gap-2 animate-pulse">
          <HiOutlineSparkles size={20} />
          <p className="font-semibold">Feature</p>
        </div>
        <div className="absolute bg-yellow-400 text-white p-2 rounded-full shadow-lg top-20 right-2/4 flex items-center gap-2 animate-pulse">
          <HiOutlineShieldCheck size={20} />
          <p className="font-semibold">Security</p>
        </div>
        <div className="absolute bg-indigo-500 text-white p-2 rounded-full shadow-lg top-24 right-16 flex items-center gap-2 animate-pulse">
          <HiOutlineBell size={20} />
          <p className="font-semibold">Notification</p>
        </div>
      </div>

      {/* Content */}
      <div className="relative z-10 flex justify-between w-full max-w-7xl px-6 lg:px-8">
        <div className="flex justify-center items-center flex-1">
          <div className="animate-fade-in-down">
            <p className="text-sky-500 font-bold text-left text-lg">UI Kit</p>
            <p className="text-6xl font-extrabold mt-2 -ml-1 leading-tight text-gray-800">
              Tailwind CSS UI
            </p>
            <p className="text-2xl font-medium mt-4 text-gray-600 max-w-md">
              Newly updated Tailwind CSS UI kit with a library of variables.
            </p>
            <div className="flex gap-2 -ml-1 flex-wrap mt-8">
              {[
                "Cards",
                "Dropdowns",
                "Profile",
                "Avatar",
                "Navbar",
                "Lists",
              ].map((item: string) => (
                <div
                  key={item}
                  className="py-2 px-6 font-medium text-white bg-gradient-to-r from-sky-500 to-cyan-500 shadow-md border-2 border-transparent transition-all duration-500 hover:bg-transparent hover:bg-none hover:text-sky-900 hover:border-sky-900 rounded-full text-center animate-fade-in"
                >
                  {item}
                </div>
              ))}

              <p className="font-bold italic text-sky-500 py-1 border-2 border-transparent text-lg px-4 animate-fade-in">
                + more
              </p>
            </div>
            <div className="flex mt-10 gap-4 lg:gap-8 animate-fade-in-up">
              <button className="py-4 flex gap-4 items-center text-xl px-8 bg-gradient-to-r from-cyan-500 to-sky-500 rounded-md font-semibold text-white shadow-lg hover:shadow-2xl transform hover:scale-105 transition-transform duration-300">
                <span>Get Started</span>
                <HiMiniArrowRight size={25} />
              </button>
              <button className="py-4 flex gap-4 items-center text-xl px-8 bg-transparent border-2 border-sky-900 rounded-md font-semibold text-sky-900 hover:text-white shadow-lg hover:bg-cyan-500 hover:border-transparent transform hover:scale-105 transition-transform duration-300">
                <span>Learn More</span>
                <HiMiniArrowRight size={25} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

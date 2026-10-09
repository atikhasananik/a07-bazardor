import { ChevronDown, Undo2, UserRound } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const NavRightSection = () => {
  return (
    <>
      {false ? (
        <div className="relative px-3">
          <details>
            <summary className="flex gap-3">
              <div className="flex items-center gap-2.5 cursor-pointer hover:opacity-90 transition-opacity">
                <div className="w-10 h-10 rounded-xl overflow-hidden bg-gray-200 relative">
                  <Image
                    width={50}
                    height={50}
                    src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=150"
                    alt="Rezwan Profile"
                    className="w-full h-full object-cover"
                  />
                </div>
                <span className="text-sm font-semibold text-gray-800">
                  Rezwan
                </span>
                <ChevronDown className="w-3.5 h-3.5 text-gray-500 ml-0.5" />
              </div>
            </summary>
            <ul className="rounded-lg p-4 px-6 w-60 absolute space-y-2  shadow-sm border border-gray-200 bg-white text-black text-sm -bottom-35 right-0 z-100">
              <li className="text-gray-400 flex flex-col gap-0 ">
                <div className="text-xl font-semibold leading-4">name</div>
                <div>email@gmail.com</div>
              </li>
              <li>
                <Link
                  href={"/profile"}
                  className="flex items-center gap-1 text-black"
                >
                  <span className="text-[rgb(0,0,255)]">
                    <UserRound size={15} fill="rgb(0,0,255)"></UserRound>{" "}
                  </span>

                  <span>আমার প্রোফাইল</span>
                </Link>
              </li>
              <li className="text-red-500">
                <Link href={"/"} className="flex gap-2">
                  <span className="rotate-x-180 text-[8px] ">
                    <Undo2 size={15} />
                  </span>{" "}
                  <span>সাইন আউট</span>
                </Link>
              </li>
            </ul>
          </details>
        </div>
      ) : (
        <div className="flex w-50 items-center gap-4">
          <Link
            href="/signin"
            className="text-sm font-bold text-gray-900 hover:text-[#0c8a43] transition-colors"
          >
            <span>সাইন ইন</span>
          </Link>
          {/* Sign Up Button */}
          <Link
            href="/signup"
            className="bg-[#0c8a43] hover:bg-[#0a7538] text-white text-sm font-bold px-5 py-3 rounded-xl shadow-md transition-all active:scale-[0.98]"
          >
            <span>সাইন আপ</span>
          </Link>
        </div>
      )}
    </>
  );
};

export default NavRightSection;

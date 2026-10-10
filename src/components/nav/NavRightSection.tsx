"use client";

import { signOut, useSession } from "@/lib/auth-client";
import { RunSuccessToast } from "@/utils/toastFunction";
import { boolean } from "better-auth";
import { ChevronDown, TextAlignJustify, Undo2, UserRound } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";

const NavRightSection = () => {
  const [menuClick, setMenuClick] = useState<boolean>(false);
  const { data: session, isPending } = useSession();
  const nameLength = session?.user.name.split(" ").length as number;
  let showName: string;
  if (nameLength > 3) {
    showName = session?.user.name.split(" ").splice(0, 3).join(" ") as string;
  } else {
    showName = session?.user.name as string;
  }

  if (isPending) {
    return <span className="loading bg-black loading-dots loading-xl"></span>;
  }

  const handleMenuClick = () => {
    setMenuClick(!menuClick);
  };

  return (
    <>
      {session ? (
        <div className="relative md:w-100 px-3">
          <details>
            <summary className="flex gap-3  justify-end">
              <div className="flex items-center gap-2.5 fcursor-pointer hover:opacity-90 transition-opacity">
                <div className="w-10 h-10 rounded-xl overflow-hidden bg-gray-200 relative">
                  {session?.user?.image ? (
                    <Image
                      src={session?.user?.image as string}
                      alt={`${session?.user.name as string}s img`}
                      className="w-full h-full object-cover"
                      width={60}
                      height={60}
                    />
                  ) : (
                    <div className="font-semibold text-2xl flex items-center justify-center w-full h-full text-green-700">
                      {session?.user?.name[0] as string}
                    </div>
                  )}
                </div>
                <span className="text-sm max-sm:hidden  font-semibold text-gray-800">
                  {showName}
                </span>
                <ChevronDown className="w-3.5 h-3.5 text-gray-500 ml-0.5" />
              </div>
            </summary>
            <ul className="rounded-lg p-4 px-6 w-60 absolute space-y-2  shadow-sm border border-gray-200 bg-white text-black text-sm -bottom-35 right-0 z-100">
              <li className="text-gray-400 flex flex-col gap-0 ">
                <div className="text-xl font-semibold leading-4">
                  {showName}
                </div>
                <div>{session?.user.email}</div>
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
                <Link
                  onClick={() => {
                    signOut();
                    RunSuccessToast("সফলভাবে সাইন আউট হয়েছে।");
                  }}
                  href={"/"}
                  className="flex gap-2"
                >
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
        <>
          <div onClick={handleMenuClick} className="text-black">
            <TextAlignJustify />
          </div>
          <div
            className={`flex ${menuClick || "max-sm:hidden"}  flex-col  sm:flex-row max-sm:bg-white max-sm:border border-gray-400 max-sm:shadow-2xl py-2 px-2 rounded-xl max-sm:absolute right-2 max-sm:w-40 top-14 z-100 w-50 items-center gap-4`}
          >
            <Link
              onClick={() => setMenuClick(false)}
              href="/signin"
              className="text-sm font-bold text-gray-900 hover:text-[#0c8a43] transition-colors"
            >
              <span>সাইন ইন</span>
            </Link>
            {/* Sign Up Button */}
            <Link
              onClick={() => setMenuClick(false)}
              href="/signup"
              className="bg-[#0c8a43] hover:bg-[#0a7538] text-white text-sm font-bold px-5 py-3 rounded-xl shadow-md transition-all active:scale-[0.98]"
            >
              <span>সাইন আপ</span>
            </Link>
          </div>
        </>
      )}
    </>
  );
};

export default NavRightSection;

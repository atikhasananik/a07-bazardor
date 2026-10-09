import Image from "next/image";
import { ShoppingCart, ChevronDown,  UserRound } from "lucide-react";
import Categories from "./Categories";
import { getCategoryData } from "@/utils/fetchData";
import { getDate } from "@/utils/utilsFuntion";
import Link from "next/link";
import NavRightSection from "./NavRightSection";

export default async function Navbar() {
  let categoryData;
  try {
    categoryData = await getCategoryData();
  } catch (error) {
    console.log(error);
  }
  const date = getDate();
  if (!categoryData) {
    return null;
  }

  return (
    <div>
      <header className="w-full  border-b bg-[#f9fbf9] border-gray-100  font-sans">
        {/* Top Header Row */}
        <div className=" px-6 py-3 container mx-auto flex items-center justify-between">
          {/* Brand / Logo Section */}
          <div className="flex w-full items-center gap-3">
            <div className="w-12 h-12 bg-[#0c8a43] rounded-2xl flex items-center justify-center text-white shadow-sm">
              <Link href={"/"}>
                <ShoppingCart className="w-6 h-6 stroke-[2.2]" />
              </Link>
            </div>
            <div>
              <h1 className="text-xl font-extrabold text-gray-900 leading-tight tracking-wide">
                বাজার দর
              </h1>
              <p className="text-xs text-gray-500 font-medium mt-0.5">{date}</p>
            </div>
          </div>

          {/* User Profile Section */}
         <NavRightSection></NavRightSection>
        </div>

        {/* Bottom Category Bar */}
        <Categories categoryData={categoryData}></Categories>
      </header>
    </div>
  );
}

import Image from "next/image";
import { ShoppingCart, ChevronDown } from "lucide-react";
import Categories from "./Categories";
import { getCategoryData } from "@/utils/fetchData";
import { getDate } from "@/utils/utilsFuntion";
import Link from "next/link";

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
            <span className="text-sm font-semibold text-gray-800">Rezwan</span>
            <ChevronDown className="w-3.5 h-3.5 text-gray-500 ml-0.5" />
          </div>
        </div>

        {/* Bottom Category Bar */}
        <Categories categoryData={categoryData}></Categories>
      </header>
    </div>
  );
}

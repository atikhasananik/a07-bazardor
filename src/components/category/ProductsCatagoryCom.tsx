"use client";

import { useContext } from "react";
import SortFunctionality from "../common/SortFunctionality";
import ProductsCard from "./ProductsCard";
import { ICategory, IProduct } from "@/types/type";
import { ContextAPI, ContextValue } from "../contextAPI/ContextAPI";

interface IProductsCatagoryComProps {
  data: {
    exiest: ICategory;
    categoryID: ICategory[];
    singleCategory: IProduct[];
    categoryId: string;
  };
}

const ProductsCatagoryCom = ({ data }: IProductsCatagoryComProps) => {
  const { exiest, categoryId, singleCategory } = data;
  const contextData = useContext(ContextAPI);
  const { sortValueCat } = contextData as ContextValue;

  const sortArry =
    sortValueCat === "ডিফল্ট"
      ? singleCategory
      : sortValueCat === "দাম: কম থেকে বেশি"
        ? [...singleCategory].sort((a, b) => {
            return a.today - b.today;
          })
        : [...singleCategory].sort((a, b) => {
            return b.today - a.today;
          });

  return (
    <div>
      <div
        className="w-full min-h-screen bg-[#f3f6f3] p-6 md:p-12 font-sans"
        data-category-id={categoryId}
      >
        <div className="max-w-6xl mx-auto space-y-6">
          {/* Top Header Card */}
          <div className="bg-[#f8faf8] border border-[#eaefea] rounded-2xl p-6 md:p-8 flex items-center gap-4 shadow-sm">
            <div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center text-3xl shadow-xs flex-0">
              {exiest?.icon}
            </div>
            <div>
              <h1 className="text-2xl md:text-3xl font-extrabold text-[#1a201c] tracking-tight">
                {exiest?.nameBn}
              </h1>
              <p className="text-sm text-gray-500 font-medium mt-1">
                {singleCategory ? singleCategory.length : null}টি পণ্যের আজকের
                দাম ও পরিবর্তন
              </p>
            </div>
          </div>

          {/* Filter and Count Row */}
          <div className="flex items-center justify-between text-xs md:text-sm text-gray-600 px-1 pt-2">
            <span className="font-medium text-gray-700">
              মোট {singleCategory ? singleCategory.length : null}টি পণ্য দেখানো
              হচ্ছে
            </span>

            <div className="flex items-center gap-2">
              <span className="text-gray-500 font-medium">সাজান</span>
              <SortFunctionality></SortFunctionality>
            </div>
          </div>

          {/* Product Cards Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5">
            <ProductsCard categoryData={sortArry}></ProductsCard>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductsCatagoryCom;

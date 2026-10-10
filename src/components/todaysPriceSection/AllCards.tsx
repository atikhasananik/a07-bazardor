"use client"

import ProductsCard from "../category/ProductsCard";
import SortFunctionality from "../common/SortFunctionality";
import { useContext } from "react";
import { ContextAPI, ContextValue } from "../contextAPI/ContextAPI";
import { IProduct } from "@/types/type";
import { RunSuccessToast } from "@/utils/toastFunction";

const AllCards = ({ productData }: { productData: IProduct[] }) => {
  const data = useContext(ContextAPI);
  const {sortValue} = data as ContextValue

 
  const sortArry =
    sortValue === "ডিফল্ট"
      ? productData
      : sortValue === "দাম: কম থেকে বেশি"
        ? [...productData].sort((a, b) => {
            return a.today - b.today;
          })
        : [...productData].sort((a, b) => {
            return b.today - a.today;
          });

  return (
    <div id="সব-পণ্য" className="mx-4 my-20 scroll-m-45">
      <div className="flex items-center justify-between gap-3">
        <div className="mb-4">
          <h1 className="f text-3xl font-semibold ">সব পণ্য</h1>
          <p className="text-gray-500">{`মোট ${productData.length}টি পণ্য দেখানো হচ্ছে`}</p>
        </div>
        <div className="flex gap-1 items-center">
          <p className="text-gray-500">সাজান</p>
          <SortFunctionality></SortFunctionality>
        </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
        <ProductsCard categoryData={sortArry}></ProductsCard>
      </div>
    </div>
  );
};

export default AllCards;

"use client";

import { useContext } from "react";
import { ContextAPI, ContextValue } from "../contextAPI/ContextAPI";

import { usePathname } from "next/navigation";

type SortValue = "ডিফল্ট" | "দাম: কম থেকে বেশি" | "দাম: বেশি থেকে কম";

const SortFunctionality = () => {
  const pathname = usePathname(); // e.g. "/farm/66016e78"

  const data = useContext(ContextAPI);
  const { setSetsortValue, sortValue, setSetsortValueCat, sortValueCat } =
    data as ContextValue;

  const handleClick = (value: SortValue) => {
    if (pathname === "/") {
      setSetsortValue(value);
    } else {
      setSetsortValueCat(value);
    }
  };

 
  return (
    <div className="">
      <select
        value={pathname==="/"?sortValue:sortValueCat}
        onChange={(e) => {
          handleClick(e.target.value as SortValue);
        }}
        className="select bg-white shadow-lg border border-gray-200 w-50 max-sm:w-35"
      >
        <option value="ডিফল্ট">ডিফল্ট</option>
        <option value="দাম: কম থেকে বেশি">দাম: কম থেকে বেশি</option>
        <option value="দাম: বেশি থেকে কম">দাম: বেশি থেকে কম</option>
      </select>
    </div>
  );
};

export default SortFunctionality;

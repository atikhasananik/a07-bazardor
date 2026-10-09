"use client";

import {
  createContext,
  useState,
  type ReactNode,
  type Dispatch,
  type SetStateAction,
} from "react";

type SortValue = "ডিফল্ট" | "দাম: কম থেকে বেশি" | "দাম: বেশি থেকে কম";

export type ContextValue = {
  sortValue: SortValue;
  setSetsortValue: Dispatch<SetStateAction<SortValue>>;
  sortValueCat: SortValue;
  setSetsortValueCat: Dispatch<SetStateAction<SortValue>>;
  categoryClicked: string;
  setcategoryClicked: Dispatch<SetStateAction<string>>;
};

export const ContextAPI = createContext<ContextValue | null>(null);

const ContextAPIProvider = ({ children }: { children: ReactNode }) => {
  const [sortValue, setSetsortValue] = useState<SortValue>("ডিফল্ট");
  const [sortValueCat, setSetsortValueCat] = useState<SortValue>("ডিফল্ট");
  const [categoryClicked, setcategoryClicked] = useState<string>("");

  const valueObj = {
    sortValue,
    setSetsortValue,
    sortValueCat,
    setSetsortValueCat,
    categoryClicked,
    setcategoryClicked,
  };
  return <ContextAPI.Provider value={valueObj}>{children}</ContextAPI.Provider>;
};

export default ContextAPIProvider;

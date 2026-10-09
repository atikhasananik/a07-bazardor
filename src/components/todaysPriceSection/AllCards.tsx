import React from "react";

import { getAllProducts } from "@/utils/fetchData";
import ProductsCard from "../category/ProductsCard";

const AllCards = async () => {
  const productData = await getAllProducts();

  return (
    <div id="সব-পণ্য" className="mx-4 my-20 scroll-m-45">
      <div className="mb-4">
        <h1 className="f text-3xl font-semibold ">সব পণ্য</h1>
        <p className="text-gray-500">{`মোট ${productData.length}টি পণ্য দেখানো হচ্ছে`}</p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
        <ProductsCard categoryData={productData}></ProductsCard>
      </div>
    </div>
  );
};

export default AllCards;

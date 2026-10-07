import React from "react";
import { FaSortDown } from "react-icons/fa";
import ProductCard from "../common/ProductCard";
import { getAllProducts } from "@/utils/fetchData";

const AllCards = async () => {
  const productData = await getAllProducts();

  return (
    <div className="mx-4 my-20">
      <h1 className="flex gap-2 text-3xl font-semibold my-5">সব পণ্য</h1>
<p>{`মোট ${productData.length}টি পণ্য দেখানো হচ্ছে`}</p>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
        {productData.map((product) => {
          return <ProductCard key={product.id} product={product}></ProductCard>;
        })}
      </div>
    </div>
  );
};

export default AllCards;

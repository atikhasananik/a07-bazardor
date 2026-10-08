import React from "react";
import { FaSortUp } from "react-icons/fa";
import { getAllProducts } from "@/utils/fetchData";
import ProductsCard from "../category/ProductsCard";

const PriceUpSection = async () => {
  const productData = await getAllProducts();

  const mostPriceUpProduct = [...productData]
    .filter((product) => {
      return product.change.dir === "up";
    })
    .sort((a, b) => {
      return b.change.pct - a.change.pct;
    })
    .slice(0, 6);

  return (
    <div className="mx-4">
      <h1 className="flex gap-2 text-3xl font-semibold my-5">
        <span className="flex text-3xl text-red-500  pt-2">
          <FaSortUp />
        </span>
        আজ দাম বেড়েছে
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
       <ProductsCard categoryData={mostPriceUpProduct}></ProductsCard>
      </div>
    </div>
  );
};

export default PriceUpSection;

import React from "react";
import { FaSortDown } from "react-icons/fa";
import ProductCard from "../common/ProductCard";
import { getAllProducts } from "@/utils/fetchData";

const PriceDownSection = async () => {
  const productData = await getAllProducts();

  const mostPriceDownProduct = [...productData]
    .filter((product) => {
      return product.change.dir === "down";
    })
    .sort((a, b) => {
      return b.change.pct - a.change.pct;
    })
    .slice(0, 6);

  return (
    <div className="mx-4 my-20">
      <h1 className="flex gap-2 text-3xl font-semibold my-5">
        <span className="flex text-3xl text-green-500  pb-3">
          <FaSortDown />
        </span>
        আজ দাম কমেছে
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
        {mostPriceDownProduct.map((product) => {
          return <ProductCard key={product.id} product={product}></ProductCard>;
        })}
      </div>
    </div>
  );
};

export default PriceDownSection;

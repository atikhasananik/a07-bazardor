import React from "react";
import ProductCard from "../common/ProductCard";
import { IProduct } from "@/types/type";

interface IProductsCardProps {
categoryData: IProduct[];
}

const ProductsCard = ({ categoryData }: IProductsCardProps) => {
  return (
    <>
      {categoryData.map((product) => {
        return <ProductCard key={product.id} product={product}></ProductCard>;
      })}
    </>
  );
};

export default ProductsCard;

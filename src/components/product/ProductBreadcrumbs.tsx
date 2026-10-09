import { IProduct } from "@/types/type";
import Link from "next/link";
import React from "react";
interface IProductBreadcrumbsProps {
  productData: IProduct;
}
const ProductBreadcrumbs = ({ productData }: IProductBreadcrumbsProps) => {
  return (
    <div className="breadcrumbs text-sm">
      <ul>
        <li>
          <Link href={"/"}>হোম</Link>
        </li>
        <li>
          <Link href={`/category/${productData.category}`}>
            {productData.categoryNameBn}
          </Link>
        </li>
        <li>{productData.nameBn}</li>
      </ul>
    </div>
  );
};

export default ProductBreadcrumbs;

"use client";

import { IProduct } from "@/types/type";
import React from "react";

interface ProductCardProps {
  product:IProduct
}

export default function ProductCard({product}: ProductCardProps) {
  return (
    <div className="w-full hover:border hover:border-green-500 hover:shadow-xl transition-all duration-300 bg-white rounded-3xl p-5 border border-gray-100 shadow-[0_2px_10px_rgba(0,0,0,0.02)] font-sans">
      {/* Header Row: Icon + Title & Unit */}
      <div className="flex items-center gap-3.5 mb-5">
        {/* Rounded Icon Box */}
        <div className="w-14 h-14 bg-[#f3f7f4] rounded-2xl flex items-center justify-center text-2xl flex-shrink-0">
          {product.image}
        </div>

        {/* Title and Unit */}
        <div>
          <h3 className="text-xl font-extrabold text-gray-900 tracking-tight leading-tight">
            {product.nameBn}
          </h3>
          <p className="text-xs text-gray-500 font-medium mt-0.5">{product.unit}</p>
        </div>
      </div>

      {/* Label */}
      <p className="text-xs text-gray-500 font-medium mb-1">আজকের দাম</p>

      {/* Footer Row: Price + Percentage Badge */}
      <div className="flex items-baseline justify-between">
        {/* Price */}
        <div className="flex items-baseline gap-1.5">
          <span className="text-2xl font-black text-gray-900 tracking-tight">
            {product.today}
          </span>
          <span className="text-sm font-semibold text-gray-700">
            tk
          </span>
        </div>

        {/* Percentage Badge */}
        <div
          className={`inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-xs font-bold ${
            product.change.dir==="up"
              ? "bg-[#fef2f2] text-[#dc2626]"
              : "bg-[#f0fdf4]  text-[#16a34a]"
          }`}
        >
          <span className={`text-sm ${product.change.dir==="up"?"":"rotate-180"}`}>▲</span>
          <span>{product.change.pct}%</span>
        </div>
      </div>
    </div>
  );
}

import { getAllProducts } from "@/utils/fetchData";
import React from "react";
import Marquee from "react-fast-marquee";
import { FaSortDown, FaSortUp } from "react-icons/fa";

const MarqueeSection = async () => {
  const marqueeData = await getAllProducts();
  console.log(marqueeData);
  return (
    <Marquee speed={70}>
      {marqueeData.map((product) => {
        return (
          <div
            className="flex items-center my-2 justify-center gap-2 text-lg ml-8"
            key={product.id}
          >
            <span>{product.image}</span>
            <span className="font-semibold">{product.nameBn}</span>
            <span>
              {product.today} tk/{product.unit}
            </span>
            <span>
              {product.change.dir === "up" ? (
                <span className="flex items-center justify-center gap-1 text-red-500 font-bold">
                  <span className="flex text-3xl  pt-3">
                    <FaSortUp />
                  </span>
                  <span>{product.change.pct}%</span>
                </span>
              ) : (
                <span className="flex items-center justify-center gap-1 text-green-500 font-bold">
                  <span className="flex text-3xl  pb-3">
                    <FaSortDown />
                  </span>
                  <span>{product.change.pct}%</span>
                </span>
              )}
            </span>
            <span></span>{" "}
          </div>
        );
      })}
    </Marquee>
  );
};

export default MarqueeSection;

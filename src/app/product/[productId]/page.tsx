import ProductBreadcrumbs from "@/components/product/ProductBreadcrumbs";
import { getAllProducts, getSingleProductData } from "@/utils/fetchData";
import { notFound } from "next/navigation";

interface IProductDetailViewProps {
  params: Promise<{ productId: string }>;
}

export default async function ProductDetailView({
  params,
}: IProductDetailViewProps) {
  const { productId } = await params;

  //   find product
  let exist;
  try {
    exist = (await getAllProducts()).find((product) => {
      return product.id === Number(productId);
    });
  } catch (error) {
    console.log(error);
  }

  let productData;

  //   check the product
  if (exist) {
    try {
      productData = await getSingleProductData(Number(productId));
    } catch (error) {
      console.log(error);
      notFound();
    }
  } else {
    notFound();
  }

  // all market
  const { markets } = productData;

  // min Price
  const minPrice = markets.reduce((acc, cur) => {
    const minPrice = acc < cur.min ? acc : cur.min;
    return minPrice;
  }, Number.POSITIVE_INFINITY);

  //   max price
  const maxPrice = markets.reduce((acc, cur) => {
    const maxPrice = acc > cur.max ? acc : cur.max;
    return maxPrice;
  }, 0);

  //   Average price
  const avg = markets
    .map((market) => {
      return (market.min + market.max) / 2;
    })
    .reduce((acc, cur) => {
      return acc + cur;
    }, 0);
  return (
    <div className="w-full min-h-screen bg-[#f3f6f3] p-4 md:p-10 font-sans text-gray-800">
      <div className="max-w-6xl mx-auto space-y-6">
        <ProductBreadcrumbs productData={productData}></ProductBreadcrumbs>
        {/* Top Product Summary Banner */}
        <div className="bg-[#f8faf8] border border-[#eaefea] rounded-3xl p-6 md:p-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-6 shadow-xs">
          {/* Left: Product Info */}
          <div className="flex items-center gap-4">
            <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center text-3xl shadow-xs border border-gray-100 flex-0">
              {productData.image}
            </div>
            <div>
              <h1 className="text-2xl md:text-3xl font-extrabold text-gray-900 tracking-tight">
                {productData.nameBn}
              </h1>
              <p className=" text-gray-500 font-medium mt-0.5">
                প্রতি {productData.unit} · {productData.category}
              </p>
              <p className=" text-gray-600 font-medium mt-2">
                গতকালকের তুলনায় আজ দাম{" "}
                <span className="font-bold text-gray-900">
                  {`${productData.change.dir === "up" ? "বেড়েছে" : "কমসে"}`}{" "}
                  {productData.change.pct}%
                </span>
              </p>
            </div>
          </div>

          {/* Right: Today's Price Badge */}
          <div className="bg-[#eef3ee] rounded-2xl p-4 px-6 text-right self-stretch md:self-auto flex flex-col items-center justify-center min-w-35">
            <span className=" text-gray-500 font-medium">আজকের দাম</span>
            <span className="text-2xl md:text-3xl font-black text-gray-900 leading-tight">
              {productData.today}
            </span>
            <span className=" text-gray-600 font-medium">
              টাকা / {productData.unit}
            </span>
            <span
              className={`${productData.change.dir === "up" ? "text-[#dc2626]" : "text-green-500"} font-bold  mt-1 flex items-center justify-end gap-0.5`}
            >
              <span
                className={`${productData.change.dir === "up" ? "" : "rotate-180"}`}
              >
                ▲
              </span>{" "}
              {productData.change.pct}%
            </span>
          </div>
        </div>

        {/* Main Content Box */}
        <div className="bg-[#f8faf8] border border-[#eaefea] rounded-3xl p-6 md:p-8 space-y-8 shadow-xs">
          {/* Price Overview Cards */}
          <div>
            <h2 className="text-base font-bold text-gray-900 mb-4">
              দামের সারসংক্ষেপ
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {/* Min Price Card */}
              <div className="bg-white border border-[#eaf0ea] rounded-2xl p-5 shadow-2xs">
                <p className="text-xs text-gray-500 font-medium mb-1">
                  সর্বনিম্ন দাম
                </p>
                <p className="text-2xl font-black text-[#16a34a]">
                  {minPrice} <span className="text-base font-bold">টাকা</span>
                </p>
                <p className="text-[11px] text-gray-400 font-medium mt-2">
                  সবচেয়ে কম দামের বাজার
                </p>
              </div>

              {/* Max Price Card */}
              <div className="bg-white border border-[#eaf0ea] rounded-2xl p-5 shadow-2xs">
                <p className="text-xs text-gray-500 font-medium mb-1">
                  সর্বাধিক দাম
                </p>
                <p className="text-2xl font-black text-[#dc2626]">
                  {maxPrice} <span className="text-base font-bold">টাকা</span>
                </p>
                <p className="text-[11px] text-gray-400 font-medium mt-2">
                  সবচেয়ে বেশি দামের বাজার
                </p>
              </div>

              {/* Avg Price Card */}
              <div className="bg-white border border-[#eaf0ea] rounded-2xl p-5 shadow-2xs">
                <p className="text-xs text-gray-500 font-medium mb-1">গড় দাম</p>
                <p className="text-2xl font-black text-[#16a34a]">
                  {(avg / markets.length).toFixed(2)}{" "}
                  <span className="text-base font-bold">টাকা</span>
                </p>
                <p className="text-[11px] text-gray-400 font-medium mt-2">
                  প্রতি কেজি-এর হিসাবে
                </p>
              </div>
            </div>
          </div>

          {/* Market Table */}
          <div>
            <h2 className="text-base font-bold text-gray-900 mb-4">
              বাজারভিত্তিক আজকের দাম
            </h2>

            <div className="overflow-x-auto">
              <table className="w-full text-left text-xs md:text-sm border-collapse">
                <thead>
                  <tr className="border-b border-gray-200 text-gray-500 font-semibold">
                    <th className="py-3 px-3 font-medium">বাজার</th>
                    <th className="py-3 px-3 font-medium">বিভাগ</th>
                    <th className="py-3 px-3 font-medium text-right">
                      সর্বনিম্ন
                    </th>
                    <th className="py-3 px-3 font-medium text-right">
                      সর্বাধিক
                    </th>
                    <th className="py-3 px-3 font-medium text-right">গড়</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200/60 font-medium text-gray-800">
                  {markets.map((item, index) => (
                    <tr
                      key={index}
                      className="hover:bg-gray-100/50 transition-colors"
                    >
                      <td className="py-3.5 px-3 font-semibold text-gray-900">
                        {item.market}
                      </td>
                      <td className="py-3.5 px-3 text-gray-600">
                        {item.division}
                      </td>
                      <td className="py-3.5 px-3 text-right">{item.min}</td>
                      <td className="py-3.5 px-3 text-right">{item.max}</td>
                      <td className="py-3.5 px-3 text-right font-bold text-gray-900">
                        {(item.min + item.max) / 2}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

import ProductsCard from "@/components/category/ProductsCard";
import { IProduct } from "@/types/type";
import { getCategoryData, getSingleCategoryData } from "@/utils/fetchData";
import { notFound } from "next/navigation";

interface IRiceCategorySectionProps {
  params: Promise<{ categoryId: string }>;
}

export default async function RiceCategorySection({
  params,
}: IRiceCategorySectionProps) {
  const { categoryId } = await params;

  const categoryID = await getCategoryData();

  const exiest = categoryID.find((category) => {
    return category.id === categoryId;
  });

  let singleCategory: IProduct[] | null = null;
  if (exiest) {
    singleCategory = await getSingleCategoryData(categoryId);
  } else {
    notFound();
  }
  console.log();
  return (
    <div
      className="w-full min-h-screen bg-[#f3f6f3] p-6 md:p-12 font-sans"
      data-category-id={categoryId}
    >
      <div className="max-w-6xl mx-auto space-y-6">
        {/* Top Header Card */}
        <div className="bg-[#f8faf8] border border-[#eaefea] rounded-2xl p-6 md:p-8 flex items-center gap-4 shadow-sm">
          <div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center text-3xl shadow-xs flex-0">
            {exiest.icon}
          </div>
          <div>
            <h1 className="text-2xl md:text-3xl font-extrabold text-[#1a201c] tracking-tight">
              {exiest.nameBn}
            </h1>
            <p className="text-sm text-gray-500 font-medium mt-1">
              {singleCategory ? singleCategory.length : null}টি পণ্যের আজকের দাম
              ও পরিবর্তন
            </p>
          </div>
        </div>

        {/* Filter and Count Row */}
        <div className="flex items-center justify-between text-xs md:text-sm text-gray-600 px-1 pt-2">
          <span className="font-medium text-gray-700">
            মোট {singleCategory ? singleCategory.length : null}টি পণ্য দেখানো
            হচ্ছে
          </span>

          <div className="flex items-center gap-2">
            <span className="text-gray-500 font-medium">সাজান</span>
            {/* <div className="relative inline-block">
              <button className="bg-white border border-gray-200 rounded-lg px-3 py-1.5 text-xs font-semibold text-gray-800 flex items-center gap-1.5 hover:bg-gray-50 transition-colors shadow-xs">
                <span></span>
                <ChevronDown className="w-3.5 h-3.5 text-gray-500" />
              </button>
            </div> */}
          </div>
        </div>

        {/* Product Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5">
          <ProductsCard categoryData={singleCategory}></ProductsCard>
        </div>
      </div>
    </div>
  );
}

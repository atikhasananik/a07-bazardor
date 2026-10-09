import { ICategory } from "@/types/type";
import Link from "next/link";

interface ICategoryDataProps {
  categoryData: ICategory[];
}
const Categories = async ({ categoryData }: ICategoryDataProps) => {
  return (
    <div className="container mx-auto relative">
      <div
        className={`" grid  my-1 gap-2 lg:max-w-3xl space-x-1 items-center justify-start  overflow-x-auto no-scrollbar max-sm:grid-cols-4 grid-cols-${categoryData.length} `}
      >
        {categoryData.map((cat) => {
          return (
            <Link href={`/category/${cat.id}`} key={cat.id}>
              <button
                className={`flex items-center gap-2  py-1 px-3 rounded-2xl text-sm font-medium  relative top-0 whitespace-nowrap text-gray-600  hover:cursor-pointer hover:bg-green-700 hover:text-white transition-all duration-150  hover:font-extrabold
              `}
              >
                <span className="text-base">{cat.icon}</span>
                <span>{cat.nameBn}</span>
              </button>
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default Categories;

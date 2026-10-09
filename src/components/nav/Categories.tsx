import { ICategory } from "@/types/type";
import Link from "next/link";

interface ICategoryDataProps {
  categoryData: ICategory[];
}
const Categories = async ({ categoryData }: ICategoryDataProps) => {
  return (
    <div className="container mx-auto relative">
      <div
        style={{ filter: "blur(5px)" }}
        className=" px-6 mt-1 flex items-center justify-start space-x-8 overflow-x-auto no-scrollbar "
      >
        {categoryData.map((cat) => {
          return (
            <button
              key={cat.id}
              className={`flex items-center gap-2 py-1 px-3 rounded-2xl text-sm font-medium  relative whitespace-nowrap text-gray-600  hover:font-extrabold"
              `}
            >
              <span className="text-base">{cat.icon}</span>
              <span>{cat.nameBn}</span>
            </button>
          );
        })}
      </div>

      <div className="absolute top-0 left-0 z-10 px-6 mt-1 flex items-center justify-start space-x-8 overflow-x-auto no-scrollbar ">
        {categoryData.map((cat) => {
          return (
            <Link href={`/category/${cat.id}`} key={cat.id}>
              <button
                className={`flex items-center gap-2 py-1 px-3 rounded-2xl text-sm font-medium  relative top-0 whitespace-nowrap text-gray-600  hover:cursor-pointer hover:bg-green-700 hover:text-white transition-all duration-150  hover:font-extrabold
              `}
              >
                <span className="text-base">{cat.icon}</span>
                <span >{cat.nameBn}</span>
              </button>
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default Categories;

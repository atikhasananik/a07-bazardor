import { ICategory } from "@/types/type";

interface ICategoryDataProps {
  categoryData: ICategory[];
}
const Categories = async ({ categoryData }: ICategoryDataProps) => {

  return (
    <div className="container relative mx-auto relative">
      <div style={{filter:"blur(5px)"}}  className=" px-6 mt-1 flex items-center justify-start space-x-8 overflow-x-auto no-scrollbar ">
        {categoryData.map((cat) => {
          return (
            <button
              key={cat.id}
              className={`flex items-center gap-2 pb-3.5 pt-1 text-sm font-medium transition-colors relative whitespace-nowrap"text-gray-600 hover:text-gray-900"
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
            <button
              key={cat.id}
              className={`flex items-center gap-2 pb-3.5 pt-1 text-sm font-medium transition-colors relative whitespace-nowrap"text-gray-600 hover:text-gray-900"
              `}
            >
              <span className="text-base">{cat.icon}</span>
              <span className=" hover:text-green-900  hover:font-extrabold ">{cat.nameBn}</span>
            </button>
          );
        })}

      </div>
    </div>
  );
};

export default Categories;

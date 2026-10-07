import { ICategory } from "@/types/type";

interface ICategoryDataProps {
  categoryData: ICategory[];
}
const Categories = async ({ categoryData }: ICategoryDataProps) => {
  return (
    <>
      <div className="max-w-7xl mx-auto px-6 mt-1 flex items-center justify-start space-x-8 overflow-x-auto no-scrollbar">
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
    </>
  );
};

export default Categories;

import ProductsCatagoryCom from "@/components/category/ProductsCatagoryCom";
import { getCategoryData, getSingleCategoryData } from "@/utils/fetchData";
import { notFound } from "next/navigation";

interface ICategorySectionProps {
  params: Promise<{ categoryId: string }>;
}

export default async function CategorySection({
  params,
}: ICategorySectionProps) {
  const { categoryId } = await params;
  let singleCategory;

  let categoryID;
  try {
    categoryID = await getCategoryData();
  } catch (error) {
    console.log(error);
    notFound();
  }

  const exiest = categoryID.find((category) => {
    return category.id === categoryId;
  });

  if (!exiest) {
    notFound();
  }

  try {
    singleCategory = await getSingleCategoryData(categoryId);
  } catch (error) {
    console.log(error);
    notFound();
  }

  return (
    <>
      <ProductsCatagoryCom
        data={{ exiest, categoryID, singleCategory, categoryId }}
      ></ProductsCatagoryCom>
    </>
  );
}

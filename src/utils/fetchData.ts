import { ICategory, IProduct } from "@/types/type";

// get category data
export const getCategoryData = async () => {
  const res = await fetch(
    "https://api.api-store.workers.dev/api/bazardor/categories",
    { next: { revalidate: 60 * 60 } },
  );
  const data = (await res.json()) as ICategory[];
  return data;
};

// get All product
export const getAllProducts = async () => {
  const res = await fetch(
    "https://api.api-store.workers.dev/api/bazardor/products",
    { next: { revalidate: 60 * 60 } },
  );
  const data = (await res.json()) as IProduct[];
  return data;
};

// get single category data

export const getSingleCategoryData = async (categoryId: string) => {
  const res = await fetch(
    `https://api.api-store.workers.dev/api/bazardor/products?category=${categoryId}`,
  );
  const data = (await res.json()) as IProduct[];
  return data;
};

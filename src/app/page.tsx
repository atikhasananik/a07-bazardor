import HeroContent from "@/components/heroSection/HeroContent";
import AllCards from "@/components/todaysPriceSection/AllCards";
import PriceDownSection from "@/components/todaysPriceSection/PriceDownSection";
import PriceUpSection from "@/components/todaysPriceSection/PriceUpSection";
import { getAllProducts } from "@/utils/fetchData";

export default async function Home() {
    const productData = await getAllProducts();
  
  return (
    <div className="container mx-auto text-black">
      <HeroContent></HeroContent>
      <PriceUpSection></PriceUpSection>
      <PriceDownSection></PriceDownSection>
      <AllCards productData={productData}></AllCards>
    </div>
  );
}

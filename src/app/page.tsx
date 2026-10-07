import HeroContent from "@/components/heroSection/HeroContent";
import AllCards from "@/components/todaysPriceSection/AllCards";
import PriceDownSection from "@/components/todaysPriceSection/PriceDownSection";
import PriceUpSection from "@/components/todaysPriceSection/PriceUpSection";

export default function Home() {
  return (
    <div className="container mx-auto">
      <HeroContent></HeroContent>
      <PriceUpSection></PriceUpSection>
      <PriceDownSection></PriceDownSection>
      <AllCards></AllCards>
    </div>
  );
}

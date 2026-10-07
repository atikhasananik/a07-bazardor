import { getDate } from "@/utils/utilsFuntion";
import Image from "next/image";
import heroImg from "@/assets/image/bazar-hero.png";

const HeroContent = () => {
  const date = getDate();
  return (
    <div>
      <div className="w-full  p-4">
        <div className="bg-[#f6f9f6] border border-[#e8efe8] rounded-3xl p-8 md:p-10 flex flex-col md:flex-row items-center justify-between gap-8 relative overflow-hidden">
          {/* Left Content Section */}
          <div className="flex-1 space-y-4 z-10">
            {/* Date Badge */}
            <div className="inline-block bg-[#e2f0e6] text-[#0c8a43] text-xs font-semibold px-3.5 py-1.5 rounded-full">
              {date}
            </div>

            {/* Heading */}
            <h1 className="text-3xl md:text-4xl font-bold text-[#1c241e] tracking-tight">
              আজকের বাজারের দাম এক নজরে
            </h1>

            {/* Description */}
            <p className="text-sm md:text-base text-gray-500 font-normal leading-relaxed max-w-xl">
              চাল, ডাল, তেল, সবজি, মাছ, মাংস, ডিম ও মসলার দাম — বাজারভিত্তিক
              বিস্তারিত, গড়, সর্বনিম্ন-সর্বাধিক এবং দামের পরিবর্তন এক জায়গায়।
            </p>

            {/* CTA Button */}
            <div className="pt-2">
              <button className="bg-[#0c8a43] hover:bg-[#0a7538] text-white text-sm font-semibold px-6 py-2.5 rounded-xl transition-all shadow-sm active:scale-[0.98]">
                সব পণ্য দেখুন
              </button>
            </div>
          </div>

          {/* Right Illustration Section (Fruit Basket SVG) */}
          <div>
            <Image src={heroImg} alt="hero img"></Image>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroContent;

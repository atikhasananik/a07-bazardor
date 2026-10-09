import React from 'react';
import Link from 'next/link';
import { Home, ArrowLeft } from 'lucide-react';

export default function NotFound() {
  return (
    <div className="w-full min-h-screen bg-[#f3f6f3] flex flex-col justify-center items-center p-4 font-sans text-gray-800">
      
      {/* Visual Badge / Icon */}
      <div className="flex flex-col items-center gap-3 text-center mb-6">
        <div className="w-20 h-20 bg-[#e2f0e6] text-[#0c8a43] rounded-3xl flex items-center justify-center font-black text-3xl shadow-xs">
          404
        </div>
        
        <h1 className="text-2xl md:text-3xl font-extrabold text-gray-900 tracking-tight">
          পেজটি পাওয়া যায়নি!
        </h1>
        
        <p className="text-xs md:text-sm text-gray-500 font-medium max-w-sm">
          আপনি যে পেজটি খুঁজছেন তা হয়তো মুছে ফেলা হয়েছে, নাম পরিবর্তন করা হয়েছে অথবা সাময়িকভাবে অনুপলব্ধ।
        </p>
      </div>

      {/* Main Action Card */}
      <div className="w-full max-w-md bg-[#f8faf8] border border-[#eaefea] rounded-3xl p-6 md:p-8 shadow-xs text-center space-y-4">
        
        <p className="text-xs text-gray-600 font-medium">
          সঠিক ঠিকানা দেখতে ড্যাশবোর্ড বা হোম পেজে ফিরে যান।
        </p>

        {/* Home Button */}
        <Link
          href="/"
          className="w-full flex items-center justify-center gap-2 bg-[#0c8a43] hover:bg-[#0a7538] text-white font-bold text-sm py-3 px-4 rounded-xl transition-all shadow-sm active:scale-[0.99]"
        >
          <Home className="w-4 h-4" />
          <span>হোম পেজে ফিরে যান</span>
        </Link>

      </div>

      {/* Footer Back Link */}
      <div className="mt-8 text-center">
        <Link
          href="/"
          className="inline-flex items-center gap-1.5 text-xs text-gray-500 hover:text-gray-800 font-medium transition-colors"
        >
          <ArrowLeft className="w-3.5 h-3.5" />
          <span>পূর্ববর্তী পেজে ফিরে যান</span>
        </Link>
      </div>

    </div>
  );
}
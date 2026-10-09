'use client';

import React, { useEffect } from 'react';
import Link from 'next/link';
import { AlertTriangle, RefreshCw, Home } from 'lucide-react';

interface ErrorProps {
  error: Error & { digest?: string };
  reset: () => void;
}

export default function Error({ error, reset }: ErrorProps) {
  useEffect(() => {
    // যেকোনো এরর ট্র্যাকিং সার্ভিস (যেমন: Sentry)-এ এরর লগ করতে পারেন
    console.error('App Error:', error);
  }, [error]);

  return (
    <div className="w-full min-h-screen bg-[#f3f6f3] flex flex-col justify-center items-center p-4 font-sans text-gray-800">
      
      {/* Header Section */}
      <div className="text-center mb-8 space-y-1.5">
        <div className="inline-flex items-center justify-center w-16 h-16 bg-red-100 text-red-600 rounded-2xl mb-2 shadow-xs">
          <AlertTriangle className="w-8 h-8 stroke-2" />
        </div>
        <h1 className="text-2xl md:text-3xl font-extrabold text-gray-900 tracking-tight">
          কোনো একটি সমস্যা হয়েছে!
        </h1>
        <p className="text-xs md:text-sm text-gray-500 font-medium max-w-md">
          পেজটি লোড করার সময় একটি অপ্রত্যাশিত ত্রুটি ঘটেছে। পুনরায় চেষ্টা করুন অথবা হোম পেজে ফিরে যান।
        </p>
      </div>

      {/* Main Action Card */}
      <div className="w-full max-w-md bg-[#f8faf8] border border-[#eaefea] rounded-3xl p-6 md:p-8 shadow-xs text-center space-y-5">
        
        {/* Error Message Details (Optional for debugging) */}
        {error?.message && (
          <div className="bg-red-50/70 border border-red-100 rounded-xl p-3 text-left">
            <p className="text-xs font-mono text-red-700 break-words">
              {error.message}
            </p>
          </div>
        )}

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-3 pt-2">
          {/* Reset/Try Again Button */}
          <button
            onClick={() => reset()}
            className="flex-1 flex items-center justify-center gap-2 bg-[#0c8a43] hover:bg-[#0a7538] text-white font-bold text-sm py-3 px-4 rounded-xl transition-all shadow-sm active:scale-[0.99]"
          >
            <RefreshCw className="w-4 h-4" />
            <span>আবার চেষ্টা করুন</span>
          </button>

          {/* Home Button */}
          <Link
            href="/"
            className="flex-1 flex items-center justify-center gap-2 border border-[#e2e8e2] bg-white hover:bg-gray-50 text-gray-800 font-bold text-sm py-3 px-4 rounded-xl transition-colors shadow-2xs"
          >
            <Home className="w-4 h-4 text-gray-600" />
            <span>হোমে ফিরে যান</span>
          </Link>
        </div>

      </div>

      {/* Footer Back Link */}
      <div className="mt-8 text-center">
        <Link
          href="/"
          className="text-xs text-gray-500 hover:text-gray-800 font-medium transition-colors"
        >
          ← হোম পেজে ফিরে যান
        </Link>
      </div>

    </div>
  );
}
'use client';

import React, { useState } from 'react';
import { LogOut } from 'lucide-react';
import Image from 'next/image';

export default function ProfilePage() {
  const [name, setName] = useState('');

  const handleUpdate = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle update logic here
  };

  const handleSignOut = () => {
    // Handle sign out logic here
  };

  return (
    <div className="w-full min-h-screen bg-[#f3f6f3] p-6 md:p-12 font-sans text-gray-800">
      <div className="max-w-4xl mx-auto space-y-6">
        
        {/* Page Title & Subtitle */}
        <div className="space-y-1">
          <h1 className="text-2xl md:text-3xl font-extrabold text-gray-900 tracking-tight">
            আমার প্রোফাইল
          </h1>
          <p className="text-xs md:text-sm text-gray-500 font-medium">
            আপনার অ্যাকাউন্টের তথ্য এখানে দেখুন।
          </p>
        </div>

        {/* Top Profile Card */}
        <div className="bg-[#f8faf8] border border-[#eaefea] rounded-3xl p-6 md:p-8 flex items-center justify-between shadow-xs">
          {/* User Info */}
          <div className="flex items-center gap-4">
            <div className="w-16 h-16 rounded-2xl overflow-hidden bg-gray-200 flex-shrink-0">
              <Image
                src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=150"
                alt="Rezwan Ahmed"
                className="w-full h-full object-cover"
                width={60}
                height={60}
              />
            </div>
            <div>
              <h2 className="text-lg md:text-xl font-bold text-gray-900 leading-tight">
                Rezwan Ahmed
              </h2>
              <p className="text-xs md:text-sm text-gray-500 font-medium mt-0.5">
                rezwanahmed@gmail.com
              </p>
            </div>
          </div>

          {/* Sign Out Button */}
          <button
            onClick={handleSignOut}
            className="flex items-center gap-2 border border-[#f87171] bg-white text-[#dc2626] hover:bg-red-50 text-xs md:text-sm font-medium px-4 py-2 rounded-xl transition-colors shadow-2xs"
          >
            <LogOut className="w-4 h-4 stroke-[2]" />
            <span>সাইন আউট</span>
          </button>
        </div>

        {/* Info Update Form Card */}
        <div className="bg-[#f8faf8] border border-[#eaefea] rounded-3xl p-6 md:p-8 shadow-xs">
          <h3 className="text-base font-bold text-gray-900 mb-6">
            তথ্য
          </h3>

          <form onSubmit={handleUpdate} className="space-y-5 max-w-full">
            <div className="space-y-2">
              <label htmlFor="name" className="block text-xs font-semibold text-gray-700">
                নাম
              </label>
              <input
                type="text"
                id="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full bg-[#fafdfa] border border-[#e2e8e2] rounded-xl px-4 py-3 text-sm text-gray-900 focus:outline-none focus:ring-2 focus:ring-[#0c8a43]/30 focus:border-[#0c8a43] transition-all"
              />
            </div>

            <button
              type="submit"
              className="w-full bg-[#0c8a43] hover:bg-[#0a7538] text-white font-semibold text-sm py-3 rounded-xl transition-all shadow-md active:scale-[0.99]"
            >
              আপডেট
            </button>
          </form>
        </div>

      </div>
    </div>
  );
}